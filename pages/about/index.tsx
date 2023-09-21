import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import CountUp from 'react-countup';
import { useTranslation } from 'next-i18next';

const About = () => {
	const { t } = useTranslation('about');

	return (
		<div className="h-full bg-fishfeat bg-cover bg-no-repeat">
			<div className="flex items-center h-full bg-primary/30 backdrop-blur-sm py-32 max-sm:py-24 text-center xl:text-left">
				<div className="container max-w-[1200px] px-0 mx-auto max-sm:h-full flex flex-col items-center justify-between max-sm:items-start xl:flex-row gap-x-6 max-sm:justify-center ">
					<div className="flex-1 flex flex-col justify-start max-sm:justify-center items-left max-sm:items-center text-center xl:text-left mb-4 max-sm:mb-0 z-20 max-sm:min-h-max">
						<motion.h2
							variants={fadeIn('right', 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="h2 mb-0"
						>
							{t('About')}{' '}
							<span className="text-accent">{t('us')}.</span>
						</motion.h2>
						<motion.p
							variants={fadeIn('right', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 max-sm:mb-0 xl:mb-12 px-2 xl:px-0 font-semibold"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Omnis, optio? Sunt neque velit natus deleniti
							odit voluptates qui debitis soluta. Quaerat facilis
							possimus fugit. Animi dolores architecto enim
							suscipit sed!
						</motion.p>
						<motion.div
							variants={fadeIn('right', 0.6)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
						>
							<div className="flex flex-1 flex-row xl:gap-x-6">
								<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10  after:absolute after:top-0 after:right-0">
									<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
										{' '}
										+
										<CountUp
											start={0}
											end={15}
											duration={5}
										/>
									</div>
									<div className="text-xs uppercase font-extrabold tracking-[1px] leading-[1.4] max-w-[100px]">
										{t('Years of experience')}
									</div>
								</div>
								<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10  after:absolute after:top-0 after:right-0">
									<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
										{' '}
										+
										<CountUp
											start={0}
											end={250}
											duration={5}
										/>
									</div>
									<div className="text-xs uppercase font-extrabold tracking-[1px] leading-[1.4] max-w-[100px]">
										{t('Satisfied clients')}
									</div>
								</div>
								<div className="relative flex-1 ">
									<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
										{' '}
										+
										<CountUp
											start={0}
											end={650}
											duration={5}
										/>
									</div>
									<div className="text-xs uppercase font-extrabold tracking-[1px] leading-[1.4] max-w-[100px]">
										{t('Completed deals')}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
					<motion.div
						variants={fadeIn('left', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="flex flex-col justify-start max-xl:items-center w-full xl:max-w-[48%] max-sm:min-h-[390px] z-20"
					>
						<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 textShadow">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Sit ullam consequuntur porro adipisci quae
							maxime aperiam dolorem? Laborum explicabo ea maxime
							consequuntur eveniet reiciendis soluta sed a. Culpa,
							numquam harum.
						</div>
						<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 max-xl:items-center items-start textShadow">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quam, natus ullam? Ipsam sunt repellat sequi
							hic laudantium consectetur debitis sint placeat ipsa
							magni repudiandae, quidem molestiae illo quaerat?
							Modi, consectetur?
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default About;
