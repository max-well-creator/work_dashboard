import "./globals.scss";
import CustomNav from "@/components/CustomNav/nav";

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
			<body>
				<CustomNav />
				<main>{children}</main>
			</body>
		</html>
	);
}
