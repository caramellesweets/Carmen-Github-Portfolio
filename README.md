# Carmen-Github-Portfolio

My personal portfolio site, built with [Astro](https://astro.build).

## Getting started

Requires Node.js 22.23.4 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Editing content

Most of the text (name, intro, about, skills, projects, links) lives in
[`src/data/site.ts`](src/data/site.ts). Edit that file and the page updates.

## Project structure

```
public/            static files served as-is (favicon, images)
src/
  components/      Header, Footer, ProjectCard
  data/site.ts     all editable site content
  layouts/         BaseLayout (HTML shell, theme script)
  pages/           index.astro (home), 404.astro
  styles/          global.css (colors, typography, shared classes)
```

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the static site into `./dist/`     |
| `npm run preview` | Preview the production build locally     |
