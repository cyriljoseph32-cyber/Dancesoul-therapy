---
name: dst-lancement
description: >
  Lance l'agent lancement-dst : point d'avancement et pilotage du lancement complet du
  site DanceSoulTherapy (Cal.com, horaires, photos, avis, domaine), avec coordination des
  agents webmaster-dst et contenu-dst. Utiliser quand Cyril veut faire le point ou avancer
  sur le lancement du site de Hannah, ou tape /dst-lancement.
---

# /dst-lancement — lancement DanceSoulTherapy

Réponds à la demande : `$ARGUMENTS`

1. Lis `.claude/agents/lancement-dst.md`, `CLAUDE.md` (Open TODOs) et
   `DOMAINE_ET_LANCEMENT.md`.
2. Si l'agent `lancement-dst` est disponible comme sous-agent, délègue-lui via le tool
   Agent (subagent_type: `lancement-dst`). Sinon, applique toi-même ses instructions.
3. Structure fixe, en français, une page max :
   - 🚀 Checklist de lancement — état de chaque TODO (✅ / ⏳ / ❌) et qui doit agir
     (Hannah, Cyril, un agent)
   - 🛠️ Ce qui peut être préparé dès maintenant (briefs, modèles, checklists) — en
     brouillon
   - ✅ La prochaine action au meilleur impact

Rien n'est confirmé à la place de Hannah ; brouillons uniquement.
