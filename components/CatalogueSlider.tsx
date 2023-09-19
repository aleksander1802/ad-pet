import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
			img: '/fishmania/blue-crab.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual ',
		},
		{
			name: 'Rock crab',
			img: '/fishmania/rock-crab.jpg',
			habitat: 'Northeast Atlantic',
			form: 'Frozen',
			price: 'Contractual ',
		},
		{
			name: 'King crab legs',
			img: '/fishmania/king-crab-legs.jpg',
			habitat: 'Northeast Atlantic',
			form: 'Frozen',
			price: 'Contractual ',
		},
		{
			name: 'Langoustine',
			img: '/fishmania/langoustine.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual ',
		},
		{
			name: 'Shrimp',
			img: '/fishmania/krevetki.jpg',
			form: 'Live, fresh, frozen',
			habitat: 'Mediterranean Sea',
			price: 'Contractual ',
		},
	],
	shellfish: [
		{
			name: 'warty venus',
			img: '/fishmania/warty-venus.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live',
			price: 'Contractual ',
		},
		{
			name: 'brown-venus-shell',
			img: '/fishmania/brown-venus-shell.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live',
			price: 'Contractual ',
		},
		{
			name: 'mussel',
			img: '/fishmania/mussel.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual ',
		},
	],
	cephalopods: [
		{
			name: 'octopus',
			img: '/fishmania/octopus.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual ',
		},
		{
			name: 'cuttlefish',
			img: '/fishmania/cuttlefish.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual ',
		},
		{
			name: 'squid',
			img: '/fishmania/squid.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual ',
		},
	],
	'sea water fish': [
		{
			name: 'seabass',
			img: '/fishmania/seabass.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual ',
		},
		{
			name: 'gilthead seabream',
			img: '/fishmania/gilthead-seabream.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live',
			price: 'Contractual ',
		},
		{
			name: 'common seabream',
			img: '/fishmania/common-seabream.jpg',
			habitat: 'Mediterranean Sea',
			form: 'Live, frozen',
			price: 'Contractual ',
		},
	],
	'fresh water fish': [
		{
			name: 'pike',
			img: '/fishmania/pike.jpg',
			habitat: 'Greece',
			form: 'Live',
			price: 'Contractual ',
		},
		{
			name: 'nile perch',
			img: '/fishmania/nile-perch.jpg',
			habitat: 'Greece',
			form: 'Live',
			price: 'Contractual ',
		},
		{
			name: 'bighead',
			img: '/fishmania/bighead.jpg',
			habitat: 'Greece',
			form: 'Live',
			price: 'Contractual ',
		},
	],
};

const CatalogueSlider = ({ category }: { category: TCategory }) => {
	const array = category && catalogueSlides[category];

	const width = 500;
	const height = 500;

	const initial = 1920;

	const smWidth = 300;
	const smMinWidth = 640;
	const lgMinWidth = 960;
	const [windowWidth, setWindowWidth] = useState<number>(initial);

	const middleImageWidth =
		windowWidth >= smMinWidth && windowWidth <= lgMinWidth;

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
									<Image
										src={item.img}
										alt={item.name}
										width={
											middleImageWidth ? smWidth : width
										}
										height={height}
										priority
										style={{
											maxWidth: 'auto',
											height,
											objectFit: 'fill',
										}}
									/>
									<div className="max-sm:hidden flex flex-col sm:w-[300px] xl:w-[350px] xl2:w-[500px]  xl:text-xl xl2:text-2xl sm:text-base justify-center font-lg gap-4 bg-primary/40 px-2 py-2">
										<div className="font-extrabold text-center">
											Product details
										</div>
										<div className="flex justify-between capitalize">
											<span className="text-accent sm:text-base xl2:text-xl">
												Name:{' '}
											</span>
											{item.name}
										</div>
										<div className="flex justify-between">
											<span className="text-accent sm:text-base xl2:text-xl">
												Habitat:{' '}
											</span>
											{item.habitat}
										</div>
										<div className="flex justify-between">
											<span className="text-accent sm:text-base xl2:text-xl">
												Form: {''}
											</span>
											{item.form}
										</div>
										<div className="flex justify-between">
											<span className="text-accent sm:text-base xl2:text-xl">
												Price: {''}
											</span>
											{item.price}
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
