document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      // Animate hamburger to X (optional CSS can be added)
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // 2. Scroll Animations
  const observerOptions = { threshold: 0.1 };
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

  // 3. Gallery Slider Logic
  const sliders = document.querySelectorAll(".slider-card");

  sliders.forEach((card) => {
    const track = card.querySelector(".slider-track");
    const dots = card.querySelectorAll(".dot");
    let currentIndex = 0;

    const updateSlide = (index) => {
      track.style.transform = `translateX(-${index * 50}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlide(currentIndex);
      });
    });

    // Optional: Auto slide every 5 seconds
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % 2;
    //     updateSlide(currentIndex);
    // }, 5000);
  });
});
