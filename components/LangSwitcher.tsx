import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

const LangSwitcher = memo(() => {
	const { i18n } = useTranslation();

	const defaultLang = 'en';
	const [currentLanguage, setCurrentLanguage] = useState(defaultLang);

	const languages = ['el', 'ru', 'en'];
	const width = 100;
	const height = 100;

	const changeLanguage = useCallback(
		(lang: string) => {
			i18n.changeLanguage(lang);
			setCurrentLanguage(lang);
		},
		[i18n],
	);

	useEffect(() => {
		changeLanguage(defaultLang);
	}, [changeLanguage]);

	const toggleLanguage = () => {
		const currentIndex = languages.indexOf(currentLanguage);
		const nextIndex = (currentIndex + 1) % languages.length;
		const newLanguage = languages[nextIndex];
		changeLanguage(newLanguage);
	};

	return (
		<div className="h-10 w-10">
			<button onClick={toggleLanguage}>
				{currentLanguage === 'el' && (
					<Image
						src={'/fishmania/greece.png'}
						alt="el"
						width={width}
						height={height}
					/>
				)}
				{currentLanguage === 'ru' && (
					<Image
						src={'/fishmania/russia.png'}
						alt="ru"
						width={width}
						height={height}
					/>
				)}
				{currentLanguage === 'en' && (
					<Image
						src={'/fishmania/united-kingdom.png'}
						alt="en"
						width={width}
						height={height}
					/>
				)}
			</button>
		</div>
	);
});

LangSwitcher.displayName = 'LangSwitcher';

export default LangSwitcher;
