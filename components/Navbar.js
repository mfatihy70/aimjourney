class AppNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentPage = this.getAttribute("page") || "home";
    this.innerHTML = `
      <nav class="navbar">
        <div class="nav-left">
          <a href="home.html">
            <img src="logo.png" alt="AIM Journey Logo" class="logo" />
          </a>          
          <a href="home.html">
            <span class="brand">AIM Journey</span>
          </a>
          <a href="https://ec.europa.eu/programmes/erasmus-plus/" target="_blank">
            <img src="content/images/fundedbyeu.jpg" alt="EU" class="eu-logo" />
          </a>  
        </div>
        <button class="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links">
          <a href="home.html" class="${currentPage === "home" ? "active" : ""}">Home</a>
          <a href="about.html" class="${currentPage === "about" ? "active" : ""}">About</a>
          <a href="activities.html" class="${currentPage === "activities" ? "active" : ""}">Activities</a>
          <a href="gallery.html" class="${currentPage === "gallery" ? "active" : ""}">Gallery</a>
          <a href="quotes.html" class="${currentPage === "quotes" ? "active" : ""}">Quotes</a>
          <a href="https://www.instagram.com/aimjourney.eu/" target="_blank" class="instagram-link">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </nav>
    `;

    // Mobile menu toggle
    const hamburger = this.querySelector(".hamburger");
    const navLinks = this.querySelector(".nav-links");
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
      // Close on link click
      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => navLinks.classList.remove("open"));
      });
      document.body.addEventListener("pointerdown", (event) => {
        if (!this.contains(event.target)) {
          navLinks.classList.remove("open");
        }
      });
    }
  }
}
customElements.define("app-navbar", AppNavbar);
