"use client";

import { useState } from "react";

import styles from "../../css/customer/customerheader.module.css";
import Link from "next/link";

import { AlignJustify, House, Tool, ShoppingCart, LogIn, UserPlus, Sun, Moon } from "@deemlol/next-icons";

export const CustomerHeader = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

		const toggleSidebar = () => {
			setSidebarOpen((prev) => !prev);
		};

		const closeSidebar = () => {
			setSidebarOpen(false);
		};

		return (
			<nav className={styles.navbarWrapper}>
				{/* normal navbar */}
				<div className={styles.navbar}>
					<div className={styles.logo}>Logo Here</div>

					<div className={styles.navLargeScreen}>
						<Link href="/" className={styles.navItem}>
							<House /> Home
						</Link>
						<Link href="/services" className={styles.navItem}>
							<Tool /> Services
						</Link>
						<Link href="/buy-pro" className={styles.navItem}>
							<button>
								<ShoppingCart /> Buy Pro
							</button>
						</Link>
					</div>

					<div className={styles.authButtons}>
						<Link href="/login">
							<LogIn /> Sign In / <UserPlus /> Sign Up
						</Link>
					</div>

					<div className={styles.hamburger} onClick={toggleSidebar}>
						<AlignJustify />
					</div>
				</div>

				{/* sidebar-menu */}

				<div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
					<button className={styles.closeBtn} onClick={closeSidebar}>
						theme switcher button hub
					</button>
					<div className={styles.sidebarSeparator}></div>
					<Link href="/" className={styles.sidebarItem} onClick={closeSidebar}>
						<House /> Home
					</Link>
					<Link href="/services" className={styles.sidebarItem} onClick={closeSidebar}>
						<Tool /> Services
					</Link>
					<Link href="/buy-pro" className={styles.sidebarItem} onClick={closeSidebar}>
						<ShoppingCart /> Buy Pro
					</Link>
					<Link href="/login">
						<LogIn /> Sign In / <UserPlus /> Sign Up
					</Link>
				</div>
			</nav>
		);
};
