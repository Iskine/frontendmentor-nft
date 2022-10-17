/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      bgblue: 'hsl(217, 54%, 11%)',
      cardblue: 'hsl(216, 50%, 16%)',
      lineblue: 'hsl(215, 32%, 27%)',
      white: 'white',
      cyan: 'hsl(178, 100%, 50%)',
      softblue: 'hsl(215, 51%, 70%)',
      },
      fontFamily: {
        'outfit': ['Outfit','sans-serif'],
      },
    },
  },
  plugins: [],
}
