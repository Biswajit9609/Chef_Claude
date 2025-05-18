async function getRecipe(ingredients) {
  const response = await fetch("https://api-inference.huggingface.co/models/flax-community/t5-recipe-generation", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: ingredients.join(", ") })
  });

  const data = await response.json();
  return data[0]?.generated_text || "No recipe found";
}
