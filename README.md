# TorchCoders — Site web officiel

Site web du club TorchCoders de l'EST Tétouan, dédié aux agents d'intelligence artificielle.

## Installation

```bash
cd torchcoders
npm install
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Copiez le fichier d'exemple et renseignez les valeurs :

```bash
cp .env.example .env.local
```

| Variable | Description | Valeur par défaut |
|---|---|---|
| `EVENTS_API_URL` | URL complète de l'API des actualités du club | *(vide — utilise les données fictives)* |
| `ESTTCO_API_KEY` | Clé API de la plateforme EST | *(à renseigner)* |
| `ESTTCO_BASE_URL` | URL de base de l'API | `api.estt.ma/v1/` |
| `ESTTCO_CLUB_ID` | Identifiant du club sur la plateforme | `-OhPxD3gb3t5ApR1Xwwt` |

Tant que `EVENTS_API_URL` est vide, la section Actualités affiche les données fictives de `data/mock-events.ts`.  
Pour brancher l'API réelle, renseignez uniquement `EVENTS_API_URL` dans `.env.local` : aucune modification de code n'est nécessaire.

## Remplacement du logo

Le logo SVG provisoire se trouve dans `components/logo.tsx`. Pour le remplacer par le logo officiel :

1. Ouvrez `components/logo.tsx`.
2. Repérez le commentaire `// Remplacer le contenu du SVG par le logo officiel TorchCoders`.
3. Remplacez le contenu du `<svg>` par les chemins SVG du logo TorchCoders.
4. Mettez aussi à jour `app/icon.svg` pour le favicon.

## Modification des membres du bureau

Les rôles du bureau sont définis dans `data/team.ts`. Pour ajouter un membre :

```ts
{ role: "Président", name: "Prénom Nom", linkedin: "https://linkedin.com/in/..." }
```

Laissez `name: null` pour afficher « Non décidé ».

## Modification des projets

Les projets sont définis dans `data/projects.ts`. Chaque projet comprend :

- `id` : identifiant unique (URL-friendly)
- `title` : nom du projet
- `description` : description courte
- `status` : `"En cours"` | `"Terminé"` | `"À venir"`
- `tags` : liste de technologies

## Contrat JSON des événements (API)

L'endpoint `EVENTS_API_URL` doit renvoyer un objet dont chaque valeur est un événement :

```json
{
  "EVENT_ID": {
    "title": "Titre de l'événement",
    "content": "Contenu complet...",
    "author": "email@etu.uae.ac.ma",
    "createdAt": 1766757954564,
    "imageUrl": "https://...",
    "likeCount": 1,
    "likes": 2,
    "linkedFormId": "FORM_ID_OPTIONNEL",
    "type": "announcement | article | event"
  }
}
```

Les champs obligatoires sont `title`, `content` et `createdAt`. Les autres sont optionnels.  
Les événements invalides (champs manquants ou type incorrect) sont automatiquement ignorés.

## Lien d'adhésion

Le lien d'adhésion est centralisé dans `lib/config.ts` (`JOIN_URL`). Pour le modifier, changez uniquement cette constante.

## Hypothèses

- En l'absence d'URL de détail d'événement dans l'API, le lien « En savoir plus » pointe vers `linkedFormId` si présent.
- La page `/actualites/[id]` utilise l'identifiant de clé de l'objet API comme paramètre `id`.
- Le site n'a qu'un seul thème (violet sombre) ; pas de bascule clair/sombre.
