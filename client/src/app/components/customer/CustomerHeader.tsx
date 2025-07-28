"use client";

import { JSX, useState } from "react";

import styles from "@css/customer/customerheader.module.css";
import Link from "next/link";

import { MdDensityMedium, MdHome, MdOutlineShoppingCart, MdOutlineLogin, MdOutlinePersonAddAlt, MdOutlineWbSunny, MdClear } from "react-icons/md";
import { HiOutlineWrenchScrewdriver, HiOutlineMoon } from "react-icons/hi2";

export const CustomerHeader = (): JSX.Element => {
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
	const [darkMode, setDarkMode] = useState<boolean>(false);

	const toggleSidebar = ():void => {
		setSidebarOpen((prev) => !prev);
	};

	const closeSidebar = ():void => {
		setSidebarOpen(false);
	};

	const toggleDarkMode = ():void => {
		console.log("dark mode toggle " + Math.floor(Math.random() * 10));
		setDarkMode((prev) => !prev);
	};

	return (
		<nav className={styles.navbarWrapper}>
			{/* normal navbar */}
			<div className={styles.navbar}>
				<div className={styles.logo}>Logo Here</div>

				<div className={styles.navLargeScreen}>
					<Link href="/" className={styles.navItem}>
						<MdHome /> Home
					</Link>
					<Link href="/services" className={styles.navItem}>
						<HiOutlineWrenchScrewdriver /> Services
					</Link>
					<Link href="/buy-pro" className={styles.navItem}>
						<button>
							<MdOutlineShoppingCart /> Buy Pro
						</button>
					</Link>
				</div>

				<div className={styles.authButtons}>
					<Link href="/login">
						<MdOutlineLogin /> Sign In / <MdOutlinePersonAddAlt /> Sign Up
					</Link>
				</div>

				<div className={styles.hamburger} onClick={toggleSidebar}>
					<MdDensityMedium />
				</div>
			</div>

			{/* sidebar-menu */}

			<div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
				<div className={styles.sidebarButtons}>
					<button className={styles.closeBtn} onClick={closeSidebar}>
						<MdClear />
					</button>
					<button className={styles.themeToggler} onClick={toggleDarkMode}>
						{darkMode ? <MdOutlineWbSunny /> : <HiOutlineMoon />}
					</button>
				</div>
				<div className={styles.sidebarSeparator}></div>
				<Link href="/" className={styles.sidebarItem} onClick={closeSidebar}>
					<MdHome	 /> Home
				</Link>
				<Link href="/services" className={styles.sidebarItem} onClick={closeSidebar}>
					<HiOutlineWrenchScrewdriver /> Services
				</Link>
				<Link href="/buy-pro" className={styles.sidebarItem} onClick={closeSidebar}>
					<MdOutlineShoppingCart /> Buy Pro
				</Link>
				<div className={styles.sidebarAuthButtons}>
					<Link href="/login">
						<MdOutlineLogin />
						<p> Sign In / </p>
						<MdOutlinePersonAddAlt />
						<p>Sign Up</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};
