import { RxReader, RxArrowTopRight } from 'react-icons/rx';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

const serviceData = [
	{
		icon: <FaJs />,
		title: 'JavaScript',
		link: 'https://app.rs.school/certificate/i19pd83w',
		description: 'The Rolling Scopes School JavaScript/Front-End 2022 Q3.',
	},
	{
		icon: <FaReact />,
		title: 'React',
		link: 'https://app.rs.school/certificate/v9av4g0r',
		description: 'The Rolling Scopes School	REACT 2023 Q1.',
	},
	{
		icon: <FaNodeJs />,
		title: 'NodeJS',
		link: 'https://app.rs.school/certificate/ga6aezan',
		description: 'The Rolling Scopes School NODEJS 2023 Q2.',
	},
	{
		icon: <RxReader />,
		title: 'English B2',
		link: 'https://efset.org/cert/JMcBW1',
		description: 'Level of English is 54/100 on the EF SET score scale.',
	},
];

const SertificateSlider = () => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			}}
			freeMode={true}
			direction="horizontal"
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Pagination]}
			className="h-[220px] sm:h-[340px] mx-auto z-20"
		>
			{serviceData.map((item, index) => {
				return (
					<SwiperSlide key={index}>
						<a
							href={item.link}
							target="_blank"
							className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
						>
							<div className="text-accent text-lg mb-2">
								{item.icon}
							</div>

							<div className="mb-2">
								<div className="mb-2 text-lg">{item.title}</div>
								<p className="max-w-[350px] md:min-h-[120px] sm:max-h-[120px] leading-normal">
									{item.description}
								</p>
							</div>
							<div className="text-3xl max-md:hidden">
								<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
							</div>
						</a>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default SertificateSlider;
