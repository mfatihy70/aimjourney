import { initRouter } from "./router.js";
import { initNavbar, initFooter, initScrollAnimations } from "./components.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initFooter();
  initRouter();
  initScrollAnimations();
});
