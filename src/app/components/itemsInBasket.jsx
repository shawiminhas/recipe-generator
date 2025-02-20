import { v4 as uuidv4 } from "uuid";

export default function ItemsInBasket({ ingredients }) {
	function listIngredients() {
		return ingredients.map((ingredient) => <li key={uuidv4()}>{ingredient}</li>);
	}

	return (
		<div className="flex flex-col justify-center items-center bg-white p-8 mt-10 rounded-md shadow-md">
			<div className="text-2xl font-semibold mb-4">Ingredients on hand</div>
			<ul className="text-lg space-y-1">{ingredients.length > 0 ? listIngredients() : "No Ingredients Entered"}</ul>
		</div>
	);
}
