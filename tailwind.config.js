/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tabTheme: {
          100: "#2B6798",
          200: "#003166",
        },
      },
      screens: {
        md: "887px",
      },
      fontFamily: {
        asap: ["asap", "sans-serif"],
        atkinson: ['"Atkinson Hyperlegible"', "sans-serif"],
        overpass: ["overpass", "sans-serif"],
        plex: ["Plex", "sans-serif", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("daisyui"),
    require("@headlessui/tailwindcss"),
  ],
};
