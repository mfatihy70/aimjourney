/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        "aim-blue": "#007bff",
        "aim-orange": "#ff8c00",
        "aim-green": "#28a745",
        "aim-purple": "#6f42c1",
        "aim-dark": "#2d3436",
        "aim-light": "#f9f9f9",
      },
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
