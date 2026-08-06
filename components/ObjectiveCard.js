class ObjectiveCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const icon = this.getAttribute("icon") || "fa-bullseye";
    const title = this.getAttribute("title") || "Objective";
    const desc = this.getAttribute("desc") || "Description here";

    this.innerHTML = `
      <div class="bg-white p-6 md:p-8 rounded-2xl card-shadow text-center flex flex-col items-center h-full border-t-4 border-aim-purple hover:-translate-y-1 transition-transform">
        <div class="w-14 h-14 md:w-[70px] md:h-[70px] bg-aim-blue/10 rounded-full flex items-center justify-center mb-4">
          <i class="fas ${icon} text-2xl md:text-3xl text-aim-blue"></i>
        </div>
        <h4 class="text-base md:text-lg font-bold text-aim-dark mb-2 min-h-[3rem] flex items-center justify-center">${title}</h4>
        <p class="text-sm md:text-base text-gray-600 leading-relaxed">${desc}</p>
      </div>
    `;
  }
}
customElements.define("objective-card", ObjectiveCard);
