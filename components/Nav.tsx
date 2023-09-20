import {
	HiHome,
	HiUser,
	HiRectangleGroup,
	HiChatBubbleBottomCenterText,
	HiEnvelope,
} from 'react-icons/hi2';
import { CiDeliveryTruck } from 'react-icons/ci';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

export const navData = [
	{ name: 'Home', path: '/', icon: <HiHome /> },
	{ name: 'About us', path: '/about', icon: <HiUser /> },
	{ name: 'Products', path: '/catalogue', icon: <HiRectangleGroup /> },
	{
		name: 'Delivery and payment',
		path: '/delivery',
		icon: <CiDeliveryTruck />,
	},
	{
		name: 'Testimonials',
		path: '/testimonials',
		icon: <HiChatBubbleBottomCenterText />,
	},
	{
		name: 'Contacts',
		path: '/contact',
		icon: <HiEnvelope />,
	},
];

const Nav = () => {
	const { t } = useTranslation();
	const router = useRouter();
	const pathname = router.pathname;

	const initial = 1920;
	const minWidth = 1200;
	const [windowWidth, setWindowWidth] = useState<number>(initial);

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.screen.width;
			setWindowWidth(screenWidth);
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<nav className="flex flex-row justify-between gap-y-4 fixed h-max top-0 left-0 max-xl:bottom-0 mt-auto z-30 w-full">
			<div className="flex w-full xl:w-screen items-center justify-between px-4 md:px-40 h-[70px] xl:h-max py-7 bg-primary/70 backdrop-blur-sm text-3xl xl:text-xl">
				{navData.map((link, index) => {
					return (
						<Link
							className={`${
								link.path === pathname && 'text-accent'
							} relative flex items-center group hover:text-accent transition-all duration-300 font-semibold`}
							href={link.path}
							passHref
							key={index}
							locale={false}
						>
							{windowWidth > minWidth ? t(link.name) : link.icon}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Nav;
