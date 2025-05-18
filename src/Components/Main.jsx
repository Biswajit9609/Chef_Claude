import {useState} from 'react'

function Main() {
    const [ingredients,setIngredients]=useState(["Salt", "Onion", "Garlic", "Oil"]
)
    const showIncredients = ingredients.map((items)=>{
        return (
            <li key={items} className='mx-12 p-2 text-[#475467]'>{items}</li>
        )
    })
    function addIngredients(formData){
        const newIngredient = formData.get("hello")
        setIngredients((prev)=>[...prev,newIngredient])
    }
  return (
    <main className='max-w-[30rem] mt-[4rem]'>
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
            <button className='button h-[95%] flex justify-center items-center bg-black text-white text-[0.75rem] px-[0.9rem] rounded-[0.2rem] border-none font-semibold'> + Add ingridient</button>
        </form>
        {ingredients.length?<section className='flex flex-wrap justify-center items-center'>
            <h1 className='font-semibold text-[1.8rem] mx-8'>Ingredients on hand:</h1>
            <ul  className='list-disc list-inside w-full mt-5' >
                {showIncredients}
            </ul>
            <div className='getRecipe h-25 px-5 py-0 my-10 mx-5 rounded-[0.5rem] bg-[#F0EFEB] flex items-center gap-3'>
                <div className='w-[60%]'>
                    <h2 className='font-semibold text-[1rem] mb-1'>Ready for a recipe?</h2>
                    <p className='text-[0.7rem] w-[85%]'>Generate a recipe from your list of ingredients.</p>
                </div>
                <button className='flex text-[0.8rem] text-white font-bold px-3 py-2 bg-[#D17557] rounded-[0.3rem]'>Get a recipe</button>
            </div>
        </section>:null}
    </main>
  )
}

export default Main