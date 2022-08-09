/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Inter: ['Inter', 'sans-serif']
			}
		},
		colors: {
			white: '#f2f2f2',
			black: '#212121'
		}
	},
	plugins: []
};
