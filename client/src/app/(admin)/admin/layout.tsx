import { JSX } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
