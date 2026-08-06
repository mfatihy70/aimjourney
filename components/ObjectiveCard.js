class ObjectiveCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const icon = this.getAttribute("icon") || "fa-bullseye";
    const title = this.getAttribute("title") || "Objective";
    const desc = this.getAttribute("desc") || "Description";

    this.innerHTML = `
      <div class="obj-card">
        <div class="icon"><i class="fas ${icon}"></i></div>
        <h4>${title}</h4>
        <p>${desc}</p>
      </div>
    `;
  }
}
customElements.define("objective-card", ObjectiveCard);
