/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oldlace: "#fcf4e7",
        black: "#000",
        white: "#fff",
        silver: {
          "100": "#d0b7ae",
          "200": "#a8c5c5",
        },
        mistyrose: {
          "100": "#fee5dd",
          "200": "#efdad3",
        },
        lightgray: "#e1c9c1",
        lavender: {
          "100": "#deeafc",
          "200": "#e0d4e2",
          "300": "#c9d9f0",
        },
        beige: "#cce6cd",
        thistle: {
          "100": "#cdc4e8",
          "200": "#cca8d2",
        },
        powderblue: "#cbe5e5",
        lightslategray: "#a28ba6",
        tomato: "#ea5130",
        lightsteelblue: "#abbad0",
        darkseagreen: {
          "100": "#91c093",
          "200": "#779678",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "81xl": "100px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      xl: "20px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
