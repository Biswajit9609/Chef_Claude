import React from 'react';

function IngredientsList(props) {
  return (
    <section className='bg-white rounded-lg shadow-md p-6 mb-6'>
      <h1 className='font-semibold text-2xl text-center text-indigo-600'>Ingredients on hand:</h1>
      <ul className='list-disc list-inside mt-4 text-gray-700'>
        {props.showIngredients}
      </ul>
      {props.ingredients.length > 3 && (
        <div className='getRecipe mt-6 bg-indigo-100 p-4 rounded flex items-center justify-between'>
          <div>
            <h2 className='font-semibold text-lg mb-1 text-indigo-800'>Ready for a recipe?</h2>
            <p className='text-sm text-indigo-700'>Generate a recipe from your list of ingredients.</p>
          </div>
          <button
            className='bg-indigo-600 text-white font-bold px-4 py-2 rounded hover:bg-indigo-700 transition duration-200'
            onClick={props.handleToggle}
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
