/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Lexend_Deca": ['"Lexend Deca"', ...defaultTheme.fontFamily.serif],
        "Big_Shoulders_Display": ['"Big Shoulders Display"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "orange" : "#e38826",
        "cyan" : "#006970",
        "darkCyan" : "#004241",
        "lightGray" : "#f2f2f2",
      }
    },
  },
  plugins: [],
}