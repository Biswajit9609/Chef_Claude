// export async function getRecipeFromAI(ingredients) {
//   const prompt = `Here are the ingredients: ${ingredients.join(", ")}.\n
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your responce in markdown to make it easier to render to a web page
// `;

//   const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const result = await model.generateContent({
//     contents: [
//       {
//         role: "user",
//         parts: [{ text: prompt }]
//       }
//     ]
//   });

//   const response = await result.response;
//   return response.text();
// }
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBMFBTPW5qGWBekqT3NkCsqpbMVm_qth-o" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();