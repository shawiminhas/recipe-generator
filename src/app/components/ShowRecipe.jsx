import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactModal from "react-modal";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function ShowRecipe({ ingredients }) {
	const [recipe, setRecipe] = useState("");
	const [recipeLink, setRecipeLink] = useState("");
	const [showRecipe, setShowRecipe] = useState(false);
	const [isGeneratingRecipe, setIsGeneratingRecipe] = useState(false);
	const [errorGeneratingRecipe, setErrorGeneratingRecipe] = useState(false);
	const [errorGeneratingRecipeImage, setErrorGeneratingRecipeImage] = useState(false);

	async function generateRecipe() {
		try {
			setErrorGeneratingRecipe(false);
			setIsGeneratingRecipe(true);
			const response = await fetch("/api/recipe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ingredients: ingredients }),
			});

			if (!response.ok) {
				setErrorGeneratingRecipe(true);
				setIsGeneratingRecipe(false);
				return;
			}
			const generatedRecipe = await response.json();
			setRecipe(generatedRecipe);
			await generateRecipeImage();
			setShowRecipe(true);
		} catch (e) {
			console.error(`Error: ${e.message}`);
			setErrorGeneratingRecipe(true);
		} finally {
			setIsGeneratingRecipe(false);
		}
	}

	async function generateRecipeImage() {
		try {
			setErrorGeneratingRecipeImage(false);
			const response = await fetch("/api/recipeImage", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ dish: recipe.slice(0, 50), ingredients: ingredients }),
			});

			const generatedUrl = await response.json();
			setRecipeLink(generatedUrl);
		} catch (e) {
			setErrorGeneratingRecipeImage(true);
			console.error(`Error: ${e.message}`);
		}
	}

	function closeModal() {
		setShowRecipe(false);
	}

	function generateRecipeButton() {
		return (
			<button
				onClick={generateRecipe}
				className="bg-gray-500 text-white px-4 py-3 rounded-lg font-medium transition-all hover:bg-gray-600 flex items-center justify-center gap-2"
				disabled={isGeneratingRecipe}>
				{isGeneratingRecipe ? (
					<>
						<CircularProgress color="inherit" size="1.5rem" />
						<span>Generating Recipe</span>
					</>
				) : (
					"Generate Recipe"
				)}
			</button>
		);
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
					<div className="prose rounded-lg bg-white py-10 px-12 font-semibold shadow-md w-full max-w-screen-md">
						<ReactMarkdown>{recipe}</ReactMarkdown>
					</div>
				</div>
				<div className="flex justify-center mt-6 w-full">
					{!errorGeneratingRecipeImage && <img src={recipeLink} className="max-w-full h-auto" />}
				</div>
			</ReactModal>
		);
	}

	return (
		<>
			<div className="bg-white p-8 mt-16 shadow-md rounded-md">
				<div className="text-xl font-bold ">Ready for a recipe?</div>
				<div className="flex justify-end ">{generateRecipeButton()}</div>
				<div className="text-lg text-gray-600">Generate a recipe from your list of ingredients</div>
			</div>
			{errorGeneratingRecipe ? <div>error</div> : recipe && displayRecipe()}
		</>
	);
}
