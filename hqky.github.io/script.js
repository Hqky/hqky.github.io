(() => {
  "use strict";

  /* ------------------------------------------------------------------
   * Traductions : modifie les textes ici (FR / EN / DE).
   * ---------------------------------------------------------------- */
  const I18N = {
    fr: {
      title: "hqky | Professional Minecraft Builder",
      meta_description: "hqky - Professional Minecraft Builder. Créateur de mondes immersifs, de builds sur mesure et de maps exceptionnelles. Découvrez mes créations.",
      skip: "Aller au contenu",
      nav_projects: "Projets", nav_about: "À propos", nav_contact: "Contact",
      subtitle: "Professional Minecraft Builder",
      cta: "Voir mes créations",
      projects_title: "Projets",
      p1: "Bâtiment fantaisie orientale", p2: "Bâtiment orné", p3: "Temple aquatique", p4: "Cité antique dorée",
      h1: "Île urbaine LoopedSMP", h2: "Cité antique dorée", h3: "Bâtiment orné Minecraft",
      h4: "Bâtiment fantaisie orientale", h5: "Temple pagode portail Nether", h6: "Temple aquatique orné",
      about_title: "À propos",
      skin: "Skin Minecraft de hqky",
      about_1: "Originaire de Nouvelle-Aquitaine, le jeu vidéo — et Minecraft en particulier — occupe une place centrale dans mon quotidien. En terminale cette année, je vise une poursuite en architecture jusqu'au Master, voire au Doctorat, en m'appuyant sur mes projets personnels et mes résultats au bac.",
      about_2: "Minecraft est entré dans ma vie en 2018 sur PC, après une première découverte sur console vers 2015. J'ai exploré le jeu sous tous les angles avant que le build ne s'impose comme une évidence : c'est là que je m'épanouis. J'ai collaboré avec plusieurs petits serveurs et projets, et plus récemment avec Derycube.",
      about_3: "Un passage au sein de la Parhelion m'a permis de monter en compétences sur plusieurs plans. Depuis août 2025, je fais partie de l'équipe Lusciana, où je continue à construire et à me dépasser.",
      contact_title: "Contact",
      legal: "Mentions légales",
      rights: "Tous droits réservés.",
      close: "Fermer", prev: "Précédent", next: "Suivant"
    },
    en: {
      title: "hqky | Professional Minecraft Builder",
      meta_description: "hqky - Professional Minecraft Builder. Creator of immersive worlds, custom builds and outstanding maps. Discover my creations.",
      skip: "Skip to content",
      nav_projects: "Projects", nav_about: "About", nav_contact: "Contact",
      subtitle: "Professional Minecraft Builder",
      cta: "See my creations",
      projects_title: "Projects",
      p1: "Oriental fantasy building", p2: "Ornate building", p3: "Aquatic temple", p4: "Golden ancient city",
      h1: "LoopedSMP urban island", h2: "Golden ancient city", h3: "Ornate Minecraft building",
      h4: "Oriental fantasy building", h5: "Pagoda temple with Nether portal", h6: "Ornate aquatic temple",
      about_title: "About",
      skin: "hqky's Minecraft skin",
      about_1: "Born in Nouvelle-Aquitaine, video games — and Minecraft in particular — play a central role in my daily life. I'm in my final school year and aiming for architecture studies up to a Master's degree, or even a PhD, building on my personal projects and my exam results.",
      about_2: "Minecraft came into my life in 2018 on PC, after a first discovery on console around 2015. I explored the game from every angle before building became the obvious choice: it's where I thrive. I've collaborated with several small servers and projects, and more recently with Derycube.",
      about_3: "A time with Parhelion helped me grow on several fronts. Since August 2025, I've been part of the Lusciana team, where I keep building and pushing myself further.",
      contact_title: "Contact",
      legal: "Legal notice",
      rights: "All rights reserved.",
      close: "Close", prev: "Previous", next: "Next"
    },
    de: {
      title: "hqky | Professional Minecraft Builder",
      meta_description: "hqky - Professional Minecraft Builder. Schöpfer immersiver Welten, individueller Builds und außergewöhnlicher Maps. Entdecke meine Kreationen.",
      skip: "Zum Inhalt springen",
      nav_projects: "Projekte", nav_about: "Über mich", nav_contact: "Kontakt",
      subtitle: "Professional Minecraft Builder",
      cta: "Meine Kreationen ansehen",
      projects_title: "Projekte",
      p1: "Orientalisches Fantasiegebäude", p2: "Verziertes Gebäude", p3: "Wassertempel", p4: "Goldene antike Stadt",
      h1: "Urbane Insel LoopedSMP", h2: "Goldene antike Stadt", h3: "Verziertes Minecraft-Gebäude",
      h4: "Orientalisches Fantasiegebäude", h5: "Pagodentempel mit Nether-Portal", h6: "Verzierter Wassertempel",
      about_title: "Über mich",
      skin: "Minecraft-Skin von hqky",
      about_1: "Ich komme aus der Nouvelle-Aquitaine, und Videospiele – insbesondere Minecraft – spielen in meinem Alltag eine zentrale Rolle. Ich bin im letzten Schuljahr und strebe ein Architekturstudium bis zum Master oder sogar zur Promotion an, gestützt auf meine eigenen Projekte und meine Abiturergebnisse.",
      about_2: "Minecraft kam 2018 auf dem PC in mein Leben, nach einer ersten Begegnung auf der Konsole um 2015. Ich habe das Spiel von allen Seiten erkundet, bevor das Bauen zur klaren Wahl wurde: Dort blühe ich auf. Ich habe mit mehreren kleinen Servern und Projekten zusammengearbeitet, zuletzt mit Derycube.",
      about_3: "Die Zeit bei Parhelion hat mir geholfen, mich in mehreren Bereichen weiterzuentwickeln. Seit August 2025 gehöre ich zum Team von Lusciana, wo ich weiterbaue und über mich hinauswachse.",
      contact_title: "Kontakt",
      legal: "Impressum",
      rights: "Alle Rechte vorbehalten.",
      close: "Schließen", prev: "Zurück", next: "Weiter"
    }
  };

  const LOCALES = { fr: "fr_FR", en: "en_US", de: "de_DE" };
  const root = document.documentElement;

  /* ------------------------------------------------------------------
   * Langue
   * ---------------------------------------------------------------- */
  function detectLang() {
    try {
      const saved = localStorage.getItem("lang");
      if (saved && I18N[saved]) return saved;
    } catch (e) { /* stockage indisponible */ }
    const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
    return I18N[nav] ? nav : "fr";
  }

  function setLang(lang) {
    const t = I18N[lang] || I18N.fr;
    root.lang = lang;
    document.title = t.title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta_description);
    const loc = document.querySelector('meta[property="og:locale"]');
    if (loc) loc.setAttribute("content", LOCALES[lang]);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const v = t[el.dataset.i18nAlt];
      if (v !== undefined) el.alt = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const v = t[el.dataset.i18nAria];
      if (v !== undefined) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll(".lang button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });

    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }

    // Met à jour la légende si la visionneuse est ouverte
    if (!lb.hidden) showCurrent();
  }

  /* ------------------------------------------------------------------
   * Visionneuse d'images
   * ---------------------------------------------------------------- */
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCap = document.getElementById("lb-cap");
  const lbClose = document.getElementById("lb-close");
  const lbPrev = document.getElementById("lb-prev");
  const lbNext = document.getElementById("lb-next");

  let group = [];
  let index = 0;
  let lastFocus = null;

  function showCurrent() {
    const img = group[index].querySelector("img");
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = img.alt;
    const single = group.length < 2;
    lbPrev.hidden = single;
    lbNext.hidden = single;
  }

  function openLightbox(btn) {
    group = Array.from(document.querySelectorAll('[data-lightbox="' + btn.dataset.lightbox + '"]'));
    index = Math.max(0, group.indexOf(btn));
    lastFocus = document.activeElement;
    showCurrent();
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    lbClose.focus();
  }

  function closeLightbox() {
    lb.hidden = true;
    lbImg.removeAttribute("src");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function step(delta) {
    if (group.length < 2) return;
    index = (index + delta + group.length) % group.length;
    showCurrent();
  }

  document.querySelectorAll("[data-lightbox]").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(btn));
  });
  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click", () => step(-1));
  lbNext.addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });

  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "Tab") {
      const focusables = [lbClose, lbPrev, lbNext].filter((b) => !b.hidden);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Balayage tactile
  let touchX = null;
  lb.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX = null;
  });

  /* ------------------------------------------------------------------
   * Images manquantes : placeholder propre au lieu d'une icône cassée
   * ---------------------------------------------------------------- */
  document.addEventListener("error", (e) => {
    const el = e.target;
    if (el && el.tagName === "IMG" && el.id !== "lb-img" && !el.classList.contains("skin")) {
      const holder = el.closest(".tile, .card");
      if (holder) holder.classList.add("is-missing");
    }
  }, true);

  /* ------------------------------------------------------------------
   * Init
   * ---------------------------------------------------------------- */
  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  setLang(detectLang());
})();
