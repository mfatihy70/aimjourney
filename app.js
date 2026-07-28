const translations = {
  en: {
    title: "AIM-Journey",
    nav_home: "Home",
    nav_gallery: "Gallery",
    nav_about: "About",
    nav_quotes: "Quotes",
  },
  tr: {
    title: "AIM-Yolculuğu",
    nav_home: "Ana Sayfa",
    nav_gallery: "Galeri",
    nav_about: "Hakkımızda",
    nav_quotes: "Alıntılar",
  },
  de: {
    title: "AIM-Reise",
    nav_home: "Startseite",
    nav_gallery: "Galerie",
    nav_about: "Über uns",
    nav_quotes: "Zitate",
  },
  pl: {
    title: "Podróż AIM",
    nav_home: "Strona główna",
    nav_gallery: "Galeria",
    nav_about: "O nas",
    nav_quotes: "Cytaty",
  },
};

let currentLang = "en";

// Array of explicit IDs provided
const contentIds = [
  1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26,
  27, 28, 29, 30, 31,
];

async function route(page) {
  const contentDiv = document.getElementById("app-content");
  contentDiv.style.opacity = 0;

  setTimeout(async () => {
    try {
      const response = await fetch(`pages/${page}.html`);
      if (!response.ok) throw new Error("Page not found");
      const html = await response.text();

      contentDiv.innerHTML = html;
      contentDiv.style.opacity = 1;
      contentDiv.style.animation = "none";
      contentDiv.offsetHeight; // reflow
      contentDiv.style.animation = "fadeIn 0.3s ease-out";

      applyTranslations();

      // If navigating to the gallery, populate the cards dynamically
      if (page === "gallery") {
        populateGallery();
      }
    } catch (error) {
      contentDiv.innerHTML = `<h2 style="color:var(--primary-orange)">404 - Page not found</h2>`;
      contentDiv.style.opacity = 1;
    }
  }, 150); // Faster page transition wait time
}

async function populateGallery() {
  const grid = document.getElementById("dynamic-gallery-grid");
  if (!grid) return;

  let galleryHTML = "";

  contentIds.forEach((id) => {
    galleryHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <!-- Avatar image shown by default -->
                    <img src="content/avatars/${id}.jpeg" alt="Avatar ${id}" class="avatar-img" onerror="this.src='content/avatars/${id}.png'">
                    <!-- Story image revealed on hover -->
                    <img src="content/stories/${id}.jpeg" alt="Story ${id}" class="story-img" onerror="this.src='content/stories/${id}.png'">
                </div>
                <div class="card-content">
                    <h3 style="color: var(--primary-blue)">Participant ${id}</h3>
                    <p style="margin-top: 5px; font-size: 0.9rem;">Hover over the image to view the story artwork.</p>
                    <div class="card-prompt" id="prompt-${id}">Loading prompt...</div>
                </div>
            </div>
        `;
  });

  grid.innerHTML = galleryHTML;

  // Fetch the .txt prompts asynchronously to prevent blocking the UI render
  contentIds.forEach(async (id) => {
    const promptDiv = document.getElementById(`prompt-${id}`);
    try {
      const res = await fetch(`content/prompts/${id}.txt`);
      if (res.ok) {
        const text = await res.text();
        promptDiv.innerHTML = `<strong>Prompt:</strong> "${text}"`;
      } else {
        promptDiv.innerText = "Prompt not found.";
      }
    } catch (e) {
      promptDiv.innerText = "Failed to load prompt.";
    }
  });
}

function changeLanguage(lang) {
  currentLang = lang;
  applyTranslations();
}

function applyTranslations() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      el.innerText = translations[currentLang][key];
    }
  });
}

window.onload = () => route("home");
