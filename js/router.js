import { renderHome } from "../views/home.js";
import { renderGallery } from "../views/gallery.js";
import { renderAbout } from "../views/about.js";
import { renderQuotes } from "../views/quotes.js";

const routes = {
  "/": renderHome,
  "/home": renderHome,
  "/gallery": renderGallery,
  "/about": renderAbout,
  "/quotes": renderQuotes,
};

export function initRouter() {
  window.addEventListener("popstate", handleLocation);
  handleLocation(); // Initial load

  // Intercept clicks on <a> tags
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("a[href]")) {
      const href = e.target.getAttribute("href");
      if (href.startsWith("/") || href.startsWith("#")) {
        e.preventDefault();
        // Handle hash or path
        const path = href.startsWith("#") ? href.substring(1) : href;
        history.pushState(null, "", path);
        handleLocation();
        window.scrollTo(0, 0);
      }
    }
  });
}

function handleLocation() {
  const path = window.location.pathname || "/";
  const view = routes[path] || routes["/"];

  const main = document.getElementById("main-content");
  if (main) {
    main.innerHTML = ""; // Clear current content
    view(main); // Render new content
  }
}
