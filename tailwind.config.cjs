/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutrall: "#9c9c9c",
        primary: "#121212",
        primaryII: "#F1E4BC",
        secondary: "#3A3A3A",
        buttonWhite: "#fdfdfd",
        buttonBlack: "#1b1b1b",
        main: "#d4af37",
        barBG: "#f4f4f4",
        neutralII: "#5b5b5b",
        buttonBrown: "#888888",
        footerBg: "#121212",
        footer: "#fdfdfd",
        welcome: "#f6efd7",
        navbar: "#888888",
        navone: "#040404",
        success: "#4CAF50",
        error: " #BD2B45",
      },

      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
