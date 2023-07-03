/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      tablet1: "575px",
      tablet2: "770px",
      desktop0: "990px",
      desktop1: "1200px",
      desktop2: "1440px",
      lg: "1200px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        machine: "#65493A",
        factory: "#546E55",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
