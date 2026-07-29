export class QuotesPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    Promise.all([
      fetch("pages/quotes/quotes.html").then((r) => r.text()),
      fetch("pages/quotes/quotes.css").then((r) => r.text()),
    ]).then(([html, css]) => {
      this.shadowRoot.innerHTML = html;
      const style = document.createElement("style");
      style.textContent = css;
      this.shadowRoot.appendChild(style);
      this.loadQuotes();
    });
  }

  async loadQuotes() {
    const container = this.shadowRoot.querySelector(".quotes-container");
    let data = {};

    // Load data
    try {
      const res = await fetch("content/quotes/quotes-data.js");
      const text = await res.text();
      const match = text.match(/window\.quoteData\s*=\s*({[\s\S]*});/);
      if (match) data = new Function("return " + match[1])();
    } catch (e) {
      console.warn("No quote data");
    }

    Object.keys(data)
      .sort((a, b) => a - b)
      .forEach((day) => {
        const header = document.createElement("div");
        header.className = "day-header animate-on-scroll";
        header.innerHTML = `<h3>Day ${day}</h3>`;
        container.appendChild(header);

        data[day].forEach((q, idx) => {
          const card = document.createElement("quote-card");
          card.setAttribute("day", day);
          card.setAttribute("participant", q.participant);
          card.setAttribute("text", q.text);
          card.style.transitionDelay = `${idx * 0.05}s`;
          container.appendChild(card);
        });
      });
  }
}
customElements.define("quotes-page", QuotesPage);
