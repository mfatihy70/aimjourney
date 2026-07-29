export function renderGallery(container) {
  const imageNumbers = [
    1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26,
    27, 28, 29, 30, 31,
  ];

  let cardsHtml = "";
  imageNumbers.forEach((num, index) => {
    cardsHtml += `
      <div class="slider-card animate-on-scroll" style="transition-delay: ${index * 0.05}s">
        <div class="slider-wrapper">
          <div class="slider-track" id="track-${num}">
            <img src="content/avatars/${num}.jpeg" alt="Avatar">
            <img src="content/stories/${num}.jpeg" alt="Story">
          </div>
          <div class="slider-controls">
            <div class="dot active" onclick="window.slideGallery(${num}, 0)"></div>
            <div class="dot" onclick="window.slideGallery(${num}, 1)"></div>
          </div>
        </div>
        <div class="slider-content">
          <div class="slider-title">AIM_Journey_${num}</div>
          <p class="slider-text" id="text-${num}">Loading...</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="container">
      <h2 class="animate-on-scroll">Story Gallery</h2>
      <div class="gallery-grid">
        ${cardsHtml}
      </div>
    </div>
  `;

  // Load texts
  imageNumbers.forEach((num) => {
    fetch(`content/prompts/${num}.txt`)
      .then((res) => (res.ok ? res.text() : "No description"))
      .then((text) => {
        const el = document.getElementById(`text-${num}`);
        if (el) el.textContent = text.trim();
      });
  });

  // Expose slide function to window for inline onclick
  window.slideGallery = (id, index) => {
    const track = document.getElementById(`track-${id}`);
    const dots = track.parentElement.querySelectorAll(".dot");
    if (track) track.style.transform = `translateX(-${index * 50}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  };
}
