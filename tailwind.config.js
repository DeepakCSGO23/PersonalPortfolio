/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'home-theme':'#393053',
        'side-theme':'#aaaaaa'
      },
      fontFamily: {
        'playfair': ["Playfair Display ",'serif'],
        'roboto': ["Roboto" ,'mono'],
        'vektra': ["sans-serif"],
        'industry-inc-3d': ["sans-serif"],
        'sketchnote-square': ["sans-serif"],
     
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
}

