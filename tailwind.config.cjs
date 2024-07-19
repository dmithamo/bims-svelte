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
        base: '13px'
      }
    }
  },

  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  daisyui: {
    themes: ['lofi']
  }
};

module.exports = config;
