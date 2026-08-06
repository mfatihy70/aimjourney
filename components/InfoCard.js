class InfoCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const icon = this.getAttribute("icon") || "fa-info-circle";
    const title = this.getAttribute("title") || "Info";
    const content = this.getAttribute("content") || "Content here";
    const color = this.getAttribute("color") || "aim-blue";

    this.innerHTML = `
      <div class="bg-white p-6 md:p-8 rounded-2xl card-shadow text-center flex flex-col items-center justify-center h-full border-b-4 border-${color}">
        <i class="fas ${icon} text-3xl md:text-4xl text-aim-orange mb-4"></i>
        <h4 class="text-base md:text-lg font-bold text-aim-dark mb-2">${title}</h4>
        <p class="text-sm md:text-base text-gray-600 leading-relaxed">${content}</p>
      </div>
    `;
  }
}
customElements.define("info-card", InfoCard);
