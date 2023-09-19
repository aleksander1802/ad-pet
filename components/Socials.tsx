import Link from 'next/link';
import {
	RiTelegramLine,
	RiDiscordLine,
	RiSteamLine,
	RiGithubLine,
} from 'react-icons/ri';
import { SiCodewars } from 'react-icons/si';
import LangSwitcher from './LangSwitcher';

const Socials = () => {
	const clazz = 'hover:text-accent transition-all duration-300';

	return (
		<div className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max top-0 mt-auto xl:right-[2%] z-30 w-full xl:w-16 xl:max-w-md xl:h-screen">
			<div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[70px] xl:h-max py-3 bg-primary/60 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
				<Link
					href={''}
					target="_blank"
					className={clazz}
				>
					<RiTelegramLine title="Telegram" />
				</Link>
				<Link
					href={''}
					target="_blank"
					className={clazz}
				>
					<RiGithubLine title="GitHub" />
				</Link>
				<Link
					href={''}
					target="_blank"
					className={clazz}
				>
					<SiCodewars title="Codewars" />
				</Link>
				<Link
					href={''}
					target="_blank"
					className={clazz}
				>
					<RiDiscordLine title="Discord" />
				</Link>
				<Link
					href={'/'}
					target="_blank"
					className={clazz}
				>
					<RiSteamLine title="Steam" />
				</Link>
				<LangSwitcher />
			</div>
		</div>
	);
};

export default Socials;
