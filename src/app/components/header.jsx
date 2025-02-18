export default function Header() {
	return (
		<header className="flex flex-col items-center text-center bg-slate-100 p-6 shadow-md w-full">
			<h1 className="text-4xl font-bold text-gray-800">Recipe Generator</h1>
			<p className="text-lg text-gray-600 max-w-xl mt-2">
				Enter ingredients, set dietary preferences, and get personalized meal ideas!
			</p>
		</header>
	);
}
