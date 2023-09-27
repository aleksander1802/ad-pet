import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

export type TCategory =
	| 'crustaceans'
	| 'shellfish'
	| 'cephalopods'
	| 'sea water fish'
	| 'fresh water fish'
	| null;

const catalogueSlides = {
	crustaceans: [
		{
			name: 'Blue crab',
			img: '/blue-crab.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual',
		},
		{
			name: 'Rock crab',
			img: '/rock-crab.jpg',
			habitat: 'Northeast Atlantic',
			form: 'Frozen',
			price: 'Contractual',
		},
		{
			name: 'King crab legs',
			img: '/king-crab-legs.jpg',
			habitat: 'Northeast Atlantic',
			form: 'Frozen',
			price: 'Contractual',
		},
		{
			name: 'Langoustine',
			img: '/langoustine.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual',
		},
		{
			name: 'Shrimp',
			img: '/krevetki.jpg',
			form: 'Live, fresh, frozen',
			habitat: 'Mediterranean Sea',
			price: 'Contractual',
		},
	],
	shellfish: [
		{
			name: 'warty venus',
			img: '/warty-venus.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live',
			price: 'Contractual',
		},
		{
			name: 'brown venus shell',
			img: '/brown-venus-shell.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live',
			price: 'Contractual',
		},
		{
			name: 'mussel',
			img: '/mussel.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual',
		},
	],
	cephalopods: [
		{
			name: 'octopus',
			img: '/octopus.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual',
		},
		{
			name: 'cuttlefish',
			img: '/cuttlefish.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual',
		},
		{
			name: 'squid',
			img: '/squid.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual',
		},
	],
	'sea water fish': [
		{
			name: 'seabass',
			img: '/seabass.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual',
		},
		{
			name: 'gilthead seabream',
			img: '/gilthead-seabream.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live',
			price: 'Contractual',
		},
		{
			name: 'common seabream',
			img: '/common-seabream.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual',
		},
	],
	'fresh water fish': [
		{
			name: 'pike',
			img: '/pike.jpg',
			habitat: 'Greece',
			form: 'Live',
			price: 'Contractual',
		},
		{
			name: 'nile perch',
			img: '/nile-perch.jpg',
			habitat: 'Greece',
			form: 'Live',
			price: 'Contractual',
		},
		{
			name: 'bighead',
			img: '/bighead.jpg',
			habitat: 'Greece',
			form: 'Live',
			price: 'Contractual',
		},
	],
};

const CatalogueSlider = ({ category }: { category: TCategory }) => {
	const array = category && catalogueSlides[category];
	const { t } = useTranslation('products');
	const width = 500;
	const height = 500;

	return (
		<Swiper
			spaceBetween={10}
			navigation
			pagination={{
				clickable: true,
			}}
			modules={[Navigation]}
			className="h-[500px]"
		>
			{array &&
				array.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="w-full h-full flex justify-center items-center font-semibold">
								<div className="flex justify-center">
									<div
										className={`max-sm:w-[400px] w-[500px] h-[500px]`}
									>
										<Image
											src={item.img}
											alt={item.name}
											width={width}
											height={height}
											priority
											placeholder="blur"
											blurDataURL={item.img}
											className="w-full h-[500px] "
											style={{
												width: '100%',
												height,
												objectFit: 'fill',
											}}
										/>
									</div>

									<div className="max-sm:hidden flex flex-col sm:w-[300px] xl:w-[350px] xl2:w-[500px]  xl:text-xl xl2:text-2xl sm:text-base justify-center font-lg gap-4 bg-primary/40 px-2 py-2">
										<div className="font-extrabold text-center">
											{t('Product details')}
										</div>
										<div className="flex justify-between capitalize items-center">
											<span className="text-accent sm:text-base xl2:text-xl">
												{t('Name')}:{' '}
											</span>
											<span className="text-right">
												{t(item.name)}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-accent sm:text-base xl2:text-xl">
												{t('Origin')}:{' '}
											</span>
											<span className="text-right">
												{t(item.habitat)}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-accent sm:text-base xl2:text-xl">
												{t('Form')}: {''}
											</span>
											<span className="text-right">
												{t(item.form)}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-accent sm:text-base xl2:text-xl">
												{t('Price')}: {''}
											</span>
											<span className="text-right">
												{t(item.price)}
											</span>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
		</Swiper>
	);
};

export default CatalogueSlider;
