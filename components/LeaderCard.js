class LeaderCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Leader";
    const role = this.getAttribute("role") || "Role";
    const icon = this.getAttribute("icon") || "fa-user-tie";

    this.innerHTML = `
      <div class="bg-white p-4 md:p-6 rounded-2xl text-center card-shadow border-t-4 border-aim-dark">
        <div class="text-3xl md:text-4xl text-aim-blue mb-3">
          <i class="fas ${icon}"></i>
        </div>
        <h3 class="text-xl md:text-2xl font-bold text-aim-dark">${name}</h3>
        <p class="text-sm md:text-base text-gray-600 font-semibold">${role}</p>
      </div>
    `;
  }
}
customElements.define("leader-card", LeaderCard);
