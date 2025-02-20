export default function ShowRecipe() {
	return (
		<>
			<div className="bg-white p-8 mt-16 shadow-md rounded-md">
				<div className="text-xl font-bold w-screen ">Ready for a recipe?</div>
				<div className="flex justify-end ">
					<button className="bg-gray-500 text-white px-4 py-3 rounded-lg font-medium transition-all hover:bg-gray-600">
						Generate Recipe
					</button>
				</div>
				<div className="text-lg text-gray-600">Generate a recipe from your list of ingredients</div>
			</div>
		</>
	);
}
