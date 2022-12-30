/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/tsx/**/*.tsx",
  ],
  theme: {
    screens: {
      mbm: "375px",
      mbl: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2560px",
    },
    extend: {
      colors: {
        ulGreen: "#BADD2A",
        ulDarkGreen: "#A6C523",
        ulGreenProfissional: "#ACDA22",
        ulLightGreen: "#CFFC11",
        ulBlue: "#142967",
        ulBlue2: "#112D69",
        ulBlue3: "#223F80",
        ulDarkBlue: "#183267",
        ulBlueSky: "#1E4681",
        ulBlueKashmir: "#4B5F88",
        ulGreyPlaceholder: "#E8F1F3",
        ulGreyTextPlaceholder: "#A3A4A4",
        ulGovBlue: "#3C58A0",
        ulGovGreen: "#13A338",
        ulFintechRed: "#E04D4E",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        montserratAlt: "'Montserrat Alternates', sans-serif",
      },
      animation: {
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
