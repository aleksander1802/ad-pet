import Image from 'next/image';

const TopLeftImg = () => {
	const width = 0;
	const height = 0;

	return (
		<div className="absolute left-0 top-0 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50">
			<Image
				src={''}
				priority={true}
				width={width}
				height={height}
				alt="top-left-image"
			/>
		</div>
	);
};

export default TopLeftImg;
