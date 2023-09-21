import { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';
import Transition from '@/components/Transition';
// import { appWithTranslation } from 'next-i18next';

import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../ni18n.config';

function MyApp(props: AppProps) {
	const { Component, pageProps } = props;
	const router = useRouter();

	return (
		<Layout>
			<AnimatePresence mode="wait">
				<motion.div
					key={router.route}
					className="h-full"
				>
					<Transition />
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
}

export default appWithI18Next(MyApp, ni18nConfig);
