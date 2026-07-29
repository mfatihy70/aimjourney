export class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    Promise.all([
      fetch("pages/home/home-page.html").then((r) => r.text()),
      fetch("pages/home/home-page.css").then((r) => r.text()),
    ]).then(([html, css]) => {
      this.shadowRoot.innerHTML = html;
      const style = document.createElement("style");
      style.textContent = css;
      this.shadowRoot.appendChild(style);
      this.renderGrid();
    });
  }

  renderGrid() {
    const grid = this.shadowRoot.querySelector(".home-grid");
    for (let i = 1; i <= 11; i++) {
      const img = document.createElement("img");
      img.src = `content/info/${i}.jpeg`; // Updated path
      img.alt = `Highlight ${i}`;
      img.className = "animate-on-scroll";
      img.style.transitionDelay = `${i * 0.05}s`;
      grid.appendChild(img);
    }
  }
}
customElements.define("home-page", HomePage);
