(() => {
  "use strict";
  const root = document.documentElement;
  root.classList.add("js-ready");

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const mobileQuery = window.matchMedia("(max-width: 760px)");

  const closeMenu = () => {
    if (!toggle || !nav) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const willOpen = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(willOpen));
      toggle.setAttribute("aria-label", willOpen ? "Close navigation menu" : "Open navigation menu");
      nav.classList.toggle("is-open", willOpen);
    });

    nav.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", event => {
        const id = link.getAttribute("href");
        const target = id && document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        closeMenu();
        target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
        if (history.replaceState) history.replaceState(null, "", id);
      });
    });

    document.addEventListener("click", event => {
      if (mobileQuery.matches && nav.classList.contains("is-open") &&
          !nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (!mobileQuery.matches) closeMenu(); });
  }

  // Keep the active navigation link in sync with the visible section.
  const navLinks = Array.from(document.querySelectorAll('#primary-nav a[href^="#"]'));
  const navTargets = navLinks.map(link => ({ link, target: document.querySelector(link.getAttribute("href")) })).filter(item => item.target);
  if ("IntersectionObserver" in window && navTargets.length) {
    const activeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navTargets.forEach(({link, target}) => {
          if (target === entry.target) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-20% 0px -68% 0px", threshold: 0 });
    navTargets.forEach(({target}) => activeObserver.observe(target));
  }

  // Accessible FAQ accordion: keep one answer open at a time.
  const faqItems = Array.from(document.querySelectorAll(".faq-item"));
  faqItems.forEach(item => item.addEventListener("toggle", () => {
    if (item.open) faqItems.forEach(other => { if (other !== item) other.open = false; });
  }));

  // Reveal elements on scroll; never hide content if the observer is unavailable.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger adjacent cards/lessons lightly without delaying content for too long.
          const siblings = entry.target.parentElement ? Array.from(entry.target.parentElement.children).filter(el => el.classList.contains("reveal")) : [];
          const index = siblings.indexOf(entry.target);
          if (index >= 0 && siblings.length > 1) entry.target.style.setProperty("--reveal-delay", `${Math.min(index * 65, 260)}ms`);
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04, rootMargin: "0px 0px -12px 0px" });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }
})();