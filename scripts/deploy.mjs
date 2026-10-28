// Publishes the built site in dist/ to the gh-pages branch and pushes it to origin.
// Run via `npm run deploy` (which builds first). Pass --dry-run to skip the push.

import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const BRANCH = 'gh-pages';
const REMOTE = 'origin';
const dryRun = process.argv.includes('--dry-run');
const root = process.cwd();
const dist = join(root, 'dist');

// Use git from PATH if available, otherwise fall back to the copy bundled with GitHub Desktop.
function findGit() {
  try {
    execFileSync('git', ['--version'], { stdio: 'ignore' });
    return 'git';
  } catch {}
  const desktop = join(process.env.LOCALAPPDATA ?? '', 'GitHubDesktop');
  if (existsSync(desktop)) {
    const apps = readdirSync(desktop)
      .filter((name) => name.startsWith('app-'))
      .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
    for (const app of apps) {
      const candidate = join(desktop, app, 'resources', 'app', 'git', 'cmd', 'git.exe');
      if (existsSync(candidate)) return candidate;
    }
  }
  throw new Error('Could not find git. Install Git or GitHub Desktop.');
}

const gitPath = findGit();
const git = (args, opts = {}) =>
  execFileSync(gitPath, args, { cwd: root, encoding: 'utf8', ...opts })?.toString().trim();
const gitOk = (args) => {
  try {
    git(args, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
};

if (!existsSync(join(dist, 'index.html'))) {
  throw new Error('dist/index.html not found. Run `npm run build` first.');
}

const sha = git(['rev-parse', '--short', 'HEAD']);
const dirty = git(['status', '--porcelain']) !== '';
if (dirty) console.warn('Warning: you have uncommitted changes; they are included in this deploy.');

console.log(`Fetching ${REMOTE}/${BRANCH}...`);
const remoteExists = gitOk(['fetch', REMOTE, BRANCH]);

const worktree = mkdtempSync(join(tmpdir(), 'gh-pages-'));
try {
  // Start from the remote branch tip so the push is always a fast-forward.
  if (remoteExists) {
    git(['worktree', 'add', '-f', '-B', BRANCH, worktree, `${REMOTE}/${BRANCH}`], { stdio: 'inherit' });
  } else {
    git(['worktree', 'add', '-f', '--orphan', '-B', BRANCH, worktree], { stdio: 'inherit' });
  }

  for (const entry of readdirSync(worktree)) {
    if (entry !== '.git') rmSync(join(worktree, entry), { recursive: true, force: true });
  }
  cpSync(dist, worktree, { recursive: true });

  git(['-C', worktree, 'add', '-A']);
  if (git(['-C', worktree, 'status', '--porcelain']) === '') {
    console.log('No changes since the last deploy; nothing to publish.');
  } else {
    const message = `Deploy site built from main ${sha}${dirty ? ' (with uncommitted changes)' : ''}`;
    git(['-C', worktree, 'commit', '-q', '-m', message]);
    console.log(`Committed: ${message}`);
    if (dryRun) {
      console.log(`Dry run: skipped pushing ${BRANCH}.`);
    } else {
      git(['-C', worktree, 'push', REMOTE, `${BRANCH}:${BRANCH}`], { stdio: 'inherit' });
      console.log(`Pushed ${BRANCH} to ${REMOTE}.`);
    }
  }
} finally {
  gitOk(['worktree', 'remove', '--force', worktree]);
  rmSync(worktree, { recursive: true, force: true });
  gitOk(['worktree', 'prune']);
}
