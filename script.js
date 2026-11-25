(() => {
  "use strict";

  /* ------------------------------------------------------------------
   * Traductions : modifie les textes ici (FR / EN / DE).
   * p1…p6 = noms des projets, dans l'ordre des cartes de la page Projets.
   * ---------------------------------------------------------------- */
  const I18N = {
    fr: {
      title: "hqky | Professional Minecraft Builder",
      meta_description: "hqky - Professional Minecraft Builder. Créateur de mondes immersifs, de builds sur mesure et de maps exceptionnelles. Découvrez mes créations.",
      skip: "Aller au contenu",
      nav_home: "Accueil", nav_projects: "Projets", nav_about: "À propos", nav_contact: "Contact",
      hero_sub: "Professional Minecraft Builder",
      cta_projects: "Voir mes projets",
      enter_hint: "Appuie sur Entrée pour me contacter",
      role: "Builder",
      view: "Voir",
      chip_build: "Build",
      recent: "Récents", all: "Tous",
      projects_title: "Projets",
      projects_sub: "Sélectionne un build pour le voir en détail.",
      search_ph: "Rechercher un projet…",
      no_results: "Aucun projet trouvé.",
      contact_me: "Me contacter",
      p1: "Île urbaine LoopedSMP", p2: "Cité antique dorée", p3: "Bâtiment orné",
      p4: "Bâtiment fantaisie orientale", p5: "Temple pagode et portail du Nether", p6: "Temple aquatique orné",
      d_type: "Type", d_game: "Jeu", d_project: "Projet",
      d_desc: "Build Minecraft réalisé par hqky. Clique sur « Voir » pour l'afficher en grand.",
      about_title: "À propos",
      skin: "Skin Minecraft de hqky",
      sec_profile: "Profil", sec_path: "Parcours", sec_team: "Équipe",
      k_since: "Minecraft depuis", k_team: "Équipe", k_region: "Région", k_goal: "Objectif", v_goal: "Architecture",
      about_1: "Originaire de Nouvelle-Aquitaine, le jeu vidéo — et Minecraft en particulier — occupe une place centrale dans mon quotidien. En terminale cette année, je vise une poursuite en architecture jusqu'au Master, voire au Doctorat, en m'appuyant sur mes projets personnels et mes résultats au bac.",
      about_2: "Minecraft est entré dans ma vie en 2018 sur PC, après une première découverte sur console vers 2015. J'ai exploré le jeu sous tous les angles avant que le build ne s'impose comme une évidence : c'est là que je m'épanouis. J'ai collaboré avec plusieurs petits serveurs et projets, et plus récemment avec Derycube.",
      about_3: "Un passage au sein de la Parhelion m'a permis de monter en compétences sur plusieurs plans. Depuis août 2025, je fais partie de l'équipe Lusciana, où je continue à construire et à me dépasser.",
      contact_title: "Contact",
      contact_sub: "Retrouve-moi sur ces plateformes.",
      open: "Ouvrir",
      portfolio: "Portfolio",
      legal: "Mentions légales",
      disclaimer: "Non affilié à Mojang Studios ni à Microsoft.",
      close: "Fermer", prev: "Précédent", next: "Suivant"
    },
    en: {
      title: "hqky | Professional Minecraft Builder",
      meta_description: "hqky - Professional Minecraft Builder. Creator of immersive worlds, custom builds and outstanding maps. Discover my creations.",
      skip: "Skip to content",
      nav_home: "Home", nav_projects: "Projects", nav_about: "About", nav_contact: "Contact",
      hero_sub: "Professional Minecraft Builder",
      cta_projects: "See my projects",
      enter_hint: "Press Enter to contact me",
      role: "Builder",
      view: "View",
      chip_build: "Build",
      recent: "Recent", all: "All",
      projects_title: "Projects",
      projects_sub: "Select a build to see it in detail.",
      search_ph: "Search projects…",
      no_results: "No project found.",
      contact_me: "Contact me",
      p1: "LoopedSMP urban island", p2: "Golden ancient city", p3: "Ornate building",
      p4: "Oriental fantasy building", p5: "Pagoda temple and Nether portal", p6: "Ornate aquatic temple",
      d_type: "Type", d_game: "Game", d_project: "Project",
      d_desc: "Minecraft build created by hqky. Click “View” to see it full size.",
      about_title: "About",
      skin: "hqky's Minecraft skin",
      sec_profile: "Profile", sec_path: "Journey", sec_team: "Team",
      k_since: "Minecraft since", k_team: "Team", k_region: "Region", k_goal: "Goal", v_goal: "Architecture",
      about_1: "Born in Nouvelle-Aquitaine, video games — and Minecraft in particular — play a central role in my daily life. I'm in my final school year and aiming for architecture studies up to a Master's degree, or even a PhD, building on my personal projects and my exam results.",
      about_2: "Minecraft came into my life in 2018 on PC, after a first discovery on console around 2015. I explored the game from every angle before building became the obvious choice: it's where I thrive. I've collaborated with several small servers and projects, and more recently with Derycube.",
      about_3: "A time with Parhelion helped me grow on several fronts. Since August 2025, I've been part of the Lusciana team, where I keep building and pushing myself further.",
      contact_title: "Contact",
      contact_sub: "Find me on these platforms.",
      open: "Open",
      portfolio: "Portfolio",
      legal: "Legal notice",
      disclaimer: "Not affiliated with Mojang Studios or Microsoft.",
      close: "Close", prev: "Previous", next: "Next"
    },
    de: {
      title: "hqky | Professional Minecraft Builder",
      meta_description: "hqky - Professional Minecraft Builder. Schöpfer immersiver Welten, individueller Builds und außergewöhnlicher Maps. Entdecke meine Kreationen.",
      skip: "Zum Inhalt springen",
      nav_home: "Start", nav_projects: "Projekte", nav_about: "Über mich", nav_contact: "Kontakt",
      hero_sub: "Professional Minecraft Builder",
      cta_projects: "Meine Projekte ansehen",
      enter_hint: "Drücke Enter, um mich zu kontaktieren",
      role: "Builder",
      view: "Ansehen",
      chip_build: "Build",
      recent: "Zuletzt", all: "Alle",
      projects_title: "Projekte",
      projects_sub: "Wähle einen Build, um ihn im Detail zu sehen.",
      search_ph: "Projekte suchen…",
      no_results: "Kein Projekt gefunden.",
      contact_me: "Kontakt aufnehmen",
      p1: "Urbane Insel LoopedSMP", p2: "Goldene antike Stadt", p3: "Verziertes Gebäude",
      p4: "Orientalisches Fantasiegebäude", p5: "Pagodentempel und Nether-Portal", p6: "Verzierter Wassertempel",
      d_type: "Typ", d_game: "Spiel", d_project: "Projekt",
      d_desc: "Minecraft-Build von hqky. Klicke auf „Ansehen“, um ihn groß zu sehen.",
      about_title: "Über mich",
      skin: "Minecraft-Skin von hqky",
      sec_profile: "Profil", sec_path: "Werdegang", sec_team: "Team",
      k_since: "Minecraft seit", k_team: "Team", k_region: "Region", k_goal: "Ziel", v_goal: "Architektur",
      about_1: "Ich komme aus der Nouvelle-Aquitaine, und Videospiele – insbesondere Minecraft – spielen in meinem Alltag eine zentrale Rolle. Ich bin im letzten Schuljahr und strebe ein Architekturstudium bis zum Master oder sogar zur Promotion an, gestützt auf meine eigenen Projekte und meine Abiturergebnisse.",
      about_2: "Minecraft kam 2018 auf dem PC in mein Leben, nach einer ersten Begegnung auf der Konsole um 2015. Ich habe das Spiel von allen Seiten erkundet, bevor das Bauen zur klaren Wahl wurde: Dort blühe ich auf. Ich habe mit mehreren kleinen Servern und Projekten zusammengearbeitet, zuletzt mit Derycube.",
      about_3: "Die Zeit bei Parhelion hat mir geholfen, mich in mehreren Bereichen weiterzuentwickeln. Seit August 2025 gehöre ich zum Team von Lusciana, wo ich weiterbaue und über mich hinauswachse.",
      contact_title: "Kontakt",
      contact_sub: "Du findest mich auf diesen Plattformen.",
      open: "Öffnen",
      portfolio: "Portfolio",
      legal: "Impressum",
      disclaimer: "Nicht mit Mojang Studios oder Microsoft verbunden.",
      close: "Schließen", prev: "Zurück", next: "Weiter"
    }
  };

  const LOCALES = { fr: "fr-FR", en: "en-US", de: "de-DE" };
  const OG_LOCALES = { fr: "fr_FR", en: "en_US", de: "de_DE" };
  const VIEWS = ["accueil", "projets", "about", "contact"];

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lang = "fr";
  let view = "accueil";
  let cur = 0;
  let autoplay = true;

  const panos = $$(".bg img");
  const cards = $$(".vcard");
  const thumbs = $$(".thumb");
  const PROJECTS = cards.map((c, i) => ({ src: c.querySelector("img").getAttribute("src"), key: "p" + (i + 1) }));

  const pcTitle = $("#pc-title");
  const pcIcon = $("#pc-icon");
  const dTitle = $("#d-title");
  const dImg = $("#d-img");
  const dNum = $("#d-num");
  const T = () => I18N[lang];

  /* ------------------------------------------------------------------
   * Projet sélectionné : fond, carte « à la une », grille, panneau détail
   * ---------------------------------------------------------------- */
  function setImg(el, src) {
    el.classList.remove("broken");
    el.src = src;
  }

  function renderFeatured() {
    const p = PROJECTS[cur];
    const name = T()[p.key];
    pcTitle.textContent = name;
    dTitle.textContent = name;
    setImg(pcIcon, p.src);
    setImg(dImg, p.src);
    dNum.textContent = (cur + 1) + " / " + PROJECTS.length;
  }

  function select(i, byUser) {
    cur = (i + PROJECTS.length) % PROJECTS.length;
    if (byUser) autoplay = false;
    panos.forEach((p, k) => p.classList.toggle("active", k === cur));
    cards.forEach((c, k) => { c.classList.toggle("selected", k === cur); c.setAttribute("aria-pressed", String(k === cur)); });
    thumbs.forEach((t, k) => { t.classList.toggle("selected", k === cur); t.setAttribute("aria-pressed", String(k === cur)); });
    renderFeatured();
  }

  cards.forEach((c, i) => c.addEventListener("click", () => {
    if (i === cur) openLightbox(i); else select(i, true);
  }));
  thumbs.forEach((t, i) => t.addEventListener("click", () => select(i, true)));
  $("#pc-view").addEventListener("click", () => openLightbox(cur));
  $("#d-view").addEventListener("click", () => openLightbox(cur));
  $("#d-prev").addEventListener("click", () => select(cur - 1, true));
  $("#d-next").addEventListener("click", () => select(cur + 1, true));

  // Diaporama automatique sur l'accueil, tant que personne n'a choisi de projet
  if (!reduced) {
    setInterval(() => {
      if (autoplay && view === "accueil" && !document.hidden) select(cur + 1, false);
    }, 8000);
  }

  /* ------------------------------------------------------------------
   * Recherche de projets
   * ---------------------------------------------------------------- */
  const search = $("#search");
  const noRes = $("#no-results");

  function applyFilter() {
    const q = search.value.trim().toLowerCase();
    let n = 0;
    cards.forEach((c) => {
      const show = !q || c.textContent.toLowerCase().includes(q);
      c.hidden = !show;
      if (show) n++;
    });
    noRes.hidden = n > 0;
  }
  search.addEventListener("input", applyFilter);

  /* ------------------------------------------------------------------
   * Navigation entre vues (#accueil, #projets, #about, #contact)
   * ---------------------------------------------------------------- */
  const viewEls = $$("[data-view-id]");
  const navLinks = $$(".nav a");

  function viewFromHash() {
    const h = location.hash.slice(1);
    return VIEWS.includes(h) ? h : "accueil";
  }

  function go(name, opts) {
    const o = Object.assign({ push: true, scroll: true }, opts);
    if (!VIEWS.includes(name)) name = "accueil";
    view = name;
    document.body.dataset.view = name;
    viewEls.forEach((v) => { v.hidden = v.dataset.viewId !== name; });
    navLinks.forEach((a) => {
      if (a.dataset.go === name) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    if (o.push && name !== viewFromHash()) {
      try { history.pushState(null, "", name === "accueil" ? location.pathname + location.search : "#" + name); } catch (e) { /* ignore */ }
    }
    if (o.scroll) window.scrollTo(0, 0);
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go]");
    if (!t) return;
    e.preventDefault();
    go(t.dataset.go);
  });
  window.addEventListener("popstate", () => go(viewFromHash(), { push: false }));
  window.addEventListener("hashchange", () => go(viewFromHash(), { push: false }));

  // Raccourci façon launcher : Entrée = contact (depuis l'accueil)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" || view !== "accueil" || !lb.hidden) return;
    const a = document.activeElement;
    if (!a || a === document.body) go("contact");
  });

  /* ------------------------------------------------------------------
   * Horloge (widget de l'accueil)
   * ---------------------------------------------------------------- */
  const clockTime = $("#clock-time");
  const clockDate = $("#clock-date");
  const clockFill = $("#clock-fill");
  const clockUse = $("#clock-icon use");

  function tick() {
    const d = new Date();
    const loc = LOCALES[lang];
    clockTime.textContent = d.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit" });
    clockDate.textContent = d.toLocaleDateString(loc, { weekday: "long", day: "numeric", month: "short" });
    clockFill.style.width = ((d.getHours() * 60 + d.getMinutes()) / 1440 * 100) + "%";
    const night = d.getHours() < 7 || d.getHours() >= 20;
    clockUse.setAttribute("href", night ? "#i-moon" : "#i-sun");
  }
  setInterval(tick, 15000);

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

  function setLang(l) {
    lang = I18N[l] ? l : "fr";
    const t = T();
    root.lang = lang;
    document.title = t.title;

    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta_description);
    const loc = $('meta[property="og:locale"]');
    if (loc) loc.setAttribute("content", OG_LOCALES[lang]);

    $$("[data-i18n]").forEach((el) => { if (typeof t[el.dataset.i18n] === "string") el.textContent = t[el.dataset.i18n]; });
    $$("[data-i18n-aria]").forEach((el) => { if (typeof t[el.dataset.i18nAria] === "string") el.setAttribute("aria-label", t[el.dataset.i18nAria]); });
    $$("[data-i18n-placeholder]").forEach((el) => { if (typeof t[el.dataset.i18nPlaceholder] === "string") el.placeholder = t[el.dataset.i18nPlaceholder]; });
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }

    renderFeatured();
    applyFilter();
    tick();
    if (!lb.hidden) showCurrent();
  }

  /* ------------------------------------------------------------------
   * Visionneuse d'images
   * ---------------------------------------------------------------- */
  const lb = $("#lightbox");
  const lbImg = $("#lb-img");
  const lbCap = $("#lb-cap");
  const lbClose = $("#lb-close");
  const lbPrev = $("#lb-prev");
  const lbNext = $("#lb-next");
  let lbIndex = 0;
  let lastFocus = null;

  function showCurrent() {
    const p = PROJECTS[lbIndex];
    lbImg.src = p.src;
    lbImg.alt = T()[p.key];
    lbCap.textContent = T()[p.key];
  }

  function openLightbox(i) {
    lbIndex = i;
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
    lbIndex = (lbIndex + delta + PROJECTS.length) % PROJECTS.length;
    showCurrent();
  }

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
      const f = [lbClose, lbPrev, lbNext];
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  let touchX = null;
  lb.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX = null;
  });

  /* ------------------------------------------------------------------
   * Images manquantes : on cache l'icône cassée, le dégradé reste
   * ---------------------------------------------------------------- */
  document.addEventListener("error", (e) => {
    const el = e.target;
    if (el && el.tagName === "IMG" && el.id !== "lb-img") el.classList.add("broken");
  }, true);

  /* ------------------------------------------------------------------
   * Init
   * ---------------------------------------------------------------- */
  $$(".langs button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  go(viewFromHash(), { push: false, scroll: false });
  select(0, false);
  setLang(detectLang());
})();
