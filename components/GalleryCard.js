class GalleryCard extends HTMLElement {
  constructor() {
    super();
    this.currentSlide = 0;
  }

  connectedCallback() {
    const num = this.getAttribute("num");
    const title = this.getAttribute("title") || `Participant ${num}`;
    const avatarPath = `content/avatars/${num}.jpeg`;
    const storyPath = `content/stories/${num}.jpeg`;
    const txtPath = `content/prompts/${num}.txt`;

    this.innerHTML = `
      <div class="gallery-card">
        <div class="slider">
          <div class="slider-track">
            <img src="${avatarPath}" alt="Avatar ${num}" loading="lazy" />
            <img src="${storyPath}" alt="Story ${num}" loading="lazy" />
          </div>
          <div class="slider-dots">
            <span class="active"></span>
            <span></span>
          </div>
        </div>
        <div class="body">
          <h6>${title}</h6>
          <p class="story-text">Loading story...</p>
        </div>
      </div>
    `;

    // Fetch story text
    fetch(txtPath)
      .then((res) => (res.ok ? res.text() : "No description available."))
      .then((text) => {
        const el = this.querySelector(".story-text");
        if (el) el.textContent = text.trim();
      })
      .catch(() => {
        const el = this.querySelector(".story-text");
        if (el) el.textContent = "No description available.";
      });

    // Dot navigation
    this.querySelectorAll(".slider-dots span").forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Touch swipe
    let startX = 0;
    const slider = this.querySelector(".slider");
    slider.addEventListener(
      "touchstart",
      (e) => {
        startX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );
    slider.addEventListener(
      "touchend",
      (e) => {
        const diff = startX - e.changedTouches[0].screenX;
        const threshold = 40;
        const dots = this.querySelectorAll(".slider-dots span");
        let active = Array.from(dots).findIndex((d) =>
          d.classList.contains("active"),
        );
        if (diff < -threshold && active > 0) this.goToSlide(active - 1);
        else if (diff > threshold && active < dots.length - 1)
          this.goToSlide(active + 1);
      },
      { passive: true },
    );
  }

  goToSlide(index) {
    const track = this.querySelector(".slider-track");
    const dots = this.querySelectorAll(".slider-dots span");
    if (track) {
      track.style.transform = `translateX(-${index * 50}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    }
  }
}
customElements.define("gallery-card", GalleryCard);
