import "./globals.css";

export const metadata = {
	title: "Recipe Generator",
	description: "Recipe Generator",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
