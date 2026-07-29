import { loadQuoteData } from "../js/data.js";

export async function renderQuotes(container) {
  container.innerHTML = '<div class="loader">Loading Quotes...</div>';

  const quoteData = await loadQuoteData();
  let html = '<div class="quotes-grid">';

  Object.keys(quoteData)
    .sort((a, b) => Number(a) - Number(b))
    .forEach((dayKey) => {
      const day = Number(dayKey);
      html += `<div class="day-header"><h3>Day ${day}</h3></div>`;

      quoteData[dayKey].forEach((quote) => {
        html += `
          <div class="quote-card animate-on-scroll">
            <div class="quote-day">Day ${day}</div>
            <div class="quote-text">"${quote.text.trim()}"</div>
            <div class="quote-author">- AIM_Journey_${quote.participant}</div>
          </div>
        `;
      });
    });

  html += "</div>";
  container.innerHTML = html;
}
