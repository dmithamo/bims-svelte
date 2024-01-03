/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Overpass', 'sans-serif'],
				hand: ['Allison', 'cursive'],
			},
		}
	},

	plugins: [require("daisyui")],
};

module.exports = config;
