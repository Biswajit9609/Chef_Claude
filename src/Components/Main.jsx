import { GoogleGenAI } from "@google/genai";
import { useState } from 'react';
import IngredientsList from './IngredientsList';
import Responce from './Responce';

function Main() {
    const [ingredients, setIngredients] = useState(["All the spices", "salt"]);
    const [responceShown, setResponceShown] = useState(false);
    const [recipeText, setRecipeText] = useState('');

    function addIngredients(formData) {
        const newIngredient = formData.get("hello");
        if (newIngredient.trim()) {
            setIngredients(prev => [...prev, newIngredient]);
        }
    }

    const showIncredients = ingredients.map((item) => (
        <li key={item} className='text-sm text-gray-300'>{item}</li>
    ));

    async function handleToggle() {
        setResponceShown(true);
        const aiResponse = await getRecipeFromAI();
        setRecipeText(aiResponse);
    }

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY });

    const prompt = `Here are the ingredients: ${ingredients.join(", ")}.\n
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make...`;

    async function getRecipeFromAI() {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });
        return response.text;
    }

    return (
        <main className='min-h-screen w-full bg-[#0f0f0f] text-white px-4 py-10 flex flex-wrap justify-center gap-8'>
            <section className='w-full max-w-xl'>
                <form
                    action={addIngredients}
                    className='flex gap-3 items-center mb-8'
                >
                    <input
                        className='flex-1 bg-[#1c1c1c] border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400'
                        placeholder='e.g. Bread'
                        type="text"
                        name="hello"
                    />
                    <button
                        className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-md'
                    >
                        + Add
                    </button>
                </form>

                {ingredients.length > 0 &&
                    <IngredientsList
                        showIncredients={showIncredients}
                        ingredients={ingredients}
                        handleToggle={handleToggle}
                    />
                }
            </section>

            <section className="w-full max-w-3xl">
                {responceShown && <Responce recipeText={recipeText} />}
            </section>
        </main>
    );
}

export default Main;
