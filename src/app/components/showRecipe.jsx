import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ShowRecipe({ ingredients }) {
	const [recipe, setRecipe] = useState("");

	async function generateRecipe() {
		try {
			const response = await fetch("/api/recipe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ingredients: ingredients }),
			});

			const generatedRecipe = await response.json();
			setRecipe(generatedRecipe);
		} catch (e) {
			console.error(`Error: ${e.message}`);
		}
	}

	function displayRecipe() {
		return (
			<div className="flex justify-center mt-20">
				<div className="prose rounded-lg bg-white p-10 font-semibold shadow-md">
					<ReactMarkdown>{recipe}</ReactMarkdown>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="bg-white p-8 mt-16 shadow-md rounded-md">
				<div className="text-xl font-bold w-screen ">Ready for a recipe?</div>
				<div className="flex justify-end ">
					<button
						onClick={generateRecipe}
						className="bg-gray-500 text-white px-4 py-3 rounded-lg font-medium transition-all hover:bg-gray-600">
						Generate Recipe
					</button>
				</div>
				<div className="text-lg text-gray-600">Generate a recipe from your list of ingredients</div>
			</div>
			{recipe && displayRecipe()}
		</>
	);
}
