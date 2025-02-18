import Header from "./components/header";
import Ingredients from "./components/ingredients";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-6">
			<Header />
			<Ingredients />
		</div>
	);
}
