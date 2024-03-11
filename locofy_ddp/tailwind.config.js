/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f5f5f5",
        border: "#000",
        "gray-100": "#d9d9d9",
        silver: "#bfbfbf",
        darkslategray: "#333",
        "bg-white": "#fff",
        gray: "#828282",
        gainsboro: {
          100: "#e5e5e5",
          200: "#dbdbdb",
          300: "#e6e6e6",
        },
        lightgray: "#ccc",
        dimgray: "#696969",
        "gray-300": "#6a6a6a",
        blueviolet: "#9747ff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      "3xl": "22px",
      lg: "18px",

      base: "16px",
      "5xl": "24px",
      "3xl": "22px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
