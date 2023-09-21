/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	i18n: {
		defaultLocale: 'el',
		locales: ['el', 'ru', 'en'],
		localeDetection: false,
	},
	compress: true,
};

module.exports = nextConfig;
