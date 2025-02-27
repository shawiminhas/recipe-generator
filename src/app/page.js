"use client";
import Header from "./components/Header";
import { useState } from "react";
import IngredientForm from "./components/IngredientForm";
import ShowRecipe from "./components/ShowRecipe";
import ItemsInBasket from "./components/ItemsInBasket";

export default function Home() {
	const [ingredients, setIngredients] = useState([]);

	return (
		<div className="flex flex-col items-center justify-center bg-slate-200 p-6">
			<Header />
			<div className="mt-24 w-full">
				<IngredientForm setIngredients={setIngredients} />
				<div className="max-w-2xl mx-auto">
					<ItemsInBasket ingredients={ingredients} setIngredients={setIngredients} />
					{ingredients.length >= 3 && <ShowRecipe ingredients={ingredients} />}
				</div>
			</div>
		</div>
	);
}
