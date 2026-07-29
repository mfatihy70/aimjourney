export async function loadQuoteData() {
  // Try to load the external JS file if it exists, otherwise return empty
  try {
    const response = await fetch("content/quotes/quotes-data.js");
    if (!response.ok) throw new Error("No data file");
    const text = await response.text();
    // Extract the object from "window.quoteData = {...}"
    const match = text.match(/window\.quoteData\s*=\s*({[\s\S]*});/);
    if (match && match[1]) {
      return new Function("return " + match[1])();
    }
    return {};
  } catch (e) {
    console.warn("Using fallback quote generation (no data file found)");
    return generateFallbackQuotes();
  }
}

function generateFallbackQuotes() {
  // Fallback if quotes-data.js is missing
  const data = {};
  for (let d = 1; d <= 5; d++) {
    data[d] = [];
    for (let p = 1; p <= 5; p++) {
      data[d].push({ participant: p, text: "Sample quote for day " + d });
    }
  }
  return data;
}
