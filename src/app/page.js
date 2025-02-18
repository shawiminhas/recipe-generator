"use client";
import Header from "./components/header";
import { useState } from "react";
import IngredientForm from "./components/ingredientForm";
import ShowRecipe from "./components/showRecipe";

export default function Home() {
	const [ingredients, setIngredients] = useState([]);

	return (
		<div className="flex flex-col items-center justify-center bg-slate-200 p-6">
			<Header />
			<div className="mt-24 w-full">
				<IngredientForm setIngredients={setIngredients} />
				{ingredients.length > 3 && <ShowRecipe />}
			</div>
		</div>
	);
}
