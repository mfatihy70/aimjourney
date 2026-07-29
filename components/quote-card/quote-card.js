export class QuoteCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["day", "participant", "text"];
  }

  connectedCallback() {
    fetch("components/quote-card/quote-card.html")
      .then((r) => r.text())
      .then((html) => {
        this.shadowRoot.innerHTML = html;
        const style = document.createElement("style");
        style.textContent = `@import url('components/quote-card/quote-card.css');`;
        this.shadowRoot.appendChild(style);
        this.update();
      });
  }

  attributeChangedCallback() {
    if (this.shadowRoot.innerHTML) this.update();
  }

  update() {
    this.shadowRoot.querySelector(".day").textContent =
      `Day ${this.getAttribute("day")}`;
    this.shadowRoot.querySelector(".author").textContent =
      `- AIM_Journey_${this.getAttribute("participant")}`;
    this.shadowRoot.querySelector(".text").textContent =
      this.getAttribute("text");
  }
}
customElements.define("quote-card", QuoteCard);
