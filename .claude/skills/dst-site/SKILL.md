---
name: dst-site
description: >
  Lance l'agent webmaster-dst : modifications du site DanceSoulTherapy (Next.js 15) avec
  le design system strict et le workflow de vérification complet (build, smoke,
  screenshots, ban-list, WCAG). Utiliser quand Cyril demande un changement du site de
  Hannah ou tape /dst-site [demande].
---

# /dst-site — site DanceSoulTherapy

Réponds à la demande : `$ARGUMENTS`

1. Lis `.claude/agents/webmaster-dst.md` et `CLAUDE.md`.
2. Si l'agent `webmaster-dst` est disponible comme sous-agent, délègue-lui via le tool
   Agent (subagent_type: `webmaster-dst`). Sinon, applique toi-même ses instructions.
3. Workflow : branche du projet → modification (tokens OKLCH, ban-list respectée) →
   `npm run build` → smoke curl de toutes les routes → screenshots Playwright 1280×900 et
   375×780 → revue ban-list → contraste WCAG AA → commit clair → signaler à Cyril.

Ship = ff-merge vers `main` uniquement après validation de Cyril ; jamais de claim
médical ; SEO (metadata, JSON-LD, sitemap, robots) intact.
