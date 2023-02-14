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
                buttonPrimaryColor: "0B0B29",
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
