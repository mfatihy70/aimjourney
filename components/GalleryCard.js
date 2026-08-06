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
      <div class="bg-white rounded-2xl overflow-hidden card-shadow h-[450px] md:h-[520px] flex flex-col border-t-4 border-aim-orange">
        <div class="relative w-full h-[55%] overflow-hidden flex-shrink-0 touch-pan-y">
          <div class="slider-track flex w-[200%] h-full transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" style="transform: translateX(0%)">
            <img src="${avatarPath}" alt="Avatar ${num}" class="w-1/2 h-full object-cover" loading="lazy" />
            <img src="${storyPath}" alt="Story ${num}" class="w-1/2 h-full object-cover" loading="lazy" />
          </div>
          <div class="slider-controls absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <div class="dot w-2 h-2 rounded-full bg-white/50 cursor-pointer transition-all active:bg-white active:scale-125"></div>
            <div class="dot w-2 h-2 rounded-full bg-white/50 cursor-pointer transition-all active:bg-white active:scale-125"></div>
          </div>
        </div>
        <div class="p-3 md:p-4 h-[45%] flex flex-col justify-start overflow-hidden">
          <div class="font-bold text-base md:text-lg mb-1.5 text-aim-dark">${title}</div>
          <p class="text-sm md:text-base text-gray-600 overflow-y-auto leading-relaxed flex-1">Loading story...</p>
        </div>
      </div>
    `;

    // Fetch story text
    fetch(txtPath)
      .then((res) => (res.ok ? res.text() : "No description available."))
      .then((text) => {
        const textEl = this.querySelector(
          ".slider-content p, .slider-text, .p-3 p",
        );
        if (textEl) textEl.textContent = text.trim();
      })
      .catch(() => {
        const textEl = this.querySelector(".p-3 p");
        if (textEl) textEl.textContent = "No description available.";
      });

    // Dot navigation
    this.querySelectorAll(".dot").forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Touch swipe support
    let touchStartX = 0;
    const wrapper = this.querySelector(".relative");
    wrapper.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );
    wrapper.addEventListener(
      "touchend",
      (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        const threshold = 40;
        const dots = this.querySelectorAll(".dot");
        let activeIndex = Array.from(dots).findIndex((d) =>
          d.classList.contains("active"),
        );
        if (diff < -threshold && activeIndex > 0) {
          this.goToSlide(activeIndex - 1);
        } else if (diff > threshold && activeIndex < dots.length - 1) {
          this.goToSlide(activeIndex + 1);
        }
      },
      { passive: true },
    );
  }

  goToSlide(index) {
    const track = this.querySelector(".slider-track");
    const dots = this.querySelectorAll(".dot");
    if (track) {
      track.style.transform = `translateX(-${index * 50}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  }
}
customElements.define("gallery-card", GalleryCard);
