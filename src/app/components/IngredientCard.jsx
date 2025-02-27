import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";

export default function IngredientCard({ ingredient, ingredients, index, setIngredients }) {
	function deleteIngredient(index) {
		const newIngredients = ingredients.filter((ingredient, i) => i != index);

		setIngredients(newIngredients);
	}

	return (
		<li className="flex justify-between items-center space-x-4 ml-5">
			<span className="flex-grow text-center">{ingredient}</span>
			<IconButton onClick={() => deleteIngredient(index)}>
				<DeleteOutlineIcon />
			</IconButton>
		</li>
	);
}
