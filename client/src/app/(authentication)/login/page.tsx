"use client";

import { useState, JSX } from "react";
import "@css/authentication/common.css";
import styles from "@css/authentication/LoginPage.module.css";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Login(): JSX.Element {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [mobileNumberSignInButtonVisible, setMobileNumberSignInButtonVisible] = useState<boolean>(true);
	const [emailSignInButtonVisible, setEmailSignInButtonVisible] = useState<boolean>(true);

	const handleMobileNumberFieldVisibility = () => {
		setMobileNumberSignInButtonVisible(false);
		setEmailSignInButtonVisible(true);
	};

	const handleEmailFieldVisibility = () => {
		setMobileNumberSignInButtonVisible(true);
		setEmailSignInButtonVisible(false);
	};
	return (
		<>
			<main>
				<div className={styles["left-loginform-layout"]}>
					<section className={styles["login-form-section"]}>
						<form className="form-container">
							<h2>
								Welcome back to <Link href="/">RepairHub</Link>
							</h2>
							{mobileNumberSignInButtonVisible ? (
								<button type="button" className={styles.mobile_number_signin_button} onClick={handleMobileNumberFieldVisibility}>
									Sign In Through Phone Number
								</button>
							) : (
								<>
									<div>
										<input type="text" placeholder="Enter Mobile Number" required autoComplete="off" className="input" />
										<span className="mobile_number_errors hide">Invalid Mobile Number !</span>
									</div>
										<div className="password-field">
											<input type={showPassword ? "text" : "password"} placeholder="Enter Password" required className="input" />
											<span className="password-toggle" onClick={() => setShowPassword((prev) => !prev)} role="button" tabIndex={0}>
												<span className="fade-icon">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
											</span>
										</div>
								</>
							)}
							{emailSignInButtonVisible ? (
								<button type="button" className={styles.email_signin_button} onClick={handleEmailFieldVisibility}>
									Sign In Through Email
								</button>
							) : (
								<>
									<div>
										<input type="email" placeholder="Enter Email Address" required autoComplete="off" className="input" />
										<span className="email_errors hide">Invalid Email !</span>
									</div>
										<div className="password-field">
											<input type={showPassword ? "text" : "password"} placeholder="Enter Password" required className="input" />
											<span className="password-toggle" onClick={() => setShowPassword((prev) => !prev)} role="button" tabIndex={0}>
												<span className="fade-icon">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
											</span>
										</div>
								</>
							)}

							<button type="submit" className={styles.submitButton}>
								Sign In
							</button>
							<Link href="/" className={styles["forgot-password-text"]}>
								Forgot password?
							</Link>
							<div className={styles["social-signin-wrapper"]}>
								<div className={styles["divider"]}>
									<span className={styles["divider-text"]}>or sign in with</span>
								</div>
								<div className={styles["social-buttons"]}>
									<button type="button" className={styles["social-button-google"]}>
										<FcGoogle />
									</button>
									<button type="button" className={styles["social-button-facebook"]}>
										<FaFacebookF />
									</button>
								</div>
								<div className={styles["divider"]} />
							</div>
							<section className="bottom-section">
								<p>Don't have an account?</p>
								<Link href="/register" className={styles.signuptext}>
									Sign Up
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
