import { GoogleGenAI } from "@google/genai";
import { useState } from 'react';
import IngredientsList from './IngredientsList';
import Responce from './Responce';

function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [responceShown, setResponceShown] = useState(false);
    const [recipeText, setRecipeText] = useState('');
    function addIngredients(formData) {
        const newIngredient = formData.get("hello");
    if (newIngredient.trim()) {
        setIngredients(prev => [...prev, newIngredient]);
    }
}

const showIncredients = ingredients.map((item) => (
    <li key={item} className='mx-12 p-2 text-[#475467]'>{item}</li>
));

async function handleToggle() {
    setResponceShown(true);
    const aiResponse = await getRecipeFromAI();
    setRecipeText(aiResponse);
}
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY });


  const prompt = `Here are the ingredients: ${ingredients.join(", ")}.\n
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your responce in markdown to make it easier to render to a web page
// `;
  async function getRecipeFromAI() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:prompt,
  });
  return response.text
}

  return (
    <main className='w-full mt-[4rem]'>
      <section className='max-w-[30rem]'>
        <form
          action={addIngredients}
          className='h-[2.2rem] w-full mt-10 my-7 px-[3rem] flex justify-center items-center gap-3'
        >
          <input
            className='bg-white h-full flex grow-[1] w-[180px] sm:max-w-[20rem] sm:min-w[200px] border-2 border-[#ced4da] rounded-[0.3rem] px-2'
            placeholder='e.g. Bread'
            type="text"
            name="hello"
          />
          <button className='button h-[95%] flex justify-center items-center bg-black text-white text-[0.75rem] px-[0.9rem] rounded-[0.2rem] border-none font-semibold'>+ Add ingredient</button>
        </form>

        {ingredients.length > 0 &&
          <IngredientsList
            showIncredients={showIncredients}
            ingredients={ingredients}
            handleToggle={handleToggle}
          />
        }
      </section>

      {responceShown &&
        <Responce recipeText={recipeText} />
      }
    </main>
  );
}

export default Main;
