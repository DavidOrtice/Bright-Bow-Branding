/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				blue: {
					600: '#0047AB',
					700: '#003d94',
					800: '#00337d',
				},
				orange: {
					500: '#FF4500',
					600: '#e63e00',
					700: '#cc3700',
				},
				pink: {
					500: '#E11D48',
					600: '#c91a40',
					700: '#b11738',
				},
				yellow: {
					400: '#FFD700',
					500: '#ffc700',
					600: '#e6b800',
				},
			},
		},
	},
	plugins: [],
}
