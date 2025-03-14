import React from "react";

const Hero = () => {
	return (
		<div className="h-[50vh] relative overflow-hidden z-0">
			<video
				className="absolute top-0 left-0 w-full h-full object-cover"
				autoPlay
				loop
				muted
			>
				<source src="/Videos/Hero1.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="relative z-1 flex flex-col items-center justify-center w-full h-full bg-black/80">
				<p className="text-center text-orange-600 font-reenie text-2xl my-2 font-semibold">
					"See the World, Stay True to Your Faith"
				</p>
				<h1 className="text-center text-5xl font-bold text-white">
					Galeri Kembara Muslim
				</h1>
			</div>
		</div>
	);
};

export default Hero;
