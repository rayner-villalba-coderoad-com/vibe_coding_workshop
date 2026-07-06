# Rayner Villalba — Portfolio

A personal portfolio website for Rayner Villalba, Software Developer. Built with React and Vite, it presents professional experience, featured projects, and contact information in a clean, animated single-page layout.

## What It Does

- **Hero section** — name, title, and links to email, GitHub, and LinkedIn
- **Experience section** — work history displayed as animated cards
- **Projects section** — highlighted projects with tech tags and live/repo links
- **Education section** — academic background displayed as a card
- **Contact section** — footer-level contact prompt
- **Scroll animations** — cards and the hero fade in as they enter the viewport via Intersection Observer

## Tech Stack

| Layer | Choice |
|---|---|
| UI framework | React 19 |
| Build tool | Vite 8 |
| Styling | CSS custom properties (no CSS-in-JS, no utility framework) |
| Animations | Intersection Observer API |
| Language | JSX / JavaScript |

No external UI libraries. No state management library. Dependencies are intentionally minimal.

## Project Structure

```
src/
  components/
    Hero.jsx         # Header with name, tagline, and contact links
    Experience.jsx   # Work history section
    Projects.jsx     # Project cards grid
    Education.jsx    # Education / academic background section
    Contact.jsx      # Contact footer section
  data/
    experience.js    # Work history entries (edit here to update content)
    projects.js      # Project entries (edit here to update content)
    education.js     # Education entries (edit here to update content)
  App.jsx            # Root component; wires sections and owns scroll animation logic
  main.jsx           # React entry point
index.html           # HTML shell
```

Content (experience, projects, education) lives in `src/data/` — update those files to change what appears on the site without touching any component code.

## Running Locally

Node 18+ required.

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in a browser. The dev server hot-reloads on file changes.

## Building for Production

```bash
npm run build
```

Output goes to `dist/`. Serve that directory with any static host (Netlify, Vercel, GitHub Pages, S3, etc.). No server-side runtime is needed.

```bash
npm run preview   # preview the production build locally
```

## Customization

- **Colors** — all defined as CSS custom properties in `src/styles/`. Change `--accent`, `--bg`, `--text`, etc. in one place to retheme the entire site.
- **Content** — edit `src/data/experience.js` and `src/data/projects.js`.
- **Education** — edit `src/data/education.js`.
- **Contact links** — edit `src/components/Hero.jsx` (email, GitHub, LinkedIn URLs).

## Linting

```bash
npm run lint
```

ESLint is configured with the React Hooks and React Refresh plugins.