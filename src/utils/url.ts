// Prefix an internal path with the site's base (e.g. /Carmen-Github-Portfolio on GitHub Pages).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
