/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
        hand: ['Allison', 'cursive'],
        ops: ['Black Ops One', 'system-ui']
      },
      fontSize: {
        base: '12px'
      }
    }
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'lofi', // first one will be the default theme
      'black'
    ]
  }
};

module.exports = config;
