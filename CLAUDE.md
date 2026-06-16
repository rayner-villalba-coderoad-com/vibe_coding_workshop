# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with React and Vite.

Key files and directories:
- `src/main.jsx` — Application entry point
- `src/App.jsx` — Main application component containing layout and sections
- `src/styles/global.css` — Global styles and CSS custom properties
- `vite.config.js` — Vite configuration

## Running Locally

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

To build the project for production:

```bash
npm run build
```

## Architecture

**React + Vite**: The application is structured as a modern React single-page application. Components are written in JSX and styled using global CSS.

**CSS custom properties** (defined in `src/styles/global.css` under `:root`) control the color scheme and styling. Always use these variables rather than hardcoding colors:
- `--bg-primary`, `--bg-secondary`: background layers
- `--text-primary`, `--text-secondary`: typography
- `--accent`: interactive/highlight color
- `--border-color`: borders and dividers

**Layout**: The layout uses a responsive container with a max-width. Sections (such as experience, projects, education) use consistent card layouts, flexbox, and CSS grid for responsive design.