export class AboutPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    Promise.all([
      fetch("pages/about/about.html").then((r) => r.text()),
      fetch("pages/about/about.css").then((r) => r.text()),
    ]).then(([html, css]) => {
      this.shadowRoot.innerHTML = html;
      const style = document.createElement("style");
      style.textContent = css;
      this.shadowRoot.appendChild(style);
      this.initAnimations();
    });
  }

  initAnimations() {
    // Re-use the intersection observer logic locally or rely on global
    // Since we are in Shadow DOM, we need a local observer or global class
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

    this.shadowRoot.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }
}
customElements.define("about-page", AboutPage);
