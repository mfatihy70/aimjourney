class MentorCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Mentor";
    const role = this.getAttribute("role") || "Role";
    const img = this.getAttribute("img") || "";
    const fallback = this.getAttribute("fallback") || "M";

    this.innerHTML = `
      <div class="mentor-card">
        ${
          img
            ? `<img src="${img}" alt="${name}" />`
            : `<div class="avatar">${fallback}</div>`
        }
        <h4>${name}</h4>
        <p>${role}</p>
      </div>
    `;
  }
}
customElements.define("mentor-card", MentorCard);
