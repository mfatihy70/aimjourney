export function renderHome(container) {
  let imagesHtml = "";
  for (let i = 1; i <= 11; i++) {
    imagesHtml += `<img src="content/${i}.jpeg" alt="Highlight ${i}" class="animate-on-scroll" style="transition-delay: ${i * 0.05}s">`;
  }

  container.innerHTML = `
    <div class="hero animate-on-scroll">
      <img src="content/traincover.png" alt="Train Journey Cover">
    </div>
    <div class="container">
      <section id="highlights">
        <h2 class="animate-on-scroll">Journey Highlights</h2>
        <div class="home-grid">
          ${imagesHtml}
        </div>
      </section>
      <section id="info">
        <h2 class="animate-on-scroll">Our Mission</h2>
        <div class="mission-grid">
          <div class="info-card animate-on-scroll" style="border-top-color: var(--color-blue);">
            <div class="info-content"><h3>Cultural Exchange</h3><p>Connecting youth across borders.</p></div>
          </div>
          <div class="info-card animate-on-scroll" style="border-top-color: var(--color-green);">
            <div class="info-content"><h3>Sustainable Travel</h3><p>Exploring Europe by train.</p></div>
          </div>
          <div class="info-card animate-on-scroll" style="border-top-color: var(--color-orange);">
            <div class="info-content"><h3>Future Impact</h3><p>Building lasting friendships.</p></div>
          </div>
        </div>
      </section>
      <section id="visuals" class="animate-on-scroll">
        <h2>Project Visuals</h2>
        <div class="visuals-grid">
          <img src="content/poster.jpeg" alt="Poster">
          <img src="content/identity_tree.png" alt="Identity Tree">
        </div>
      </section>
    </div>
  `;
}
