document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".section, .hero");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  elements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });
});
