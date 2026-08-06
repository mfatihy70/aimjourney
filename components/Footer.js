class AppFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-aim-dark text-white text-center py-8 md:py-12 mt-12 md:mt-16">
        <div class="max-w-3xl mx-auto px-4">
          <div class="text-left text-xs text-gray-400 max-w-2xl mx-auto mb-6">
            <p class="mb-2"><strong>Privacy Policy:</strong> We respect your privacy. Data is processed securely for communication and project activities only. Never shared without consent.</p>
            <p class="mb-2"><strong>GDPR Compliance:</strong> In accordance with (EU) 2016/679. You have the right to access, correct, or delete your data.</p>
            <p><strong>Imprint:</strong> AIM Journey – AI and the Migration Journey. Coord: Phönix in Niederösterreich. Partner: Fundacja Mevlana. Web: www.aim-journey.eu | Email: aimjourney@phoenixnoe.at</p>
          </div>
          <div class="text-xs text-gray-300 mb-4">
            <p>Funded by the European Union. Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union or the National Agency.</p>
          </div>
          <p class="mt-4 font-bold text-aim-orange">&copy; 2026 AIM Journey</p>
        </div>
      </footer>
    `;
  }
}
customElements.define("app-footer", AppFooter);
