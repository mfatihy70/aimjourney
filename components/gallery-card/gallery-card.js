export class GalleryCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.currentIndex = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  static get observedAttributes() {
    return ["num", "text"];
  }

  connectedCallback() {
    fetch("components/gallery-card/gallery-card.html")
      .then((r) => r.text())
      .then((html) => {
        this.shadowRoot.innerHTML = html;
        const style = document.createElement("style");
        style.textContent = `@import url('components/gallery-card/gallery-card.css');`;
        this.shadowRoot.appendChild(style);
        this.initSwipe();
        this.updateImages();
      });
  }

  attributeChangedCallback() {
    if (this.shadowRoot.innerHTML) {
      this.updateImages();
      this.shadowRoot.querySelector(".text-content").textContent =
        this.getAttribute("text") || "Loading...";
    }
  }

  updateImages() {
    const num = this.getAttribute("num");
    const track = this.shadowRoot.querySelector(".slider-track");
    if (track) {
      track.innerHTML = `
        <img src="content/avatars/${num}.jpeg" alt="Avatar">
        <img src="content/stories/${num}.jpeg" alt="Story">
      `;
    }
  }

  initSwipe() {
    const area = this.shadowRoot.querySelector(".slider-wrapper");

    area.addEventListener(
      "touchstart",
      (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    area.addEventListener(
      "touchend",
      (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      },
      { passive: true },
    );

    // Mouse drag support for desktop testing
    area.addEventListener("mousedown", (e) => {
      this.touchStartX = e.screenX;
      area.addEventListener(
        "mouseup",
        (e) => {
          this.touchEndX = e.screenX;
          this.handleSwipe();
        },
        { once: true },
      );
    });
  }

  handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 50) {
      // Threshold
      if (diff > 0)
        this.slide(1); // Left swipe -> Next
      else this.slide(0); // Right swipe -> Prev
    }
  }

  slide(index) {
    this.currentIndex = index;
    const track = this.shadowRoot.querySelector(".slider-track");
    const dots = this.shadowRoot.querySelectorAll(".dot");
    track.style.transform = `translateX(-${index * 50}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }
}
customElements.define("gallery-card", GalleryCard);
