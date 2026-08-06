class AppNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentPage = this.getAttribute("page") || "home";
    this.innerHTML = `
      <nav class="bg-white sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-auto md:h-[150px] flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-3 md:py-6">
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <img src="logo.png" alt="AIM Journey Logo" class="h-12 md:h-[60px] w-auto" />
          <span class="font-extrabold text-xl md:text-2xl tracking-tight bg-gradient-to-r from-aim-orange via-aim-blue to-aim-green bg-clip-text text-transparent">AIM Journey</span>
          <img src="content/images/fundedbyeu.jpg" alt="Co-funded by the European Union" class="h-8 md:h-[50px] w-auto" />
        </div>
        <div class="hamburger md:hidden cursor-pointer flex flex-col gap-1.5 mt-2 md:mt-0">
          <span class="w-6 h-0.5 bg-aim-dark rounded transition-all"></span>
          <span class="w-6 h-0.5 bg-aim-dark rounded transition-all"></span>
          <span class="w-6 h-0.5 bg-aim-dark rounded transition-all"></span>
        </div>
        <div class="nav-links hidden md:flex gap-4 md:gap-6 items-center w-full md:w-auto justify-center md:justify-end mt-2 md:mt-0">
          <a href="index.html" class="nav-link ${currentPage === "home" ? "active" : ""} font-semibold text-base md:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-0 after:bg-gradient-to-r after:from-aim-blue after:to-aim-orange after:transition-all after:duration-300 hover:after:w-full hover:text-aim-orange">Home</a>
          <a href="about.html" class="nav-link ${currentPage === "about" ? "active" : ""} font-semibold text-base md:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-0 after:bg-gradient-to-r after:from-aim-blue after:to-aim-orange after:transition-all after:duration-300 hover:after:w-full hover:text-aim-orange">About</a>
          <a href="activities.html" class="nav-link ${currentPage === "activities" ? "active" : ""} font-semibold text-base md:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-0 after:bg-gradient-to-r after:from-aim-blue after:to-aim-orange after:transition-all after:duration-300 hover:after:w-full hover:text-aim-orange">Activities</a>
          <a href="gallery.html" class="nav-link ${currentPage === "gallery" ? "active" : ""} font-semibold text-base md:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-0 after:bg-gradient-to-r after:from-aim-blue after:to-aim-orange after:transition-all after:duration-300 hover:after:w-full hover:text-aim-orange">Gallery</a>
          <a href="quotes.html" class="nav-link ${currentPage === "quotes" ? "active" : ""} font-semibold text-base md:text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-0 after:bg-gradient-to-r after:from-aim-blue after:to-aim-orange after:transition-all after:duration-300 hover:after:w-full hover:text-aim-orange">Quotes</a>
          <a href="https://www.instagram.com/aimjourney.eu/" target="_blank" class="text-xl md:text-2xl text-[#e1306c] hover:scale-110 transition-transform">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </nav>
    `;

    // Mobile menu toggle
    const hamburger = this.querySelector(".hamburger");
    const navLinks = this.querySelector(".nav-links");
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("hidden");
        navLinks.classList.toggle("flex");
        navLinks.classList.toggle("flex-col");
        navLinks.classList.toggle("absolute");
        navLinks.classList.toggle("top-full");
        navLinks.classList.toggle("left-0");
        navLinks.classList.toggle("w-full");
        navLinks.classList.toggle("bg-white");
        navLinks.classList.toggle("p-4");
        navLinks.classList.toggle("shadow-lg");
        navLinks.classList.toggle("gap-3");
      });
    }
  }
}
customElements.define("app-navbar", AppNavbar);
