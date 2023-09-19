import Image from 'next/image';

const BeautifulFish = () => {
	return (
		<div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 max-sm:bottom-4  mix-blend-color-dodge animate-pulse duration-75 z-10">
			<Image
				src={'/beautiful.png'}
				width={260}
				height={200}
				alt="circles"
				className="w-full h-full"
			/>
		</div>
	);
};

export default BeautifulFish;
