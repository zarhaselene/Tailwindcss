/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#0B1120",
      },
      fontFamily: {
        sans: [
          "Inter var",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      lineHeight: {
        18: "5rem",
      },
      boxShadow: {
        "inset-light": "inset 0 1px 0 0 #ffffff0d",
      },
    },
  },
  plugins: [],
};
