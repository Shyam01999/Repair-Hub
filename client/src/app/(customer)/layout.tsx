import { Poppins } from "next/font/google";

const poppins = Poppins({
  style: ['normal', 'italic'],
  weight: [ '400', '500', '700' ],
  display: 'swap',
  fallback: ['sans-serif']
})

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
