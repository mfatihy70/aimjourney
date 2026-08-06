class OrganizationCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const type = this.getAttribute("type") || "partner";
    const name = this.getAttribute("name") || "Organization";
    const country = this.getAttribute("country") || "Country";
    const desc = this.getAttribute("desc") || "Description";
    const logo = this.getAttribute("logo") || "";
    const url = this.getAttribute("url") || "#";

    this.innerHTML = `
      <a href="${url}" target="_blank" style="text-decoration:none;color:inherit;display:block;height:100%;">
        <div class="org-card">
          <div class="label ${type}">${type === "coordinator" ? "Coordinator" : "Partner"}</div>
          ${logo ? `<img src="${logo}" alt="${name} Logo" />` : ""}
          <h4>${name}</h4>
          <div class="country">${country}</div>
          <div class="desc">${desc}</div>
        </div>
      </a>
    `;
  }
}
customElements.define("organization-card", OrganizationCard);
