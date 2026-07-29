export function initNavbar() {
  const nav = document.getElementById("navbar");
  nav.innerHTML = `
    <div class="nav-left">
      <img src="logo.png" alt="AIM Journey Logo" class="logo" />
      <span class="nav-brand">AIM Journey</span>
    </div>
    <div class="hamburger"><span></span><span></span><span></span></div>
    <div class="nav-links">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/gallery">Gallery</a>
      <a href="/quotes">Quotes</a>
      <a href="https://www.instagram.com/aimjourney.eu/" target="_blank">
        <i class="fab fa-instagram instagram-icon"></i>
      </a>
    </div>
  `;

  // Mobile Toggle Logic
  const hamburger = nav.querySelector(".hamburger");
  const links = nav.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    links.classList.toggle("active");
  });

  // Close menu on link click
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => links.classList.remove("active"));
  });
}

export function initFooter() {
  document.getElementById("footer").innerHTML = `
    <p>&copy; 2026 AIM Journey Erasmus+ Project</p>
  `;
}

export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  // Re-observe elements after DOM update
  const observerTarget = document.getElementById("main-content");
  const config = { childList: true, subtree: true };

  const callback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        document
          .querySelectorAll(".animate-on-scroll")
          .forEach((el) => observer.observe(el));
      }
    }
  };

  const mutationObserver = new MutationObserver(callback);
  mutationObserver.observe(observerTarget, config);

  // Initial scan
  setTimeout(() => {
    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
  }, 100);
}
