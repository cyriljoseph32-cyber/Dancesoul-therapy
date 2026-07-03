# DanceSoulTherapy — Type & Colour Spec

Canonical tokens. Every asset (web, print, social) inherits these.

## Colour

| Token | Name | Hex | Use |
|---|---|---|---|
| `--emerald` | Jungle Emerald | `#10362B` | Primary ground |
| `--emerald-deep` | Deep Emerald | `#0C2A21` | Section ground |
| `--navy` | Deep Navy | `#0C1B2A` | Alt ground, depth |
| `--ink` | Near-Black | `#0B0F0E` | Text on light, footer |
| `--gold` | Warm Gold | `#C9A24B` | Accent, mark, CTA — *one per view* |
| `--gold-soft` | Soft Gold | `#D9B975` | Hover, secondary gold |
| `--amber` | Sunrise Amber | `#E4A46A` | Glow / gradient only |
| `--sand` | Natural Sand | `#F3ECE1` | Text on dark, reading surface |

Rule: dark grounds, gold as jewelry (never fields of gold text), one accent per view, no gradients inside the mark.

## Typography

**Display / headlines — Cormorant Garamond** (serif). Weights 500–600. Tight leading (1.05–1.15), `-0.01em` tracking. Emotion, size, restraint.
**Text / UI — Inter** (humanist sans). Weights 300–600. Leading 1.6. Clarity.
Two families only. Modular scale 1.25.

| Role | Family | Size (desktop) | Weight |
|---|---|---|---|
| H1 | Cormorant | clamp 3–6.5rem | 500 |
| H2 | Cormorant | clamp 2–3.4rem | 500 |
| Wordmark | Cormorant | 1.4rem | 600 |
| Lead | Cormorant | 1.15–1.5rem | 400 |
| Body | Inter | 1rem | 400 |
| Eyebrow / tagline | Inter | 0.7rem, `0.3–0.42em` tracked, uppercase | 500 |

**Wordmark:** `Dance` + `Soul` (gold) + `Therapy`, set in Cormorant, no italic.
**Web fonts:** loaded via Google Fonts; self-host in the Next.js build for CWV.
**Fallbacks:** serif → Georgia; sans → system-ui.
