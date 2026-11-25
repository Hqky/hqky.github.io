# hqky — Portfolio Minecraft Builder

Site statique (HTML / CSS / JS, aucune dépendance) hébergé gratuitement sur GitHub Pages : <https://hqky.github.io>

## Structure

```
index.html            page principale
mentions-legales.html mentions légales (à compléter)
style.css             styles
script.js             traductions FR/EN/DE + visionneuse d'images
robots.txt, sitemap.xml
img/                  tes images (à ajouter)
  skin/hqky.png       ton skin
```

## Publier sur GitHub Pages

1. Crée un dépôt **public** nommé exactement `hqky.github.io` sur le compte `hqky`.
2. Dépose-y tous ces fichiers à la racine, plus le dossier `img/` avec tes images.
3. Va dans **Settings → Pages**, source : **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Après ~1 minute, le site est en ligne sur <https://hqky.github.io>.

## Images attendues dans `img/`

- `Ile_Urbaine_Voxel_Neon_LoopedSMP.png`
- `Minecraft_Cite_Antique_Doree_Dome.png`
- `Batiment_Orne_Minecraft.png`
- `Batiment_Minecraft_Fantaisie_Orientale.png`
- `Temple_Pagode_Minecraft_Portail_Nether.png`
- `Minecraft_Temple_Aquatique_Orne.png`
- `skin/hqky.png`

Conseil : convertis les images en WebP (ex. avec <https://squoosh.app>, gratuit) pour un site plus rapide, puis change les extensions dans `index.html`.

## Modifier le contenu

- **Textes et traductions** : objet `I18N` en haut de `script.js`.
- **Ajouter un projet** : copie un bloc `<figure class="card">` dans `index.html` et ajoute ses textes (`pX`) dans `I18N`.
- **Couleurs** : variables CSS en haut de `style.css`.
- **Mentions légales** : complète la ligne « Éditeur » dans `mentions-legales.html`.
