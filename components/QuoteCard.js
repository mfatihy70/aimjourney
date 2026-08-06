class QuoteCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const day = this.getAttribute("day") || "1";
    const text = this.getAttribute("text") || "Inspirational quote";
    const author = this.getAttribute("author") || "Participant";

    this.innerHTML = `
      <div class="quote-card">
        <div class="day">Day ${day}</div>
        <div class="text">"${text}"</div>
        <div class="author">- ${author}</div>
      </div>
    `;
  }
}
customElements.define("quote-card", QuoteCard);
