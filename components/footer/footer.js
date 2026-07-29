export class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    fetch("components/footer/footer.html")
      .then((r) => r.text())
      .then((html) => {
        this.shadowRoot.innerHTML = html;
        const style = document.createElement("style");
        style.textContent = `@import url('components/footer/footer.css');`;
        this.shadowRoot.appendChild(style);
      });
  }
}
customElements.define("app-footer", AppFooter);
