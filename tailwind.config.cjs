/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'blueColor':'#ee6134',
        'greyIsh':'#f1f4f8',
        'cardShadow':'#f7f8f9',
        'textColor':'#252b36'
      }
    },
  },
  plugins: [],
}
