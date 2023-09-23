import CatalogueSlider, { TCategory } from '@/components/CatalogueSlider';
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { loadTranslations } from 'ni18n';
import { AiFillCloseSquare } from 'react-icons/ai';
import { useTranslation } from 'next-i18next';
import { ni18nConfig } from '../../ni18n.config';
import { GetStaticProps } from 'next';

interface ICatalogueList {
	name: TCategory;
	img: string;
}

const Catalogue = () => {
	const [category, setCategory] = useState<TCategory>(null);
	const [visibility, setVisibility] = useState(false);
	const { t } = useTranslation('products');

	const width = 300;
	const height = 500;

	const catalogueList: ICatalogueList[] = [
		{
			name: 'crustaceans',
			img: '/crustaceans.jpg',
		},
		{
			name: 'shellfish',
			img: '/shellfish.jpg',
		},
		{
			name: 'cephalopods',
			img: '/cephalopods.jpg',
		},
		{
			name: 'sea water fish',
			img: '/seafish.jpg',
		},
		{
			name: 'fresh water fish',
			img: '/freshfish.jpg',
		},
	];

	const handleCategoryClick = (item: TCategory) => {
		setVisibility(true);
		setCategory(item);
	};

	const onCloseSlider = () => {
		setVisibility(false);
		setCategory(null);
	};

	const data = catalogueList.map((item) => {
		return (
			<li
				key={item.name}
				className="flex cursor-pointer text-[0px] hover:text-[38px]"
				onClick={() => handleCategoryClick(item.name)}
			>
				<Image
					src={item.img}
					alt={item.name || ''}
					width={width}
					height={height}
					quality={100}
					title={item.name || ''}
					priority
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkyAYAAHEAbR4vrCcAAAAASUVORK5CYII="
					style={{
						maxWidth: '100%',
						height: 'auto',
						objectFit: 'cover',
					}}
				/>
				<div
					className={`absolute max-w-[${width}px] max-sm:hidden top-2/4 -translate-y-2/4 bg-primary/70 px-2 capitalize`}
				>
					{t(item.name as string)}
				</div>
			</li>
		);
	});

	return (
		<div className="h-full bg-fishfeat bg-cover bg-no-repeat transition-all">
			<div className="flex flex-col max-sm:items-center h-full cursor-default bg-primary/30 backdrop-blur-sm py-28 max-sm:py-24 text-center">
				<motion.h2
					variants={fadeIn('right', 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="h2 text-center"
				>
					{t('Our')}{' '}
					<span className="text-accent">{t('products')}.</span>
				</motion.h2>
				{
					<motion.ul
						variants={fadeIn('left', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="list-none h-full w-full flex flex-row justify-center px-1 gap-1 xl:gap-4 xl:w-3/4 xl2:w-full xl:mx-auto "
					>
						{!visibility && data}

						{visibility && (
							<>
								<motion.div
									variants={fadeIn('left', 0)}
									initial="hidden"
									animate="show"
									exit="hidden"
									className="container max-w-[1200px] h-full flex justify-center relative p-0"
								>
									<CatalogueSlider category={category} />
									<div
										className="absolute top-0 right-0 text-4xl cursor-pointer z-20"
										onClick={onCloseSlider}
									>
										<AiFillCloseSquare className="hover:text-accent transition-all duration-300 max-sm:text-accent max-sm:hover:text-light" />
									</div>
								</motion.div>
							</>
						)}
					</motion.ul>
				}
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (props) => {
	return {
		props: {
			...(await loadTranslations(ni18nConfig, props.locale, [
				'common',
				'products',
			])),
		},
	};
};

export default Catalogue;
