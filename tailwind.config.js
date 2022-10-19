/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('/dist/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('/dist/img/sanFranciscoDesktop.jpg')",
        yosemite: "url('/dist/img/yosemite.jpg')",
        LA: "url('/dist/img/LA.jpg')",
        seattle: "url('/dist/img/seattle.jpg')",
        new_york: "url('/dist/img/new_york.jpg')",
        norway: "url('/dist/img/norway.jpg')",
        sydney: "url('/dist/img/sydney.jpg')",
        miami: "url('/dist/img/miami.jpg')",
        switzerland: "url('/dist/img/switzerland.jpg')",
        bali: "url('/dist/img/bali.jpg')",
        norway: "url('/dist/img/norway.jpg')",
        chicago: "url('/dist/img/chicago.jpg')",
        europe: "url('/dist/img/europe.jpg')",
        iceland: "url('/dist/img/iceland.jpg')",
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
