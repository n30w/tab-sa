/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontSize: {
    //   base: "1rem",
    //   "2xl": "1.162rem",
    //   "3xl": "",
    // },
    extend: {
      colors: {
        teacher: {
          DEFAULT: "#003166",
        },
        student: {
          DEFAULT: "#2B6789",
        },
        south: {
          DEFAULT: "#FFAB2F",
        },
        folderPaper: {
          DEFAULT: "#FFFFFC",
        },
        halt: {
          DEFAULT: "#FF001E",
        },
        port: {
          DEFAULT: "#454939",
        },
        tabTheme: {
          100: "#2B6798",
          200: "#003166",
        },
        white: "#FFFFFC",
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
