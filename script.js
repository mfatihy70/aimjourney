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

  // 3. Gallery Slider Logic (Dots Click)
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

  // 4. Mobile Touch/Swipe functionality for Gallery Cards
  let touchStartX = 0;
  let touchEndX = 0;

  // Listen globally to capture dynamically loaded gallery items
  document.addEventListener(
    "touchstart",
    (e) => {
      const wrapper = e.target.closest(".slider-wrapper");
      if (wrapper) {
        touchStartX = e.changedTouches[0].screenX;
      }
    },
    { passive: true },
  );

  document.addEventListener(
    "touchend",
    (e) => {
      const wrapper = e.target.closest(".slider-wrapper");
      if (wrapper) {
        touchEndX = e.changedTouches[0].screenX;
        handleGallerySwipe(wrapper);
      }
    },
    { passive: true },
  );

  function handleGallerySwipe(wrapper) {
    const diff = touchEndX - touchStartX;
    const card = wrapper.closest(".slider-card");
    if (!card) return;

    const track = card.querySelector(".slider-track");
    const dots = card.querySelectorAll(".dot");

    // Find currently active slide index
    let activeIndex = Array.from(dots).findIndex((dot) =>
      dot.classList.contains("active"),
    );
    const swipeThreshold = 40; // minimum pixel distance to trigger swipe

    if (diff < -swipeThreshold && activeIndex < dots.length - 1) {
      // Swiped left (Next)
      activeIndex++;
    } else if (diff > swipeThreshold && activeIndex > 0) {
      // Swiped right (Prev)
      activeIndex--;
    }

    // Apply the transformation
    if (track) {
      track.style.transform = `translateX(-${activeIndex * 50}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === activeIndex);
      });
    }
  }
});
