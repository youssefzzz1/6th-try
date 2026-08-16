/* Lave Auto Express 2007 — interactions du site */
(function () {
  "use strict";

  /* Année courante dans le pied de page */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* Menu mobile */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    /* Refermer après avoir choisi une section */
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    /* Échap referme le menu */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    /* Repartir d'un état propre en revenant au bureau */
    var mq = window.matchMedia("(min-width: 781px)");
    var onChange = function (e) { if (e.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* En-tête escamotable sur petit écran : masqué quand on descend, rétabli
     dès que l'on remonte. Inactif au-delà de 780 px, où l'en-tête ne gêne
     pas, et jamais déclenché lorsqu'un menu est ouvert. */
  var header = document.querySelector(".site-header");
  if (header) {
    var small = window.matchMedia("(max-width: 780px)");
    var last = window.pageYOffset;
    var ticking = false;

    var onScroll = function () {
      var y = window.pageYOffset;
      var menuOpen =
        (nav && nav.classList.contains("open")) ||
        document.querySelector(".lang-menu.open");

      if (!small.matches || menuOpen || y < 120) {
        header.classList.remove("is-hidden");
      } else if (y > last + 6) {
        header.classList.add("is-hidden");
      } else if (y < last - 6) {
        header.classList.remove("is-hidden");
      }

      last = y;
      ticking = false;
    };

    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }, { passive: true });
  }

  /* Les photos proviennent de la fiche Google de l'entreprise et certaines
     adresses finissent par expirer. Plutôt qu'une icône d'image brisée, on
     bascule la tuile vers un visuel de remplacement dessiné en CSS. */
  var markMissing = function (img) {
    var media = img.closest(".card-media");
    if (media) media.classList.add("is-missing");
  };

  Array.prototype.forEach.call(
    document.querySelectorAll(".card-media img"),
    function (img) {
      img.addEventListener("error", function () { markMissing(img); });
      /* L'erreur a pu survenir avant l'exécution de ce script. */
      if (img.complete && img.naturalWidth === 0) markMissing(img);
    }
  );
})();
