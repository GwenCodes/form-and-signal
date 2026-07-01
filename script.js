document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".section, .hero, .cta");

  /* =========================================================
     INTERSECTION OBSERVER (SMOOTH REVEAL SYSTEM)
  ========================================================= */

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // run once for performance
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(14px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    /* =========================================================
       STAGGERED DELAY (premium feel)
    ========================================================= */
    el.style.transitionDelay = `${index * 80}ms`;

    observer.observe(el);
  });

  /* =========================================================
     INVESTMENT HOVER-TO-OPEN SYSTEM
     (kept separate so it doesn't conflict with scroll animation)
  ========================================================= */

  const cards = document.querySelectorAll(".investment-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      cards.forEach((c) => {
        if (c !== card) c.removeAttribute("open");
      });

      card.setAttribute("open", true);
    });

    card.addEventListener("mouseleave", () => {
      card.removeAttribute("open");
    });
  });
});
