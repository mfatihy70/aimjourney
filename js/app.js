const routes = {
  "#/": "home",
  "#/home": "home",
  "#/gallery": "gallery",
  "#/about": "about",
  "#/quotes": "quotes",
};

function handleRoute() {
  // Use location.hash instead of location.pathname
  const hash = window.location.hash || "#/home";
  const pageTag = routes[hash] || routes["#/home"];

  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = "";
    const element = document.createElement(pageTag);
    main.appendChild(element);
    document.querySelector("app-navbar").setActive(pageTag);
  }
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);

// Update link interception
document.body.addEventListener("click", (e) => {
  if (e.target.matches("a[href]")) {
    const href = e.target.getAttribute("href");
    // Only intercept internal links starting with # or /
    if (
      href.startsWith("/") ||
      (href.startsWith("#") && !href.startsWith("#/"))
    ) {
      e.preventDefault();
      // Convert /home to #/home if needed, or just use hash directly
      const newHash = href.startsWith("/") ? `#${href}` : href;
      window.location.hash = newHash;
      window.scrollTo(0, 0);
    }
  }
});
