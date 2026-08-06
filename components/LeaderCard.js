class LeaderCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Leader";
    const role = this.getAttribute("role") || "Role";
    const icon = this.getAttribute("icon") || "fa-user-tie";

    this.innerHTML = `
      <div class="leader-card">
        <i class="fas ${icon}"></i>
        <h4>${name}</h4>
        <div class="role">${role}</div>
      </div>
    `;
  }
}
customElements.define("leader-card", LeaderCard);
