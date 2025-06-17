function IngredientsList({ showIncredients, ingredients, handleToggle }) {
    return (
        <div className='bg-[#1a1a1a] p-6 rounded-lg shadow-md'>
            <h1 className='text-2xl font-semibold mb-4'>Ingredients on hand</h1>
            <ul className='list-disc list-inside space-y-1 mb-6'>
                {showIncredients}
            </ul>
            {ingredients.length > 3 && (
                <div className='flex justify-between items-center bg-[#262626] p-4 rounded-md'>
                    <div>
                        <h2 className='font-semibold text-lg'>Ready for a recipe?</h2>
                        <p className='text-sm text-gray-400'>Generate a recipe using your ingredients.</p>
                    </div>
                    <button
                        className='bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-bold'
                        onClick={handleToggle}
                    >
                        Get Recipe
                    </button>
                </div>
            )}
        </div>
    );
}

export default IngredientsList;
