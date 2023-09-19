import Header from './Header';
import { ReactElement } from 'react';
import Socials from './Socials';

const Layout = ({ children }: { children: ReactElement }) => {
	return (
		<div className={`page text-white  relative bg-primary`}>
			<Socials />
			<Header />
			{children}
		</div>
	);
};

export default Layout;
