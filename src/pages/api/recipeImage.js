import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export default async function generateRecipeImage(req, res) {
	const { dish, ingredients } = req.body;
	try {
		const response = await openai.images.generate({
			model: "dall-e-3",
			prompt: `You are a chef who cooked a dish called ${dish} using ingredients ${ingredients}. Generate an image of this dish in a well presented form, make sure the dish is very stereotypical that you would see if you ordered it from a restaurant.`,
			n: 1,
			size: "1024x1024",
			response_format: "url",
		});

		const url = response.data[0].url;
		res.status(200).json(url);
	} catch (e) {
		console.error(e);
		res.status(500).json({ error: `Unable to get image, ${e.message}` });
	}
}
