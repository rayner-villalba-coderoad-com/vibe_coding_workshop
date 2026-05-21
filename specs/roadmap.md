# Roadmap

Each milestone is independently shippable. Complete one before starting the next.

---

## M1 — Vite + React scaffold

**Goal:** Replace the vanilla HTML/JS/CSS with a working Vite + React project. The site should look identical to today at the end of this milestone.

Steps:
- `npm create vite@latest` inside the repo, React template
- Move existing CSS variables and global styles into `src/styles/global.css`
- Create `App.jsx` that renders static HTML matching the current `index.html`
- Confirm `npm run dev` works and `npm run build` produces a deployable `dist/`
- Delete the old `index.html`, `main.js`, `style.css`

---

## M2 — Component split + data layer

**Goal:** Break the monolith App into components and extract content into data files.

Steps:
- Create `Hero.jsx`, `Experience.jsx`, `Projects.jsx`, `Contact.jsx`
- Extract experience entries into `src/data/experience.js` (array of objects)
- Extract project entries into `src/data/projects.js`
- Each component reads from its data file and renders the list
- No visual changes — parity with M1

---

## M3 — Dark theme redesign with more personality

**Goal:** Elevate the visual design — dark base with gradient accents and bolder typography.

Steps:
- Update CSS variables: richer gradients, stronger accent contrast
- Hero section: add gradient background, larger name treatment, animated tagline
- Add subtle gradient borders or glow effects on cards (hover state)
- Upgrade typography: pick a display font for headings (Google Fonts or system stack)
- Polish scroll-fade animation (keep the Intersection Observer pattern, port to a React hook)

---

## M4 — Real content

**Goal:** Replace placeholder text with actual bio, jobs, and projects.

Steps:
- Fill `src/data/experience.js` with real job history
- Fill `src/data/projects.js` with real projects (title, description, links, tags)
- Update Hero with real name, photo/avatar, tagline, and social links
- Add Contact section with GitHub, LinkedIn, and email links

---

## M5 — Deploy

**Goal:** Live on the internet with a custom domain (optional).

Steps:
- Connect repo to Netlify or Vercel
- Configure build command (`npm run build`) and publish directory (`dist`)
- Verify production build (no broken assets, correct meta tags, og:image)
- (Optional) Point a custom domain

---

## Backlog (post-v1)

- Downloadable PDF resume
- Contact form via Netlify Forms
- Skills section
- Blog / writing section
- Dark/light theme toggle
