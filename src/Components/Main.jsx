import { GoogleGenAI } from "@google/genai";
import { useState } from 'react';
import IngredientsList from './IngredientsList';
import Responce from './Responce';

function Main() {
  const [ingredients, setIngredients] = useState(["All the spices", "salt"]);
  const [responceShown, setResponceShown] = useState(false);
  const [recipeText, setRecipeText] = useState('');

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim()) {
      setIngredients(prev => [...prev, newIngredient]);
    }
  }

  const showIngredients = ingredients.map((item) => (
    <li key={item} className='mx-12 p-2 text-gray-700'>{item}</li>
  ));

  async function handleToggle() {
    setResponceShown(true);
    const aiResponse = await getRecipeFromAI();
    setRecipeText(aiResponse);
  }

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY });

  const prompt = `Here are the ingredients: ${ingredients.join(", ")}.\n
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

  async function getRecipeFromAI() {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    return response.text;
  }

  return (
    <main className='max-w-screen w-full mt-20 flex justify-center flex-wrap overflow-x-hidden px-4'>
      <section className='max-w-xl w-full'>
        <form
          action={addIngredients}
          className='h-10 w-full mt-10 my-7 flex justify-center items-center gap-3'
        >
          <div className="h-full flex justify-center items-center w-full gap-5">
            <input
              className='bg-white h-full flex-grow border-2 border-gray-300 rounded px-2'
              placeholder='e.g. Bread'
              type="text"
              name="ingredient"
            />
            <button
              className='button h-full flex justify-center items-center bg-indigo-600 text-white text-sm px-4 rounded font-semibold hover:bg-indigo-700 transition duration-200'
            >
              + Add ingredient
            </button>
          </div>
        </form>

        {ingredients.length > 0 &&
          <IngredientsList
            showIngredients={showIngredients}
            ingredients={ingredients}
            handleToggle={handleToggle}
          />
        }
      </section>
      <section className="mb-10 m-5">
        {responceShown &&
          <Responce recipeText={recipeText} />
        }
      </section>
    </main>
  );
}

export default Main;
