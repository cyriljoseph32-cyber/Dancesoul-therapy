# CLAUDE.md

Guidance for AI assistants working in this repository.

## What this repo is

**DanceSoulTherapy** — a complete brand package for a therapeutic dance business
in Koh Samui, Thailand. It contains two distinct kinds of deliverable:

1. **A single-page marketing website** (`src/`, `index.html`) — a premium,
   conversion-focused landing page built with React 19 + Vite + TypeScript.
2. **Brand/business documents** (`*.md` at the repo root) — business plan,
   marketing plan, site copy, and launch checklist, written in **French**.

There is no backend, database, or API. The site is fully static; all "booking"
flows are deep links to WhatsApp.

## Repository layout

```
├── index.html              # Vite entry HTML — <head>, fonts, SEO/OG meta
├── src/
│   ├── main.tsx            # React root mount (StrictMode)
│   ├── App.tsx             # ENTIRE site — all sections + content data
│   ├── App.css             # Site styles (section-by-section)
│   ├── index.css           # Design tokens (:root vars), reset, base type
│   └── assets/             # hero.png and framework SVGs
├── public/                 # favicon.svg, icons.svg (served as-is)
├── vite.config.ts          # Vite + @vitejs/plugin-react (default config)
├── eslint.config.js        # Flat ESLint config (TS + react-hooks + refresh)
├── tsconfig*.json          # app / node split; strict-ish bundler mode
│
├── README.md               # Project overview + deliverables table (French)
├── BUSINESS_PLAN.md        # Investor business plan (French)
├── SITE_CONTENU.md         # Editorial site content, SEO, UX (French)
├── PLAN_MARKETING.md       # 90-day launch plan (French)
└── DOMAINE_ET_LANCEMENT.md # Domain + deployment + prospecting checklist (French)
```

## Development workflow

```bash
npm install       # install dependencies
npm run dev       # Vite dev server (local preview with HMR)
npm run build     # tsc -b type-check, then vite build → /dist
npm run lint      # ESLint over the project
npm run preview   # serve the production build locally
```

There are **no tests** and no test runner configured. "Verifying a change" means
running `npm run build` (which type-checks via `tsc -b`) and `npm run lint`, and
where relevant checking the rendered page with `npm run dev`.

Deployment is a static-host drop of `/dist` (Vercel / Netlify, one click). See
`DOMAINE_ET_LANCEMENT.md`.

## How the site is built — key conventions

- **Everything lives in `src/App.tsx`.** The whole page is one `App` component.
  Section content (nav links, offers, benefits, testimonials, FAQ) is defined as
  **plain arrays/objects of constants at the top of the file**, then `.map()`ed
  into JSX. To edit copy or add an offer, edit those data structures — don't
  hand-write repeated markup.
- **Styling is plain CSS, no framework.** `index.css` holds the design tokens
  (CSS custom properties on `:root`) and the reset; `App.css` holds
  component/section styles, organized top-to-bottom to mirror the page. Class
  names are semantic (`.hero`, `.offer-grid`, `.faq-list`). Match the existing
  BEM-ish, hyphenated naming. Some CSS comments are in French.
- **Design tokens** (colors, fonts) are the CSS vars in `index.css` — e.g.
  `--terracotta`, `--sand`, `--eucalyptus`, `--ink`, `--gold`, `--serif`
  (Cormorant Garamond), `--sans` (Inter). Use these vars rather than hard-coded
  hex values. Fonts are loaded via Google Fonts in `index.html`.
- **Responsiveness** uses `clamp()` for fluid type/spacing rather than many
  breakpoints. Preserve that approach.
- **Booking = WhatsApp deep links.** All "Book" CTAs point to
  `https://wa.me/${WHATSAPP}?text=...` with a pre-filled, URL-encoded message.
  External links use `target="_blank" rel="noreferrer"`.

## Values to personalize before launch

These live as constants at the top of `src/App.tsx` (and are noted in the
README): `WHATSAPP` (international number, no `+`), `INSTAGRAM` URL, the
`testimonials` and `About` bio. SEO/OG/`<title>` metadata is in `index.html`.

## Language conventions

- **Site UI copy** (in `src/`) is in **English**.
- **Business/brand documents** (root `*.md`) and **some code comments** are in
  **French**. When editing a French document, keep writing in French; keep the
  site's UI copy in English unless asked otherwise.

## Working in this repo

- When adding site content, extend the existing data arrays in `App.tsx` and add
  matching styles in `App.css`; keep class naming and the token-based color
  system consistent.
- Run `npm run build` and `npm run lint` before considering a code change done.
- `dist/` and `node_modules/` are git-ignored; never commit build output.
</content>
</invoke>
