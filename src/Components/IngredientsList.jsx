import React from 'react'

function IngredientsList(props) {
  return (
    <section className='flex flex-wrap justify-center items-center'>
            <h1 className='font-semibold text-[1.8rem] mx-8'>Ingredients on hand:</h1>
            <ul  className='list-disc list-inside w-full mt-5' >
                {props.showIncredients}
            </ul>
            {(props.ingredients.length>3) ? <div className='getRecipe h-25 px-5 py-0 my-10 mx-5 rounded-[0.5rem] bg-[#F0EFEB] flex items-center gap-3'>
                <div className='w-[60%]'>
                    <h2 className='font-semibold text-[1rem] mb-1'>Ready for a recipe?</h2>
                    <p className='text-[0.7rem] w-[85%]'>Generate a recipe from your list of ingredients.</p>
                </div>
                <button className='flex text-[0.8rem] text-white font-bold px-3 py-2 bg-[#D17557] rounded-[0.3rem]' onClick={props.handleToggle}>Get a recipe</button>
            </div>:null}
        </section>
  )
}

export default IngredientsList