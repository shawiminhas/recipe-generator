import { useState } from "react";

export default function IngredientForm({ setIngredients }) {
	const [ingredient, setIngredient] = useState("");

	function updateIngredients(event) {
		event.preventDefault();
		if (ingredient.trim()) {
			setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
		}
		setIngredient("");
	}

	return (
		<div className="bg-slate-200">
			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
				<h2 className="text-xl font-semibold text-center mb-3">Enter at least three ingredients to get started</h2>
				<form onSubmit={updateIngredients} className="flex flex-col gap-3">
					<input
						required
						className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
						id="ingredient"
						type="text"
						placeholder="Enter Ingredient"
						value={ingredient}
						onChange={(e) => setIngredient(e.target.value)}
					/>
					<button
						className="bg-gray-500 text-white font-medium p-2 rounded-md transition hover:bg-gray-600"
						type="submit">
						Add Ingredient
					</button>
				</form>
			</div>
		</div>
	);
}
