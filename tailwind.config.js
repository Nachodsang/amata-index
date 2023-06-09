/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet1: "575px",
      tablet2: "770px",
      desktop0: "990px",
      desktop1: "1200px",
      desktop2: "1440px",

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
  plugins: [require("daisyui")],
};
