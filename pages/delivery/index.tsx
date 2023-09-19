import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
const { t } = useTranslation('delivery');
	return (
		<div className="h-full bg-fishfeat bg-cover bg-no-repeat transition-all">
			<div className="flex flex-col items-center h-full justify-center cursor-default bg-primary/30 backdrop-blur-sm py-28 max-sm:py-24 text-center">
				<div className="container  max-w-[1200px] px-0  flex flex-col items-start max-sm:items-start xl:flex-row gap-x-6 max-sm:justify-center ">
					<div className="flex-1  flex flex-col justify-start max-sm:justify-center items-left max-sm:items-center text-center xl:text-left mb-4 max-sm:mb-0 z-20 max-sm:min-h-max">
						<motion.h2
							variants={fadeIn('left', 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="h2 mb-0"
						>
							<span className="text-accent font-bold">{t("Delivery")}.</span>
						</motion.h2>
						<motion.p
							variants={fadeIn('right', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 max-sm:mb-0 xl:mb-12 px-2 xl:px-0 font-semibold"
						>
							{t("For all questions related to time coordination and the shipping cost you can refer to our to the manager by calling +7 777 777 77 77 , from 09:00 to 20:00 on weekdays, and from 09:00 to 17:00 on weekends. Also you can send an email to mail@mail.com")}
						</motion.p>
					</div>
					<div className="flex-1 flex flex-col justify-start max-sm:justify-center items-left max-sm:items-center text-center xl:text-left mb-4 max-sm:mb-0 z-20 max-sm:min-h-max">
						<motion.h2
							variants={fadeIn('left', 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="h2 mb-0"
						>
							<span className="text-accent font-bold">{t("Payment")}.</span>
						</motion.h2>
						<motion.p
							variants={fadeIn('right', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 max-sm:mb-0 xl:mb-12 px-2 xl:px-0 font-semibold"
						>
							{t("Payment in cash upon receipt or non-cash payment. To make a non-cash payment, please warn the manager. If you changed your mind, you can cancel the purchase at any time moment. Nothing wrong")}
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
