// Translations Dictionary
const translations = {
  en: {
    nav_home: "Home",
    nav_gallery: "Gallery",
    nav_quotes: "Quotes",
    about_title: "About The Project",
    card1_title: "Our Mission",
    card1_text:
      "Fostering youth exchange through cultural immersion and sustainable travel.",
    card2_title: "The Journey",
    card2_text:
      "Exploring Europe by train, connecting communities, and building lasting friendships.",
    card3_title: "Impact",
    card3_text:
      "Creating a ripple effect of positivity and environmental awareness across borders.",
    visuals_title: "Project Visuals",
    gallery_title: "Story Gallery",
    quotes_title: "Participant Quotes",
  },
  tr: {
    nav_home: "Ana Sayfa",
    nav_gallery: "Galeri",
    nav_quotes: "Alıntılar",
    about_title: "Proje Hakkında",
    card1_title: "Misyonumuz",
    card1_text:
      "Kültürel погружение ve sürdürülebilir seyahat yoluyla gençlik değişimini teşvik etmek.",
    card2_title: "Yolculuk",
    card2_text:
      "Avrupa'yı trenle keşfetmek, toplulukları bir araya getirmek ve kalıcı dostluklar kurmak.",
    card3_title: "Etki",
    card3_text:
      "Sınırlar ötesi pozitiflik ve çevre bilinci konusunda bir dalga etkisi yaratmak.",
    visuals_title: "Proje Görselleri",
    gallery_title: "Hikaye Galerisi",
    quotes_title: "Katılımcı Alıntıları",
  },
  de: {
    nav_home: "Startseite",
    nav_gallery: "Galerie",
    nav_quotes: "Zitate",
    about_title: "Über das Projekt",
    card1_title: "Unsere Mission",
    card1_text:
      "Förderung des Jugendaustauschs durch kulturelles Eintauchen und nachhaltiges Reisen.",
    card2_title: "Die Reise",
    card2_text:
      "Europa mit dem Zug entdecken, Gemeinschaften verbinden und dauerhafte Freundschaften aufbauen.",
    card3_title: "Wirkung",
    card3_text:
      "Eine Wellenwirkung von Positivität und Umweltbewusstsein über Grenzen hinweg schaffen.",
    visuals_title: "Projektvisuals",
    gallery_title: "Story Galerie",
    quotes_title: "Teilnehmerzitate",
  },
  pl: {
    nav_home: "Strona główna",
    nav_gallery: "Galeria",
    nav_quotes: "Cytaty",
    about_title: "O Projekcie",
    card1_title: "Nasza Misja",
    card1_text:
      "Wspieranie wymiany młodzieży poprzez immersję kulturową i zrównoważone podróże.",
    card2_title: "Podróż",
    card2_text:
      "Zwiedzanie Europy pociągiem, łączenie społeczności i budowanie trwałych przyjaźni.",
    card3_title: "Wpływ",
    card3_text:
      "Tworzenie efektu fali pozytywu i świadomości ekologicznej ponad granicami.",
    visuals_title: "Wizualizacje Projektu",
    gallery_title: "Galeria Historii",
    quotes_title: "Cytaty Uczestników",
  },
};

function changeLanguage(lang) {
  // Update static elements
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Note: Dynamic content (quotes/prompts) loaded from .txt files
  // will remain in the language they were written in unless you
  // implement a translation API or have separate folders for each language.

  // Save preference
  localStorage.setItem("aim_lang", lang);
}

// Initialize language on load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("aim_lang") || "en";
  const selector = document.getElementById("lang-switcher");
  if (selector) {
    selector.value = savedLang;
    changeLanguage(savedLang);
  }
});
