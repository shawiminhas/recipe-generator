import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactModal from "react-modal";

export default function ShowRecipe({ ingredients }) {
	const [recipe, setRecipe] = useState("");
	const [showRecipe, setShowRecipe] = useState(false);
	const [generatingRecipe, setGeneratingRecipe] = useState(false);

	async function generateRecipe() {
		try {
			setGeneratingRecipe(true);
			const response = await fetch("/api/recipe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ingredients: ingredients }),
			});

			const generatedRecipe = await response.json();
			setRecipe(generatedRecipe);
			setShowRecipe(true);
		} catch (e) {
			console.error(`Error: ${e.message}`);
		} finally {
			setGeneratingRecipe(false);
		}
	}

	function closeModal() {
		setShowRecipe(false);
	}

	function displayRecipe() {
		return (
			<ReactModal
				isOpen={showRecipe}
				contentLabel="Recipe"
				ariaHideApp={false}
				onRequestClose={closeModal}
				shouldCloseOnEsc={true}
				shouldCloseOnOverlayClick={true}>
				<div className="flex justify-center">
					<div className="prose rounded-lg bg-white py-10 px-12 font-semibold shadow-md min-w-max max-w-screen-md">
						<ReactMarkdown>{recipe}</ReactMarkdown>
					</div>
				</div>
			</ReactModal>
		);
	}

	return (
		<>
			<div className="bg-white p-8 mt-16 shadow-md rounded-md">
				<div className="text-xl font-bold ">Ready for a recipe?</div>
				<div className="flex justify-end ">
					<button
						onClick={generateRecipe}
						className="bg-gray-500 text-white px-4 py-3 rounded-lg font-medium transition-all hover:bg-gray-600"
						disabled={generatingRecipe}>
						Generate Recipe
					</button>
				</div>
				<div className="text-lg text-gray-600">Generate a recipe from your list of ingredients</div>
			</div>
			{recipe && displayRecipe()}
		</>
	);
}
