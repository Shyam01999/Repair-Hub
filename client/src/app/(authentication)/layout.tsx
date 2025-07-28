import { Poppins } from "next/font/google";
import { JSX } from "react";

const poppins = Poppins({
  style: ['normal', 'italic'],
  weight: [ '400', '500', '700' ],
  display: 'swap',
  fallback: ['sans-serif']
})

export default function AuthenticationLayout({ children }: { children: React.ReactNode }):JSX.Element {
  return (
		<html>
      <body className={poppins.className} style={{ 'margin': 0, 'padding': 0}}>
				{children}
			</body>
		</html>
	);
}
