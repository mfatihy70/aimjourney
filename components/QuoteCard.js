class QuoteCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const day = this.getAttribute("day") || "1";
    const text = this.getAttribute("text") || "Inspirational quote here";
    const author = this.getAttribute("author") || "Participant";

    this.innerHTML = `
      <div class="bg-white p-4 md:p-6 rounded-2xl border-l-4 border-aim-purple card-shadow animate-on-scroll">
        <div class="text-xs uppercase tracking-wider text-aim-blue font-bold mb-2">Day ${day}</div>
        <div class="italic text-sm md:text-base text-aim-dark mb-3">"${text}"</div>
        <div class="text-right font-bold text-sm text-gray-600">- ${author}</div>
      </div>
    `;
  }
}
customElements.define("quote-card", QuoteCard);
