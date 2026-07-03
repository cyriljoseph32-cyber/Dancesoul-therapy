# DanceSoulTherapy — Domaine, mise en ligne & démarchage

Guide court pour **acheter le domaine, publier le site et démarcher** dès aujourd'hui.

---

## 1. Nom de domaine — recommandations

| Priorité | Domaine | Pourquoi | Usage |
|---|---|---|---|
| **1 (à acheter)** | `dancesoultherapy.com` | Exact, mémorable, crédible à l'international | Site principal |
| 2 | `dancesoultherapy.co` | Repli si `.com` pris ; propre et premium | Alternative |
| 3 | `dancesoul.com` / `.co` | Version courte, marque forte | Redirection vers le principal |
| SEO | `dancetherapykohsamui.com` | Capte la recherche touristique EN | Redirection 301 → principal |

**Reco :** sécuriser `dancesoultherapy.com` + `.co` (protection de marque), et rediriger les variantes SEO vers le principal. Ajouter le `.th` uniquement si structure locale enregistrée.

**Où acheter :** Namecheap, Cloudflare Registrar (prix coûtant, pas de surcoût au renouvellement) ou Google Domains/Squarespace. Budget : ~10-15 €/an par domaine.

**Email pro à activer dans la foulée :** `bonjour@dancesoultherapy.com` (via Google Workspace ou Zoho Mail gratuit) — indispensable pour démarcher les hôtels avec crédibilité (voir email partenariat, `PLAN_MARKETING.md`).

---

## 2. Mise en ligne (gratuite, < 15 min)

Le site est un projet Vite/React prêt à déployer.

**Option recommandée — Vercel (gratuit) :**
1. Pousser ce repo sur GitHub *(déjà fait)*.
2. Sur [vercel.com](https://vercel.com) → *Import Project* → sélectionner le repo.
3. Build auto détecté (`npm run build`, output `dist/`). Déployer.
4. Ajouter le domaine acheté dans *Settings → Domains* et suivre les DNS indiqués.

**Alternative — Netlify** : glisser-déposer le dossier `dist/` après `npm run build`, ou connecter le repo.

**Build local :**
```bash
npm install
npm run dev      # aperçu local sur http://localhost:5173
npm run build    # génère /dist prêt à héberger
```

---

## 3. À personnaliser avant démarchage

Trois valeurs à remplacer dans `src/App.tsx` (en haut du fichier) :

| Variable | Actuel | À mettre |
|---|---|---|
| `WHATSAPP` | `66000000000` | Numéro WhatsApp réel (format international, sans `+`) |
| `INSTAGRAM` | lien générique | URL Instagram réelle |
| Témoignages / bio | exemples | Avis réels + bio fondateur (voir `SITE_CONTENU.md`) |

Tous les boutons « Réserver » ouvrent WhatsApp avec un message pré-rempli → **conversion directe, zéro friction**, conforme à la stratégie (DM/WhatsApp = moteur de conversion).

---

## 4. Prêt à démarcher — check-list

- [ ] Domaine acheté + site en ligne (HTTPS actif).
- [ ] Email pro configuré.
- [ ] WhatsApp Business + Instagram opérationnels et liés au site.
- [ ] Google Business Profile créé (Lamai + Chaweng, FR/EN).
- [ ] 8-10 Reels tournés (voir hooks, `PLAN_MARKETING.md`).
- [ ] Liste des 20 hôtels/cafés/conciergeries cibles prête.
- [ ] Scripts de prospection sous la main (`PLAN_MARKETING.md` §15-17).

Une fois ces cases cochées, le lien du site devient l'outil central du démarchage : on l'envoie en DM, on le montre en réception d'hôtel, on le met en signature d'email.

---

## Dossier complet livré

| Fichier | Contenu |
|---|---|
| `BUSINESS_PLAN.md` | Business plan investisseur (14 sections, finances, scénarios) |
| `SITE_CONTENU.md` | Contenu éditorial complet du site + SEO + UX + design |
| `PLAN_MARKETING.md` | Plan de lancement 90 jours, scripts, contenu, KPI |
| `src/` + `index.html` | **Site web premium déployable** |
| `DOMAINE_ET_LANCEMENT.md` | Ce guide : domaine, mise en ligne, démarchage |
