/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('./src/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('./src/img/sanFranciscoDesktop.jpg')",
        yosemite: "url('./src/img/yosemite.jpg')",
        LA: "url('./src/img/LA.jpg')",
        seattle: "url('./src/img/seattle.jpg')",
        new_york: "url('./src/img/new_york.jpg')",
        norway: "url('./src/img/norway.jpg')",
        sydney: "url('./src/img/sydney.jpg')",
        miami: "url('./src/img/miami.jpg')",
        switzerland: "url('./src/img/switzerland.jpg')",
        bali: "url('./src/img/bali.jpg')",
        norway: "url('./src/img/norway.jpg')",
        chicago: "url('./src/img/chicago.jpg')",
        europe: "url('./src/img/europe.jpg')",
        iceland: "url('./src/img/iceland.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      }),
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
