import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsEnvelope } from 'react-icons/bs';
import { FaViber, FaWhatsapp } from 'react-icons/fa';
import { fadeIn } from '@/variants';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const { t } = useTranslation('contacts');
	const [copiedEmail, setCopiedEmail] = useState(false);
	const [copiedViber, setCopiedViber] = useState(false);
	const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

	const viberNumber = '+8-888-888-88-88';
	const whatsappNumber = '+9-999-999-99-99';
	const mail = 'mail@mail.com';

	const copyEmailToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedEmail(true);
			setTimeout(() => {
				setCopiedEmail(false);
			}, 2000);
		});
	};

	const copyViberPhoneToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedViber(true);
			setTimeout(() => {
				setCopiedViber(false);
			}, 2000);
		});
	};

	const copyWhatsAppPhoneToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedWhatsApp(true);
			setTimeout(() => {
				setCopiedWhatsApp(false);
			}, 2000);
		});
	};

	const copyText = (
		<motion.div
			variants={fadeIn('right', 0.1)}
			initial="hidden"
			animate="show"
			exit="hidden"
			className="absolute top-3/4 left-0 w-full h-full flex items-center justify-center"
		>
			<div className="text-accent p-2">{t('Copied')}!</div>
		</motion.div>
	);

	return (
		<div className="h-full bg-fishfeat bg-cover bg-no-repeat transition-all">
			<div className="min-h-screen bg-primary/30 flex items-center justify-center cursor-default backdrop-blur-sm py-28 max-sm:py-24 text-center">
				<div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative">
					<motion.div
						variants={fadeIn('up', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-center mb-12"
					>
						<h2 className="text-5xl sm:text-5xl md:text-6xl font-bold leading-tight text-center text-white">
							{t('Contacts')}
							<span className="text-accent">.</span>
						</h2>
					</motion.div>
					<div className="container max-w-max p-0 mx-auto flex flex-col gap-6 text-3xl items-left">
						<motion.div
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="flex items-center max-w-max gap-2 relative cursor-pointer"
							onClick={() =>
								copyViberPhoneToClipboard(viberNumber)
							}
							title="Click to copy"
						>
							<FaViber
								className="text-purple-600 text-2xl sm:text-3xl"
								title={'Viber'}
							/>
							<p className="text-white">
								+8-
								<span className="text-purple-600 font-bold">
									888
								</span>
								-888-88-88
							</p>
							{copiedViber && copyText}
						</motion.div>
						<motion.div
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="flex items-center gap-2 relative cursor-pointer"
							onClick={() =>
								copyWhatsAppPhoneToClipboard(whatsappNumber)
							}
							title="Click to copy"
						>
							<FaWhatsapp
								className="text-green-400 text-2xl sm:text-3xl"
								title={'WhatsApp'}
							/>
							<p className="text-white">
								+9-
								<span className="text-green-400 font-bold">
									999
								</span>
								-999-99-99
							</p>
							{copiedWhatsApp && copyText}
						</motion.div>
						<motion.div
							variants={fadeIn('up', 0.3)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="flex items-center gap-2 relative  cursor-pointer"
							onClick={() => copyEmailToClipboard(mail)}
							title="Click to copy"
						>
							<BsEnvelope className="text-accent text-2xl sm:text-3xl" />
							<p className="text-white">
								mail@
								<span className="text-accent font-bold">
									mail
								</span>
								.com
							</p>
							{copiedEmail && copyText}
						</motion.div>
						<motion.div
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="flex flex-col text-left cursor-default font-throwback text-base uppercase  "
						>
							<p className="text-white">
								<span className="text-accent font-bold ">
									{t('BASE')}:
								</span>{' '}
								N. MICHANIONA, GREECE
							</p>
							<p className="text-white ">
								<span className="text-accent font-bold ">
									{t('TAX REGISTRATION NUMBER')}:
								</span>{' '}
								100000000
							</p>
							<p className="text-white">
								<span className="text-accent font-bold ">
									{t('TAX OFFICE')}:
								</span>{' '}
								lorem ipsum
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
