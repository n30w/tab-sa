/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "887px",
      },
      fontFamily: {
        asap: ["asap", "sans-serif"],
        atkinson: ['"Atkinson Hyperlegible"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@headlessui/tailwindcss")],
};
