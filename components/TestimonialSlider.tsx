import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';

const testimonialData = [
	{
		image: '/t-avt-1.jpg',
		name: 'Barsik Smith',
		position: 'Pet',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
	},
	{
		image: '/t-avt-2.jpg',
		name: 'Satoru Gojo',
		position: 'Master',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
	},
	{
		image: '/t-avt-3.jpg',
		name: 'Check Balance',
		position: 'Customer',
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
	},
];

const TestimonialSlider = () => {
	const width = 100;

	return (
		<Swiper
			navigation
			modules={[Navigation]}
			className="max-sm:min-h-[500px] h-[400px] "
		>
			{testimonialData.map((item, index) => {
				return (
					<SwiperSlide key={index}>
						<div className="flex flex-col items-center md:flex-row gap-x-8 max-sm:gap-y-4 h-full px-16 ">
							<div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative  mx-auto xl:mx-0">
								<div className="flex flex-col justify-center text-center">
									<div className="flex h-[100px] w-[100px] mb-2 mx-auto rounded-full overflow-hidden">
										<Image
											src={item.image}
											alt="avatar"
											width={width || 100}
											height={100}
											priority
											style={{ width, height: 'auto' }}
											className="object-cover"
										/>
									</div>

									<div className="text-lg">{item.name}</div>

									<div className="text-[12px] uppercase font-extralight tracking-widest">
										{item.position}
									</div>
								</div>
							</div>

							<div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 max-sm:justify-start max-h-max">
								<div className="mb-4">
									<FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
								</div>
								<div className="xl:text-lg text-center md:text-left">
									{item.message}
								</div>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default TestimonialSlider;
