class InfoCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const icon = this.getAttribute("icon") || "fa-info-circle";
    const title = this.getAttribute("title") || "Info";
    const content = this.getAttribute("content") || "Content";

    this.innerHTML = `
      <div class="info-card">
        <i class="fas ${icon}"></i>
        <h4>${title}</h4>
        <p>${content}</p>
      </div>
    `;
  }
}
customElements.define("info-card", InfoCard);
