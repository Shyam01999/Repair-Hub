import Link from "next/link";
import "@css/404page.css";

export default function NotFound() {
	return (
		<>
			<p className="zoom-area">
				<b>Sorry!</b> the page you are looking for was not found
			</p>
			<section className="error-container">
				<span className="four">
					<span className="screen-reader-text">4</span>
				</span>
				&nbsp;
				<span className="zero">
					<span className="screen-reader-text">0</span>
				</span>
				&nbsp;
				<span className="four">
					<span className="screen-reader-text">4</span>
				</span>
			</section>
			<div className="link-container">
				<Link href="/" className="more-link">
					Back to Home
				</Link>
			</div>
		</>
	);
}
