import { RxArrowTopRight } from 'react-icons/rx';
import { BsApple } from 'react-icons/bs';
import { FaImdb } from 'react-icons/fa';
import { BiLogoGraphql } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

const serviceData = [
	{
		icon: <BsApple />,
		title: 'Online store',
		description:
			'Учебный проект онлайн-магазина продукции Apple. Написан в рамках курса по Javascript/Front-end.',
		link: 'https://kornienkokostia.github.io/online-store/#main',
		team: 2,
	},
	{
		icon: <FaImdb />,
		title: 'IMDb',
		description:
			'Клон сайта с крупнейшей в мире базой данных о кинематографе. Написан в рамках курса по React.',
		link: 'https://imdb-rsclone.netlify.app/',
		team: 3,
	},
	{
		icon: <BiLogoGraphql />,
		title: 'GraphiQL',
		description:
			'GraphiQL - это игровая площадка/IDE для запросов GraphQL. Финальный проект в рамках курса по React.',
		link: 'https://graphiql-task.netlify.app/',
		team: 3,
	},
];

const ServiceSlider = () => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
			}}
			freeMode={true}
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Pagination]}
			className="h-[340px] max-sm:h-[280px]"
		>
			{serviceData.map((item, index) => {
				return (
					<SwiperSlide key={index}>
						<a
							href={item.link}
							target="_blank"
							className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 max-sm:text-[18px] max-sm:p-3 max-sm:h-[218px] z-20"
						>
							<div className="text-accent text-lg mb-2">
								{item.icon}
							</div>

							<div className="mb-2">
								<div className="mb-2 text-lg">{item.title}</div>
								<div className="text-sm">
									<span className="text-accent ">
										Команда:
									</span>{' '}
									{item.team} разработчика
								</div>
								<p className="leading-normal">
									{item.description}
								</p>
							</div>
							<div className="text-3xl max-sm:hidden">
								<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
							</div>
						</a>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ServiceSlider;
