/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			spacing: {
				540: '540px'
			},
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
