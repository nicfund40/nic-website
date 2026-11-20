/* Nova Investment Club – Undergraduate Division: site behaviour */
(function () {
  "use strict";

  var cfg = window.NIC_CONFIG || {};
  var doc = document.documentElement;
  doc.classList.add("js");

  /* ---- domain-dependent tags (single source: js/config.js) ---- */
  if (cfg.SITE_URL) {
    var canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = cfg.SITE_URL + "/";
    document.head.appendChild(canonical);

    var ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.content = cfg.SITE_URL + "/";
    document.head.appendChild(ogUrl);
  }

  /* ---- placeholder outlines ---- */
  if (cfg.SHOW_PLACEHOLDERS) document.body.classList.add("show-ph");

  /* ---- footer year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- mobile menu ---- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", function () {
    setMenu(!nav.classList.contains("is-open"));
  });
  links.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });
  window.matchMedia("(min-width: 1025px)").addEventListener("change", function (mq) {
    if (mq.matches) setMenu(false);
  });

  /* the current page's nav link is marked in the HTML (class="is-active") */

  if ("IntersectionObserver" in window) {
    /* ---- reveal on scroll ---- */
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          reveal.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach(function (el) { reveal.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
