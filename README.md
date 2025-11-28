# Ecommerce Frontend Design

This repository contains a static frontend for an ecommerce design (HTML, CSS, partials, and small JS). The project is configured to use Vite for a fast local dev server and production build.

## Prerequisites

- Node.js (recommended v18 or later)
- npm (bundled with Node.js)

## Install

Open a terminal in the project root (`c:\Intership\ecommerce-frontend-design`) and run:

```powershell
npm install
```

## Development

Start a fast dev server with hot reload:

```powershell
npm run dev
```

Open `http://localhost:5173` (Vite default) in your browser. If the project uses partials loaded via `JS/main.js`, the dev server will serve them correctly.

## Build (Production)

Build static assets into the `dist/` folder:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Project structure (key files)

- `main-index.html` — main entry page that includes partials
- `partial/` — HTML fragments (header, footer, hero, etc.)
- `CSS/` — styling files (see `style.css`, `hero.css`, `recommended.css`)
- `JS/` — client-side scripts (e.g., `main.js`, `file-import.js`)
- `image/`, `flag/` — image assets referenced by the pages

## Notes & Recommendations

- Remix Icon: several components use `ri-` classes. If icons don't render, add this line to the `<head>` of your HTML files:

```html
<link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
```

- If static partials are fetched with relative paths, ensure Vite serves them (dev server root is project root). For complex partial loading you may prefer to use a lightweight template setup or a small build step.

- To persist language/country selections, extend `JS/main.js` to save to `localStorage` (not included by default).

## Customization

- Update CSS files in `CSS/` to tweak layout and breakpoints. I added mobile-first responsive utilities and grid rules across `style.css`, `recommended.css`, `hero.css`, `services.css`, and `header-style.css`.

## Troubleshooting

- Ports: If `5173` is occupied, Vite will choose another free port. Check the terminal output after `npm run dev`.
- If assets (images, flags) fail to load, verify file paths in `partial/*.html` and ensure the files exist in the `image/` or `flag/` folders.

If you want, I can:

- Add a simple `serve` script (static server) to `package.json` for preview without Vite.
- Add `localStorage` persistence for dropdown selections.
- Scaffold a minimal `index.html` that imports the partials for an out-of-the-box demo.

---

If you'd like any of the optional items, tell me which and I'll add them.
# ecommerce-frontend-design
intern Web Developer Hub
