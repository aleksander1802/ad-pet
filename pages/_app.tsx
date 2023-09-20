import { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';
import Transition from '@/components/Transition';
import '/config/i18n/i18n';

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

export default MyApp;
