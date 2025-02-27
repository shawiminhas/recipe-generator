import IngredientCard from "./IngredientCard";

export default function ItemsInBasket({ ingredients, setIngredients }) {
	function listIngredients() {
		return ingredients.map((ingredient, index) => (
			<IngredientCard
				key={index}
				setIngredients={setIngredients}
				index={index}
				ingredients={ingredients}
				ingredient={ingredient}
			/>
		));
	}

	return (
		<div className="flex flex-col justify-center items-center bg-white p-8 mt-10 rounded-md shadow-md ">
			<div className="text-2xl font-semibold mb-4 ">Ingredients on hand</div>
			<ul className="text-lg space-y-1 ">{ingredients.length > 0 ? listIngredients() : "No Ingredients Entered"}</ul>
		</div>
	);
}
