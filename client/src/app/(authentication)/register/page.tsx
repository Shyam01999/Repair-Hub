"use client";

import { useState, JSX } from "react";
import '@css/authentication/common.css'; // global shared styles
import styles from '@css/authentication/RegisterPage.module.css'; // component-scoped styles

import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function Register(): JSX.Element {
	const [showPassword, setShowPassword] = useState<Boolean>(false);
	return (
		<>
			<main>
				<div className={styles["left-registerform-layout"]}>
					<section className={styles["register-form-section"]}>
						<form className="form-container">
							<h2>
								Get Started with <Link href="/">RepairHub</Link>
							</h2>
							<div>
								<input type="text" placeholder="Enter Mobile Number" required autoComplete="off" />
								<span className="mobile_number_errors hide">Invalid Mobile Number !</span>
							</div>
							<div>
								<input type="email" placeholder="Enter Email Address" required autoComplete="off" />
								<span className="email_errors hide">Invalid Email !</span>
							</div>

							<div className="password-wrapper">
								<div className="password-field">
									<input type={showPassword ? "text" : "password"} placeholder="Enter Password" required className="input" />
									<span className="password-toggle" onClick={() => setShowPassword((prev) => !prev)} role="button" tabIndex={0}>
										<span className="fade-icon">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
									</span>
								</div>

								<div className="password-field">
									<input type={showPassword ? "text" : "password"} placeholder="Confirm Password" required className="input" />
									<span className="password_errors hide">Passwords do not match !</span>
								</div>
							</div>

							<button type="submit" className={styles.submitButton}>
								Create Account
							</button>
							<section className="bottom-section">
								<p>Already have an account?</p>
								<Link href="/login" className={styles.signintext}>
									Sign In
								</Link>
							</section>
						</form>
					</section>
					<section className="image-section" />
				</div>
			</main>
		</>
	);
}
