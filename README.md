# hqky — Portfolio Minecraft Builder

Site statique (HTML / CSS / JS, rien à installer) hébergé gratuitement sur GitHub Pages : <https://hqky.github.io>

Direction artistique inspirée des launchers de jeu modernes : barre de navigation centrée, fond panorama flou, widgets (horloge), carte « à la une » avec bouton violet, page Projets avec grille de cartes + panneau de détail, page profil, page contact.

## Structure

```
index.html             page unique (Accueil / Projets / À propos / Contact)
mentions-legales.html  mentions légales (à compléter)
style.css              styles
script.js              traductions FR/EN/DE, navigation, sélection de projet, horloge, visionneuse
robots.txt, sitemap.xml
img/                   tes images (à ajouter)
  skin/hqky.png        ton skin (sa tête sert d'avatar partout sur le site)
```

## Publier sur GitHub Pages

1. Crée un dépôt **public** nommé exactement `hqky.github.io` sur le compte `hqky`.
2. Dépose-y tous ces fichiers à la racine, plus le dossier `img/` (glisse le dossier `img` entier dans « Upload files »).
3. **Settings → Pages** : « Deploy from a branch », branche `main`, dossier `/ (root)`.
4. Après ~1 minute, le site est en ligne sur <https://hqky.github.io>.

## Images attendues dans `img/`

Dans l'ordre d'affichage (projets 1 à 6) :

1. `Ile_Urbaine_Voxel_Neon_LoopedSMP.png`
2. `Minecraft_Cite_Antique_Doree_Dome.png`
3. `Batiment_Orne_Minecraft.png`
4. `Batiment_Minecraft_Fantaisie_Orientale.png`
5. `Temple_Pagode_Minecraft_Portail_Nether.png`
6. `Minecraft_Temple_Aquatique_Orne.png`

Plus `skin/hqky.png` (skin 64×64 classique : la tête en est extraite).

Le fond de l'accueil et la carte « à la une » suivent le projet sélectionné ; un diaporama automatique tourne tant que personne n'a cliqué.

## Modifier le contenu

- **Textes, noms de projets, traductions** : objet `I18N` en haut de `script.js`.
- **Ajouter un projet** : copie un bloc `<button class="vcard">` dans `index.html`, une vignette `<button class="thumb">` et une image dans `<div class="bg">` (même ordre !), puis ajoute `p7` dans chaque langue de `I18N`.
- **Couleurs et police** : variables CSS en haut de `style.css`.
- **Mentions légales** : complète la ligne « Éditeur » dans `mentions-legales.html`.

## Police

« Poppins » est chargée depuis Google Fonts. Pour zéro appel externe (RGPD), télécharge-la sur <https://fonts.google.com/specimen/Poppins>, place les `.woff2` dans le dépôt, déclare-les avec `@font-face` dans `style.css`, puis retire les 3 balises `<link>` Google Fonts de `index.html` et `mentions-legales.html`.

## Note

Minecraft est une marque de Mojang / Microsoft. Ce site n'est pas affilié à Mojang, Microsoft ou à un quelconque launcher, et n'utilise aucun de leurs fichiers (logos, polices, textures).
