# Lave Auto Express 2007

Site vitrine du **Lave Auto Express 2007**, un lave-auto situé à Longueuil, Québec.

Site statique : aucun build, aucune dépendance, aucun serveur requis.

## Structure

| Fichier       | Rôle                                                        |
| ------------- | ----------------------------------------------------------- |
| `index.html`  | Contenu et structure de la page, incluant les données SEO    |
| `style.css`   | Styles, jetons de design et adaptations responsives          |
| `script.js`   | Menu mobile, année du pied de page, repli des images         |
| `favicon.svg` | Icône du site                                                |
| `images/`     | Photos des véhicules nettoyés à l'atelier                    |

### Photos des services

Trois tuiles utilisent des photos hébergées dans le dépôt :

| Fichier                                  | Service                      |
| ---------------------------------------- | ---------------------------- |
| `images/lavage-interieur-exterieur.webp` | Lavage Intérieur & Extérieur |
| `images/shampooing-sieges.webp`          | Shampooing                   |
| `images/remise-a-neuf.webp`              | Remise à Neuf                |

Si un de ces fichiers est absent, la tuile bascule automatiquement vers un visuel
de remplacement « Photo à venir » — la page reste propre, sans image brisée.

## Développement local

Ouvrez simplement `index.html` dans votre navigateur, ou servez le dossier :

```bash
python -m http.server 8000
```

Le site est ensuite accessible sur <http://localhost:8000>.

## Déploiement

N'importe quel hébergeur de fichiers statiques convient — GitHub Pages, Netlify,
Cloudflare Pages, Vercel. Il suffit de publier le contenu du dépôt tel quel ;
aucune étape de compilation n'est nécessaire.

Pour GitHub Pages : *Settings → Pages → Deploy from a branch → `main` / `root`*.

Pour Vercel : la configuration est déjà dans `vercel.json` (aucune compilation,
racine du dépôt comme dossier de sortie). Si un déploiement échoue encore sur
`vite: command not found`, c'est qu'un réglage du tableau de bord datant de
l'ancienne version React/Convex prend le dessus : dans *Settings → Build and
Deployment*, remettre « Framework Preset » sur **Other** et vider le champ
« Build Command ».

## À mettre à jour avant la mise en ligne

- `<link rel="canonical">` dans `index.html` — remplacer par le domaine réel.
- Deux tuiles (« Lavage Extérieur Complet » et « Cire ou Compound ») pointent encore
  vers des photos hébergées sur Google Business Profile. Ces adresses peuvent expirer ;
  il est préférable de déplacer ces images dans `images/` comme les autres.
- L'adresse municipale exacte peut être ajoutée dans le bloc `application/ld+json`
  (champ `streetAddress`) afin d'améliorer le référencement local.

## Coordonnées

**Téléphone :** 450-679-6095
**Horaire :** lundi au samedi, 9h00 – 17h00 (fermé le dimanche)
**Paiement :** comptant seulement
