import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
	apiKey: process.env.ANTHROPIC_API_KEY,
});

const systemPrompt = `You are a professional chef. Your task is to generate a well-structured recipe based on a given list of ingredients.
  If you need to add an additional ingredient or two because theres not enough given you can do so but try to stick to what is given if possible.
  Format the recipe in Markdown for easy integration into a web development website.
  Ensure it includes a title, ingredients list, step-by-step instructions, and optional serving suggestions.`;

export default async function getRecipe(req, res) {
	try {
		const { ingredients } = req.body;
		const response = await anthropic.messages.create({
			model: "claude-3-haiku-20240307",
			max_tokens: 1024,
			temperature: 1,
			system: systemPrompt,
			messages: [
				{
					role: "user",
					content: [
						{
							type: "text",
							text: `Ingredients: ${ingredients.join(", ")}`,
						},
					],
				},
			],
		});
		const recipe = response.content[0].text;
		res.status(200).json(recipe);
	} catch (e) {
		console.error(e);
		res.status(500).json({ error: `Unable to get recipe, ${e.message}` });
	}
}
