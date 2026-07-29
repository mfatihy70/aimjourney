export class GalleryPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    Promise.all([
      fetch("pages/gallery/gallery.html").then((r) => r.text()),
      fetch("pages/gallery/gallery.css").then((r) => r.text()),
    ]).then(([html, css]) => {
      this.shadowRoot.innerHTML = html;
      const style = document.createElement("style");
      style.textContent = css;
      this.shadowRoot.appendChild(style);
      this.loadCards();
    });
  }

  async loadCards() {
    const nums = [
      1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25,
      26, 27, 28, 29, 30, 31,
    ];
    const container = this.shadowRoot.querySelector(".gallery-grid");

    for (const [idx, num] of nums.entries()) {
      const card = document.createElement("gallery-card");
      card.setAttribute("num", num);
      card.className = "animate-on-scroll";
      card.style.transitionDelay = `${idx * 0.05}s`;

      // Fetch text
      try {
        const res = await fetch(`content/prompts/${num}.txt`);
        const text = res.ok ? await res.text() : "No description";
        card.setAttribute("text", text.trim());
      } catch (e) {
        card.setAttribute("text", "No description");
      }

      container.appendChild(card);
    }
  }
}
customElements.define("gallery-page", GalleryPage);
