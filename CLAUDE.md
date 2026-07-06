# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with Vite + React.

Key source files:
- `src/App.jsx` — root component; composes Hero, Experience, Projects, Education, Contact
- `src/components/` — individual section components (Hero, Experience, Projects, Education, Contact)
- `src/data/` — content arrays: `experience.js`, `projects.js`, `education.js`
- `src/styles/global.css` — all styling via CSS custom properties

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in a browser.

## Building for Production

```bash
npm run build
```

Output is in `dist/`.

## Architecture

**CSS custom properties** (defined in `:root` in `src/styles/global.css`) control the entire color scheme. Core variables:
- `--bg`, `--surface`: background layers
- `--accent`, `--accent-dim`: interactive/highlight colors
- `--text`, `--muted`: typography
- `--border`, `--tag-bg`, `--tag-color`: card borders and tag chips

Always use these variables rather than hardcoding colors.

**Data layer:** Content lives in `src/data/*.js` as exported arrays of objects. Components import and `.map()` over these arrays.

**Animations:** Scroll-triggered fade-in via an Intersection Observer that adds `.visible` to `.fade-in` elements; CSS handles the actual transition.