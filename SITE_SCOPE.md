# Full Website — Scope Document (#4)

Scope for the production multi-page site that replaces the current single-page MVP. Approve this before I write code.

---

## 1. What changes vs. today

| | MVP (now, live) | Production site (this scope) |
|---|---|---|
| Type | Single page, React/Vite | Multi-page, Next.js (App Router) |
| Pages | 1 | 13 (see §3) |
| Content | Hard-coded | CMS-editable (Sanity) for blog + retreats |
| Booking | WhatsApp link | Cal.com embed + WhatsApp fallback |
| SEO | Basic meta | Full: per-page meta, schema, sitemap, i18n-ready |
| Identity | Applied ✓ | Carried over unchanged |

The MVP stays live until the new site is ready, then swaps at the same domain.

---

## 2. Tech (from Blueprint — no change)

Next.js (App Router) · Tailwind + tokens · Motion · Sanity (blog/retreats) · Cal.com (booking) · Vercel. Supabase/Stripe deferred to Phase 3 (accounts/payments). Self-hosted fonts for CWV.

---

## 3. Pages & build effort

| # | Page | Key blocks | Effort |
|---|---|---|---|
| 1 | Home | hero · concept · benefits · offers · transformation · retreats · proof · FAQ · CTA | M |
| 2 | What is DanceSoulTherapy | definition · the Method · vs yoga/meditation · who | M |
| 3 | About | founder · philosophy · principles | S |
| 4 | Private Sessions | for whom · formats · pricing · book | S |
| 5 | Group Sessions | schedule · levels · locations · book | S |
| 6 | Corporate Wellness | problem · offer · formats · enquire | S |
| 7 | Retreats (CMS) | listing + per-retreat template (editorial, apply) | L |
| 8 | Testimonials | quotes · video · aggregate | S |
| 9 | Gallery | film + stills, lazy-loaded | S |
| 10 | Blog (CMS) | index + post template + categories | M |
| 11 | FAQ | accordion + FAQ schema | S |
| 12 | Contact | WhatsApp · email · map · hours | S |
| 13 | Booking | Cal.com embed · options | S |

Shared: header/nav, footer, CTA band, SEO component, schema helpers, cookie/analytics consent.

---

## 4. Content model (Sanity)

- **Retreat**: title, slug, dates, price, location, hero, gallery, itinerary[], inclusions[], transformation, CTA.
- **Post**: title, slug, excerpt, cover, body (portable text), category, author, SEO fields, publishedAt.
- **Testimonial**: quote, name, context, source, rating.
- **Global**: contacts, locations, schedule, offers/pricing (single source, reused site-wide).

---

## 5. Integrations

WhatsApp · Instagram · YouTube (retreat films) · Google Maps · Cal.com · newsletter (Beehiiv/Loops) · GA4 + Search Console + Microsoft Clarity. All third-party scripts deferred/consent-gated to protect Core Web Vitals.

---

## 6. Quality targets (definition of done)

- Lighthouse ≥ 90 on Performance, SEO, Accessibility, Best Practices (mobile + desktop).
- WCAG 2.1 AA: contrast, focus states, alt text, keyboard nav, reduced-motion.
- CWV budget: LCP < 2.5s · CLS < 0.1 · INP < 200ms.
- Responsive 360→1920. Cross-browser (Chrome, Safari, Firefox).
- All images AVIF/WebP, responsive, lazy, dimensioned.
- Schema validates; sitemap + robots present; OG/Twitter previews.

---

## 7. Build sequence

1. **Foundation** — Next.js scaffold, tokens/Tailwind, fonts, layout, header/footer, SEO + schema components, analytics/consent.
2. **Core pages** — Home → What is → About → the four session pages → Contact → Booking → FAQ.
3. **CMS** — Sanity setup, Retreats + Blog + Testimonials schemas and templates, seed content.
4. **Polish** — motion, gallery, Lighthouse/a11y pass, cross-device QA, redirects.
5. **Cutover** — deploy, point domain, 301s, submit sitemap.

---

## 8. i18n (built-in, content later)

`/en` default, `/fr` scaffold with `hreflang` and locale routing from day one; French copy added when ready. No re-architecture later.

---

## 9. Decisions to confirm before build

1. **Approve this scope** (pages, stack, CMS, quality bar).
2. **Domain** — buy `dancesoultherapy.com`? (needed for cutover + SEO.)
3. **Founder bio + real photography** — the one content dependency for About/Gallery/Home hero; placeholders used until supplied.
4. **Booking** — confirm Cal.com (I'll set up the account structure).
5. **Build order** — ship page-by-page to preview URLs (recommended) or all at once.

On approval I start at §7.1 and share a live Vercel preview after Foundation + Home, before continuing.
