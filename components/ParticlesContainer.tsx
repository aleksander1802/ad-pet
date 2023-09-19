import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';
import type { ISourceOptions, Engine } from 'tsparticles-engine';

const ParticlesContainer = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async () => {}, []);

	const options: ISourceOptions = {
		detectRetina: false,
		fpsLimit: 60,
		interactivity: {
			detectsOn: 'canvas',
			events: {
				onHover: {
					enable: true,
					mode: 'bubble',
				},
				resize: true,
			},
			modes: {
				bubble: {
					distance: 40,
					duration: 2,
					opacity: 8,
					size: 6,
					speed: 3,
				},
			},
		},
		particles: {
			color: {
				value: '#ff0000',
				animation: {
					enable: true,
					speed: 20,
					sync: true,
				},
			},
			lineLinked: {
				blink: false,
				color: 'random',
				consent: false,
				distance: 30,
				enable: true,
				opacity: 0.3,
				width: 0.5,
			},
			move: {
				attract: {
					enable: false,
					rotate: {
						x: 600,
						y: 1200,
					},
				},
				bounce: false,
				direction: 'none',
				enable: true,
				outMode: 'bounce',
				random: true,
				speed: 0.5,
				straight: false,
			},
			number: {
				density: {
					enable: false,
					area: 2000,
				},
				limit: 0,
				value: 200,
			},
			opacity: {
				animation: {
					enable: true,
					minimumValue: 0.05,
					speed: 2,
					sync: false,
				},
				random: false,
				value: 1,
			},
			shape: {
				type: 'circle',
			},
			size: {
				animation: {
					enable: false,
					minimumValue: 0.1,
					speed: 40,
					sync: false,
				},
				random: true,
				value: 1,
			},
		},
		polygon: {
			draw: {
				enable: true,
				lineColor: 'rgba(255,255,255,0.2)',
				lineWidth: 0.3,
			},
			move: {
				radius: 10,
			},
			inlineArrangement: 'equidistant',
			scale: 0.5,
			type: 'inline',
			url: 'https://particles.js.org/images/smalldeer.svg',
		},
	};

	return (
		<Particles
			id="tsparticles"
			className="w-full h-full absolute translate-z-0"
			init={particlesInit}
			loaded={particlesLoaded}
			options={options}
		/>
	);
};

export default ParticlesContainer;
