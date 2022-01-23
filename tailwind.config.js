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
      colors: {
        "yellow-custom": "#D9C355",
        "dark-blue": "#081826",
        "tropen-rood": "#ea4e55",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
