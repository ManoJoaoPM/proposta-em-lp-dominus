/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        md: '80px',
      },
      screens: {
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#0D0D0D",
          alt: "#141414",
          dark: "#0D0D0D",
          medium: "#1A1A1A",
          light: "#F5F5F5",
        },
        dominus: {
          DEFAULT: "#FF6600",
          alt: "#E8710A",
          light: "rgba(232, 113, 10, 0.05)"
        },
        primary: "#FFFFFF",
        gold: "#C9A84C",
        text: {
          white: "#FFFFFF",
          gray: "#9CA3AF",
          dark: "#0D0D0D"
        },
        accent: {
          brown: "#3D1A00"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900",
      }
    },
  },
  plugins: [],
};
