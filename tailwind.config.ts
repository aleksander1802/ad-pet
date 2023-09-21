import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
			xl2: '1900px'
		},
		extend: {
			colors: {
				primary: '#000000',
				light: '#ffffff',
				secondary: '#393A47',
				accent: '#F13024',
			},
			backgroundImage: {
				wave: 'url("/wave.png")',
				back: 'url("/bg.jpg")',
				site: 'url("/site-bg.svg")',
				fishfeat: 'url("/fish_feat.png")',
			},
			animation: {
				'spin-slow': 'spin 6s linear infinite',
			},
			fontFamily: {
				mothem: [`Mothem`, 'sans-serif'],
				throwback: [`Throwback Regular`, 'sans-serif'],
				graphique: [`Graphique Pro Regular`, 'sans-serif'],
			},
		},
	},

	plugins: [require('tailwind-scrollbar')],
};
export default config;
