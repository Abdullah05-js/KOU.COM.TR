import { nextui } from "@nextui-org/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|badge|button|card|chip|divider|image|input|link|modal|popover|scroll-shadow|skeleton|slider|spinner|user|ripple).js"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#86efac",
        secondary: "#2dd4bf",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  important: true,
};