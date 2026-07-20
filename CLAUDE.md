# DanceSoulTherapy — Project Rules

Premium movement-therapy brand, Koh Samui. Signature: **Awaken · Express · Heal**.
Live site: Next.js on Vercel, deployed from `main`.

## Brand

- Somatic healing / movement therapy — modern, **not mystical, not religious**.
- Wellness-claim governance: emotional-wellbeing practice, never medical treatment or cure.
- Founder: Hannah. Contacts in `lib/site.ts` (single source of truth — never hardcode numbers/links in pages).
- Core IP: `THE_DANCESOUL_METHOD.md` (confidential). Brand system: `BRAND_BLUEPRINT.md`, `brand/`.

## Design system (never violate)

- **Tokens only** — OKLCH palette in `app/globals.css` `:root`. Night `--night`, canopy `--canopy/-2`, ink `--ink`, text `--mist/-70/-45`, accent `--gold` (+`--gold-deep`, `--ember`), lines `--hairline/-soft`.
- **Gold is jewelry**: CTAs, hairlines, index numerals, micro-labels only. Never body text, never fields of gold.
- **Type**: Cormorant Garamond (display, italic accents) + Manrope (body/UI). No Inter/Poppins/Roboto.
- **Layout**: left-aligned by default; asymmetric 12-col grid (`.grid12`, span/offset utils); varied section rhythm. Center only short hero-band lines.
- **Radius**: 2px on interactive/cards. No pills except mobile FAB.
- **Borders**: alpha hairlines. Shadows tone-matched (`--shadow`).
- **Motion**: `data-reveal` + `RevealInit` (IntersectionObserver) — slow fades only; must honor `prefers-reduced-motion`.

### Banned (the AI/template look)
Pastel gradients, purple/lavender/mint; blobs or floating organic filler; glowing orbs; gradient buttons/text; icon-in-colored-circle grids; centered-everything; uniform bubbly radius; colored card side-borders; "Welcome to / Unlock the power of" copy; lotus/mandala/chakra/Buddha/prayer imagery; emoji as design; stock smiling-yoga photos.

## Stack (minimum, do not add without need)

Next.js 15 App Router (SSG) · hand-rolled CSS tokens (no Tailwind) · no animation lib · content in `lib/site.ts` + `lib/posts.ts` (Sanity is a Phase-3 item, see `SITE_SCOPE.md`) · Vercel via git push to `main`.

## Imagery

Authored light/shadow compositions (foliage SVG, film grain) hold the photographic slots until Hannah's brand shoot. Slots: hero, `.break`, gallery tiles, pillars. Real imagery must be: movement in natural light, hands/breath/feet, tropical architecture, foliage shadow — cinematic, no faces required, never stock-spa. Image generation via Bloom MCP needs interactive user approval; sandbox egress blocks image CDNs (can't download — verify before shipping any remote image).

## Workflow

- Develop on `claude/dancesoultherapy-business-plan-r7g02j`; ship = ff-merge to `main` (Vercel auto-deploys). Never push elsewhere.
- Verification before every ship: `npm run build` (all routes static) → `npm run start` + curl smoke all routes → Playwright full-page screenshots at **1280×900 and 375×780** → review against the ban-list → WCAG AA contrast on new text/surface pairs.
- Playwright in this sandbox: `executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'`, `--no-sandbox`, import from `/opt/node22/lib/node_modules/playwright/index.js`.
- Commit signing can 502 transiently — retry with backoff.
- SEO: per-page metadata + JSON-LD (LocalBusiness/FAQ/Article), `app/sitemap.ts`, `app/robots.ts`. Keep intact.

## Open TODOs (owner: Hannah)

Cal.com handle → `CAL_LINK` in `lib/site.ts` · real schedule times · bio/portrait/gallery photos · real reviews · domain `dancesoultherapy.com` in Vercel.

## Central memory

Cyril's cross-project memory lives in the `cyriljoseph32-cyber/Coconut-Samui-Rugby-Academy`
repo under `brain/memoire/` — this project's sheet is
`brain/memoire/projets/dancesoul-therapy.md`. When starting a task, consult the sheet if
reachable (sibling checkout at `/home/user/Coconut-Samui-Rugby-Academy/` or via GitHub).
After a significant change here, update the sheet + `brain/memoire/journal.md`, or flag it
to Cyril so the `memory` agent does it. Never copy confidential IP
(`THE_DANCESOUL_METHOD.md`) into the memory — reference it only.
