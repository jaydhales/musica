/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#EFEEE0",
        dark: "#1d2123",
        secondary: "#facd66",
        primary: "#A4C7C6",
        "dark-alt": "#1A1E1F",
        alt: "#a4c7c6",
        hero: "#609EAF",
      },
      borderRadius: {
        lg: "10px",
        xl: "14px",
        "2xl": "20px",
        "3xl": "25px",
        "4xl": "40px",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      dropShadow: {
        "custom": "0px -25px 100px rgb(16, 16, 16)",
      },
    },
  },
  plugins: [],
};
