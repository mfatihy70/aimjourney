export class AppNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    fetch("components/navbar/navbar.html")
      .then((r) => r.text())
      .then((html) => {
        this.shadowRoot.innerHTML = html;
        const style = document.createElement("style");
        style.textContent = `
          @import url('components/navbar/navbar.css');
        `;
        this.shadowRoot.appendChild(style);
        this.initMobile();
      });
  }

  initMobile() {
    const btn = this.shadowRoot.querySelector(".hamburger");
    const nav = this.shadowRoot.querySelector(".nav-links");
    btn.addEventListener("click", () => nav.classList.toggle("active"));

    // Close on link click
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => nav.classList.remove("active"));
    });
  }

  setActive(pageTag) {
    const links = this.shadowRoot.querySelectorAll("a");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const target = href === "/" ? "home" : href.substring(1) + "";
      if (target === pageTag) link.classList.add("active");
      else link.classList.remove("active");
    });
  }
}
customElements.define("app-navbar", AppNavbar);
