/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
        hand: ['Allison', 'cursive'],
        ops: ['Black Ops One', 'system-ui']
      }
    }
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'emerald', // first one will be the default theme
      // "light",
      'dim'
    ]
  }
};

module.exports = config;
