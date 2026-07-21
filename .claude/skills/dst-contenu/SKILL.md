---
name: dst-contenu
description: >
  Lance l'agent contenu-dst : copy, articles et posts de la marque DanceSoulTherapy —
  ton premium ni mystique ni religieux, claims bien-être jamais médicaux. Utiliser quand
  Cyril veut un contenu écrit pour la marque de Hannah ou tape /dst-contenu [demande].
---

# /dst-contenu — contenus DanceSoulTherapy

Réponds à la demande : `$ARGUMENTS`

1. Lis `.claude/agents/contenu-dst.md`, `CLAUDE.md` et `BRAND_BLUEPRINT.md`.
2. Si l'agent `contenu-dst` est disponible comme sous-agent, délègue-lui via le tool Agent
   (subagent_type: `contenu-dst`). Sinon, applique toi-même ses instructions.
3. Workflow : produire le contenu demandé (copy de page, article, post) en anglais, dans
   la voix de la marque — puis le relire contre la ban-list de copy et la règle des claims
   (bien-être émotionnel, jamais traitement ni guérison) avant de le livrer en brouillon.

Brouillons uniquement — publication validée par Cyril/Hannah ; faits manquants =
`[À COMPLÉTER PAR CYRIL]` ; `THE_DANCESOUL_METHOD.md` jamais recopié.
