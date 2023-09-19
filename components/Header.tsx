import Nav from './Nav';

const Header = () => {
	return (
		<header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-center py-3">
					<Nav />
				</div>
			</div>
		</header>
	);
};

export default Header;
