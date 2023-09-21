import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ProductsBtn from '@/components/ProductsBtn';

const Home = () => {
	const height = 300;
	const width = 280;
	const tradeWidth = 550;

	const initial = 1920;
	const minWidth = 1200;
	const [windowWidth, setWindowWidth] = useState<number>(initial);

	useEffect(() => {
		const handleResize = () => {
			const screenHeight = window.screen.width;
			setWindowWidth(screenHeight);
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className="h-full bg-back bg-no-repeat xl:bg-cover">
			<div className="w-full h-full bg-wave bg-no-repeat bg-contain bg-bottom backdrop-blur-sm bg-primary/20">
				<div className="flex cursor-default flex-col justify-center items-center xl:pt-10 text-center h-full container mx-auto">
					<motion.div
						variants={fadeIn('down', 0.1)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="mb-1"
					>
						<Image
							src="/fishmania/fish2.png"
							width={width || 300}
							height={height || 300}
							alt="logo"
							priority
							style={{
								width: windowWidth < minWidth ? 200 : width,
								height: 'auto',
							}}
						/>
					</motion.div>
					<motion.h1
						variants={fadeIn('down', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h1 z-20 max-sm:mb-1 max-sm:mt-5 max-sm:text-[50px] textShadow"
					>
						<span className="max-sm:text-[80px] text-8xl">
							FISHMANIA
						</span>
						<br />{' '}
						<div className="flex flex-col">
							<span className="font-mothem">
								POZIDIS PORFYRIOS
							</span>
							<Image
								src="/fishmania/trade.png"
								width={tradeWidth || 300}
								height={height || 300}
								alt="logo"
								priority
								style={{
									width:
										windowWidth < minWidth
											? 350
											: tradeWidth,
									height: 'auto',
								}}
								className="ml-20 max-sm:ml-4"
							/>
						</div>
					</motion.h1>

					<motion.p
						variants={fadeIn('down', 0.3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 z-20 uppercase font-graphique sm:text-[35px] xl:text-[38px] max-sm:text-[26px]"
					>
						import - export - trading & processing
					</motion.p>
					<motion.p
						variants={fadeIn('down', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 z-20 uppercase font-graphique text-[38px] max-sm:text-[28px]"
					>
						fresh, frozen, smoked & live fish
					</motion.p>

					<div className="flex justify-center xl:hidden relative z-20">
						<ProductsBtn />
					</div>
					<motion.div
						variants={fadeIn('down', 0.5)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="hidden xl:flex"
					>
						<ProductsBtn />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Home;
