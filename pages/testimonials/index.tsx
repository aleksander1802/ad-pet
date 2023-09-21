import TestimonialSlider from '@/components/TestimonialSlider';
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const Testimonials = () => {
	const { t } = useTranslation('testimonials');
	return (
		<div className="h-full bg-fishfeat bg-cover bg-no-repeat">
			<div className="max-sm:flex max-sm:items-center h-full bg-primary/50 backdrop-blur-sm py-40 max-sm:py-24 text-center ">
				<div className="container max-w-[1200px] mx-auto h-full flex flex-col justify-center">
					<motion.h2
						variants={fadeIn('up', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2 mb-8 xl:mb-0"
					>
						{t('What clients')}{' '}
						<span className="text-accent">{t("say")}.</span>
					</motion.h2>
					<motion.div
						variants={fadeIn('up', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						<TestimonialSlider />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

// export const getServerSideProps = async ({ locale }: { locale: string }) => ({
// 	props: {
// 		...(await serverSideTranslations(locale, ['common', 'testimonials'])),
// 	},
// });

export default Testimonials;
