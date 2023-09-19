import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProductsBtn = () => {
	const width = 150;
	return (
		<div className="mx-auto xl:mx-0 ">
			<Link
				href={'/catalogue'}
				className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-50 "
			>
				<Image
					src={'/fishmania/rounded-text.png'}
					width={261}
					height={248}
					alt="works"
					priority
					style={{ width, height: 'auto' }}
					className="animate-spin-slow w-full h-full max-w-[261px]"
				/>
				<HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
			</Link>
		</div>
	);
};

export default ProductsBtn;
