document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // 2. Scroll Animations
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  // 3. Gallery Slider Logic (Delegated for dynamic content)
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      const card = e.target.closest(".slider-card");
      if (!card) return;

      const track = card.querySelector(".slider-track");
      const dots = card.querySelectorAll(".dot");
      const index = Array.from(dots).indexOf(e.target);

      if (track && index !== -1) {
        track.style.transform = `translateX(-${index * 50}%)`;
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }
    }
  });
});
