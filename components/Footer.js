class AppFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="legal">
          <p><strong>Privacy Policy:</strong> We respect your privacy. Data is processed securely for communication and project activities only. Never shared without consent.</p>
          <p><strong>GDPR Compliance:</strong> In accordance with (EU) 2016/679. You have the right to access, correct, or delete your data.</p>
          <p><strong>Imprint:</strong> AIM Journey – AI and the Migration Journey. Coord: Phönix in Niederösterreich. Partner: Fundacja Mevlana.</p>
        </div>
        <div class="disclaimer">
          Funded by the European Union. Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union or the National Agency.
        </div>
        <p class="copy">&copy; 2026 AIM Journey</p>
      </footer>
    `;
  }
}
customElements.define("app-footer", AppFooter);
