// /** @type {import('next').NextConfig} */

// const nextConfig = {
// 	reactStrictMode: true,
// 	swcMinify: true,
// 	images: {
// 		formats: ['image/avif', 'image/webp'],
// 	},
// 	i18n: {
// 		defaultLocale: 'en',
// 		locales: ['el', 'ru', 'en'],
// 	},

// 	compress: true,
// };

// module.exports = nextConfig;

// @ts-check

/** @type {import('next').NextConfig} **/
const nextConfig = {
	/**
	 * Enable static exports for the App Router.
	 *
	 * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
	 */
	output: 'export',

	/**
	 * Set base path. This is usually the slug of your repository.
	 *
	 * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
	 */
	basePath: '/fishmania',

	/**
	 * Disable server-based image optimization. Next.js does not support
	 * dynamic features with static exports.
	 *
	 * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
	 */
	images: {
		unoptimized: true,
	},
	i18n: {
		defaultLocale: 'el',
		locales: ['el', 'ru', 'en'],
	},
};

module.exports = nextConfig;
