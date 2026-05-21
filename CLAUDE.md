# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static personal portfolio website — no build tools, no frameworks, no dependencies. Three files comprise the entire project:

- `index.html` — page structure and content
- `style.css` — all styling via CSS custom properties
- `main.js` — scroll-triggered fade-in animations using Intersection Observer

## Running Locally

Serve the directory with any static HTTP server. For example:

```bash
python3 -m http.server 8080
# or
npx serve .
```

Open `http://localhost:8080` in a browser. There is no build step.

## Architecture

**CSS custom properties** (defined in `:root`) control the entire color scheme — always use these variables rather than hardcoding colors:
- `--bg`, `--bg-card`: background layers
- `--accent`: interactive/highlight color (`#4f8ef7`)
- `--text`, `--text-muted`: typography

**Card component** is the primary reusable pattern — every section (experience, projects, education) uses `.card` for consistent spacing, border, hover state, and fade-in animation.

**Animations** work via `main.js` adding a `.visible` class when `.card` or `.hero-inner` elements enter the viewport. The CSS handles the actual transition on `.visible`.

**Layout** uses a max-width 860px centered container (`#app > .container`). The projects section uses CSS Grid (`auto-fill, minmax(240px, 1fr)`); all other sections are single-column flex.
