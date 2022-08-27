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
        secondary: "#3A3A3A",
        buttonWhite: "#fdfdfd",
        buttonBlack: "#1b1b1b",
      },

      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
