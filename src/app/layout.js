import "./globals.css";

export const metadata = {
	title: "Recipe Generator",
	description: "Recipe Generator",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
