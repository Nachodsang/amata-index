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
  },
  plugins: [require("daisyui")],
};
