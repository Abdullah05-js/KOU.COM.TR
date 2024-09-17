import { nextui } from "@nextui-org/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|badge|button|card|chip|divider|image|input|link|modal|popover|scroll-shadow|skeleton|spinner|user|ripple).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
  important: true,
};