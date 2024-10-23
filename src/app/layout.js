import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import CustomNav from "@/components/CustomNav/nav";

import styles from "./layout.module.scss";

export const metadata = {
	title: "Work Dashboard",
	description: "One stop shop for all the AG-USA work information",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>
			<body className="layout-body">
				<CustomNav />
				<main className="container">{children}</main>
			</body>
		</html>
	);
}
