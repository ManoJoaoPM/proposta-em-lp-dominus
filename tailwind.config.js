/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "#0D0D0D",
        "background-alt": "#141414",
        dominus: "#FF6600",
        gold: "#C9A84C",
        primary: "#FFFFFF",
        secondary: "#8A8A8A"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
};
