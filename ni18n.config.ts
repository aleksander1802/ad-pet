import { Ni18nOptions } from 'ni18n';
import HttpBackend from 'i18next-http-backend';

export const ni18nConfig: Ni18nOptions = {
	supportedLngs: ['el', 'ru', 'en'],
	ns: ['common', 'about', 'contacts', 'delivery', 'products', 'testimonials'],
	backend: {
		loadPath: 'https://aleksander1802.github.io/fishmania/{{lng}}/{{ns}}',
	},
	use: [HttpBackend],
};
