/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lgmy: "992px",
        // => @media (min-width: 992px) { ... }
        myTab: "1100px",
        // "2xl45": { max: "1535px" },
      },
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#262626",
      },
    },
  },

  plugins: [],
};
