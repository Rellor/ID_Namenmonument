module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      h2: "2.625rem",
      p: "1.375rem",
    },
    fontFamily: {
      Koh: ["Koh Santepheap", "cursive"],
    },
    extend: {
      spacing: {
        128: "32rem",
      },
      padding: {
        "16/100": "16%",
      },
      colors: {
        "yellow-custom": "#D9C355",
        "dark-blue": "#081826",
        "tropen-rood": "#ea4e55",
        "project-donker": "#1B0A08",
        "project-secondary": "#FEFAF3",
        "project-button": "#BFAC4B",
        "project-button2": "#331F19",
        "project-button3": "#706C68",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
