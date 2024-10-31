/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'apotek': ['Apotek-Comp', 'sans-serif'], // Define 'apotek' como uma nova família de fontes
      },
      fontWeight: {
        'light': 300, // Define o peso leve (300)
      },
    },
  },
  plugins: [],
}