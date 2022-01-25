module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        "project-secondary": "#F2EFE7",
        "project-button": "#978C58",
        "project-button2": "#331F19",
        "project-button3": "#736B56",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
