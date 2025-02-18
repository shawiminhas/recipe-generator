export default function Ingredients() {
	return (
		<div className="flex flex-col h-screen bg-slate-200">
			<div className="flex-grow flex justify-center items-center">
				<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
					<h2 className="text-xl font-semibold text-center mb-3">Enter at least three ingredients to get started</h2>
					<form className="flex flex-col gap-3">
						<input
							className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
							type="text"
							placeholder="Enter Ingredient"
						/>
						<button
							className="bg-gray-500 text-white font-medium p-2 rounded-md transition hover:bg-gray-600"
							type="submit">
							Add Ingredient
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
