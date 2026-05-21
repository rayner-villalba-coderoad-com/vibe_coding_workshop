# Tech Stack

## Decision: React + Vite

Migrating from vanilla HTML/CSS/JS to a React (Vite) setup.

### Why React + Vite

- Component model makes it easy to iterate on individual sections (Hero, Experience, Projects, Contact) independently.
- Vite gives fast HMR during development with zero config.
- Deploys as static files to Netlify/Vercel — no server needed.
- Familiar ecosystem; good fit if the project grows.

### What We Are NOT Adding

- No backend or API (content lives in the components/data files).
- No CMS or headless content layer.
- No CSS framework (Tailwind, Chakra, etc.) — custom CSS with CSS variables, same as the current site.
- No routing library — single-page, no URL-based navigation needed in v1.
- No state management library — local component state is sufficient.

## Stack Summary

| Layer | Choice |
|---|---|
| UI framework | React 18 |
| Bundler / dev server | Vite |
| Styling | CSS Modules or plain CSS with custom properties |
| Icons | Lucide React (lightweight, tree-shakeable) |
| Hosting | Netlify or Vercel (static deploy) |
| Package manager | npm |

## Project Structure (target)

```
vibe_coding/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx          — React entry point
│   ├── App.jsx           — Root component, section layout
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/             — Content as plain JS objects (no CMS)
│   │   ├── experience.js
│   │   └── projects.js
│   └── styles/
│       ├── global.css    — CSS variables, resets, typography
│       └── components/   — Per-component styles
└── specs/
```
