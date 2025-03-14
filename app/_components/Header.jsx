"use client";
import Image from "next/image";
import Link from "next/link";
import Banner from "../_components/Banner";
import { usePathname } from "next/navigation";
import * as motion from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

import Axios from "axios";
import dayjs from "dayjs";

function Header() {
	const [sticky, setSticky] = useState(false);
	const [showSubMenu, setShowSubMenu] = useState(false);
	const pathname = usePathname();
	const isMultiDirectory = pathname.split("/").filter(Boolean).length > 1;
	const isHomePage = pathname.split("/").filter(Boolean).length < 1;

	const isPakejPage = pathname.includes("/Pakej/Pakej-Umrah");
	const [packages, setPackages] = useState([]);
	useEffect(() => {
		const fetchPackages = async () => {
			try {
				const response = await Axios.get(
					"http://localhost:3000/api/Tetapan/ManagePackage",
					{
						params: {
							Operation: "SEARCH",
							TripUnique: "Y",
						},
					}
				);

				setPackages(response.data);
			} catch (error) {
				console.error("Error fetching packages:", error);
			}
		};
		fetchPackages();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false);
		};

		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const Menu = [
		{
			id: 1,
			name: "Utama",
			path: "/",
		},
		{
			id: 2,
			name: "Pakej Umrah",
			path: "/Pakej",
			submenu: packages.map((pkg) => ({
				id: pkg.PakejID,
				name: `Umrah ${pkg.PakejName}` || "",
				path: `/Pakej/Pakej-Umrah?kategori=${encodeURIComponent(
					pkg.PakejName || ""
				)}`,
			})),
		},
		{
			id: 3,
			name: "Tips & Galeri",
			path: "/Galeri",
		},
		{
			id: 4,
			name: "Hubungi",
			path: "/Hubungi",
		},
		{
			id: 5,
			name: "Tentang Kami",
			path: "/Tentang",
		},
		{
			id: 6,
			name: "Portal Admin",
			path: "/Admin",
		},
	];

	return (
		<>
			<motion.header
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.2 }}
				viewport={{ once: true }}
				className={`${
					isPakejPage ? "relative" : "fixed"
				}  top-0 w-full z-[9999] shadow-xl transition-all ease-in-out duration-300 ${
					sticky || isMultiDirectory
						? "bg-gradient-to-br from-[#b7c21c] to-[#e76f21] text-white"
						: "bg-gradient-to-br from-[#b7c21c] to-[#e76f21] text-white"
				}`}
			>
				<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						<div
							className={`md:flex md:items-center md:gap-12 transition-all ease-in-out duration-300 ${
								sticky ? "h-16" : "h-16"
							}`}
						>
							<a className="flex text-teal-600" href="/">
								<span className="sr-only">Home</span>
								<img
									src="/LOGOKMTT.png"
									alt="KMTT Logo"
									width={100}
									height={100}
									className="object-contain object-center mt-2"
								/>
							</a>
						</div>

						<div className="hidden md:block">
							<nav aria-label="Global">
								<ul className="md:flex gap-8 hidden">
									{Menu.map((item, index) => (
										<li
											key={index}
											className={`relative group hover:text-black cursor-pointer text-sm ${
												pathname === item.path && sticky
													? "border-b-2 pb-1 border-zinc-800"
													: pathname === item.path && !sticky
													? "border-b-2 pb-1 border-zinc-800"
													: ""
											}`}
										>
											<Link className="flex" href={item.path}>
												{item.name}
												{item.submenu && (
													<FaChevronDown className="ml-2 mt-1 text-sm" />
												)}
											</Link>
											{item.submenu && (
												<div className="relative">
													{/* This invisible area extends the hoverable space */}
													<div className="absolute top-10 left-0 w-full h-[20px] bg-transparent"></div>
													<ul
														className={`absolute -left-10 border-t-4 border-zinc-800 ${
															!isHomePage ? "top-1" : "top-1"
														} opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-white shadow-lg mt-5`}
														onMouseEnter={() => setShowSubMenu(true)}
														onMouseLeave={() => setShowSubMenu(false)}
													>
														{item.submenu.map((subItem) => (
															<li
																key={subItem.id}
																className="flex justify-start items-center w-[12vw] text-left text-sm bg-orange-500 text-white hover:bg-orange-600 transition-all ease-in-out px-2 py-2 shadow-2xl"
															>
																<Link href={subItem.path} className="flex">
																	<FaPaperPlane className="mr-2" />
																	{subItem.name}
																</Link>
															</li>
														))}
													</ul>
												</div>
											)}
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</motion.header>
		</>
	);
}

export default Header;
