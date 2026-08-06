class OrganizationCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const type = this.getAttribute("type") || "partner";
    const name = this.getAttribute("name") || "Organization";
    const country = this.getAttribute("country") || "Country";
    const desc = this.getAttribute("desc") || "Description here";
    const logo = this.getAttribute("logo") || "";
    const url = this.getAttribute("url") || "#";
    const borderColor = type === "coordinator" ? "aim-blue" : "aim-orange";

    this.innerHTML = `
      <a href="${url}" target="_blank" class="no-underline text-inherit block">
        <div class="bg-white p-4 md:p-6 rounded-2xl text-center card-shadow border-t-4 border-${borderColor}">
          ${type === "coordinator" ? '<span class="text-xs font-bold text-aim-blue uppercase tracking-wider">Coordinator</span>' : '<span class="text-xs font-bold text-aim-orange uppercase tracking-wider">Partner</span>'}
          ${logo ? `<img src="${logo}" alt="${name} Logo" class="h-12 md:h-[80px] w-auto mx-auto my-3 object-contain" />` : ""}
          <h4 class="font-bold text-aim-dark">${name}</h4>
          <p class="text-sm text-gray-600">${country}</p>
          <p class="text-xs md:text-sm text-gray-600 mt-2">${desc}</p>
        </div>
      </a>
    `;
  }
}
customElements.define("organization-card", OrganizationCard);
