class AppHero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "AIM Journey";
    const subtitle =
      this.getAttribute("subtitle") ||
      "Together for Tomorrow: Young Voices of Integration";
    const desc =
      this.getAttribute("desc") ||
      "An Erasmus+ KA152 Youth Exchange project uniting young minds from Austria and Poland to explore AI, migration, and digital storytelling.";
    const imgSrc = this.getAttribute("img") || "content/images/train.png";

    this.innerHTML = `
      <header class="hero">
        <div class="bg"><img src="${imgSrc}" alt="Hero" /></div>
        <div class="content">
          <h1>${title}</h1>
          <p class="subtitle">${subtitle}</p>
          <p class="desc">${desc}</p>
        </div>
      </header>
    `;
  }
}
customElements.define("app-hero", AppHero);
