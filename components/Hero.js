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
      <header class="relative w-full min-h-[40vh] md:min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div class="absolute inset-0 -z-10">
          <img src="${imgSrc}" alt="Hero Background" class="w-full h-full object-cover brightness-50" />
        </div>
        <div class="px-4 md:px-8 max-w-3xl z-10">
          <h1 class="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">${title}</h1>
          <p class="text-xl md:text-2xl bg-black/30 rounded-2xl py-2 px-4 inline-block mb-3 font-bold">${subtitle}</p>
          <p class="text-base md:text-lg bg-black/30 rounded-2xl p-3 md:p-4 leading-relaxed">${desc}</p>
        </div>
      </header>
    `;
  }
}
customElements.define("app-hero", AppHero);
