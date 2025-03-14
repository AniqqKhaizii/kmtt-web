"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as motion from "framer-motion/client";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Scroll animations for images
		gsap.fromTo(
			".hero-image",
			{
				opacity: 1,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: ".hero-image",
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				},
			}
		);
	}, []);

	return (
		<section
			className="h-screen sm:py-48 py-40 mt-16 sm:mt-16 lg:mt-0 relative bg-cover bg-center overflow-hidden"
			style={{
				backgroundImage: "url('/Hero/1.jpg')",
				backgroundAttachment: "fixed",
			}}
		>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 h-full bg-gradient-to-b from-[#c7601d] via-[#ec7222]/80 to-white from-0% via-60% to-100%"></div>

			<div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 sm:grid-cols-1 lg:items-center gap-32 relative z-20">
				{/* Hero Content */}
				<div className="flex flex-col space-y-4 sm:space-y-4 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
					<motion.h1
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 1 }}
						className="font-semibold leading-tight text-white text-4xl sm:text-5xl lg:text-6xl"
					>
						Bersama Anda Menyempurnakan
						<span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-[#1f2041]">
							<br />
							Umrah
						</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 0.8 }}
						className="flex text-gray-100 text-xl tracking-normal md:font-normal max-w-xl mx-auto lg:max-w-none"
					>
						Menyediakan pengalaman Umrah yang penuh bermakna dan lancar, dengan
						sokongan sepenuh hati dalam setiap langkah perjalanan anda ke Tanah
						Suci.
					</motion.p>
					<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
						<motion.a
							initial={{ opacity: 0, x: -400 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ type: "spring", duration: 0.3 }}
							href="/Pakej"
							className="px-6 gap-2 items-center h-12 rounded-full bg-zinc-900 hover:bg-zinc-950 hover:scale-105 transition-transform text-white duration-300 ease-linear flex justify-center w-full sm:w-auto"
						>
							Lihat Pakej
							<FaArrowRightLong />
						</motion.a>
						<motion.a
							initial={{ opacity: 0, x: -400 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ type: "spring", duration: 0.2 }}
							href="/Hubungi"
							className="px-6 gap-2 items-center h-12 rounded-full border border-gray-100 hover:scale-105 transition-transform text-white bg-transparent backdrop-blur-sm hover:backdrop-hue-rotate-60 duration-300 ease-linear flex justify-center w-full sm:w-auto"
						>
							Hubungi Kami <FaArrowRightLong />
						</motion.a>
					</div>
				</div>

				<div className="sm:flex aspect-square lg:aspect-auto lg:h-[35rem] relative hidden">
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 0.8 }}
						className="w-1/3 sm:h-[80%] h-[50%] rounded-full overflow-clip z-30 shadow-2xl hero-image"
					>
						<img
							src="/Hero/Hero1.jpg"
							alt="building plan image"
							width="300"
							className="w-full h-full object-cover object-center z-30"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 200 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 0.8 }}
						className="absolute left-56 sm:top-5 bottom-2/3 sm:h-[80%] h-[50%] w-1/3 rounded-full overflow-clip z-10 shadow-2xl hero-image"
					>
						<img
							src="/Hero/2.jpg"
							alt="working-on-housing-project"
							width="300"
							className="z-10 w-full h-full object-cover object-center"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 300 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 0.8 }}
						className="absolute -right-20 sm:top-10 bottom-2/3 sm:h-[80%] h-[50%] w-1/3 rounded-full overflow-clip z-10 shadow-2xl hero-image"
					>
						<img
							src="/Hero/3.webp"
							alt="working-on-housing-project"
							width="300"
							className="z-10 w-full h-full object-cover object-center"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
