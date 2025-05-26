import ReactMarkdown from 'react-markdown';

function Responce({ recipeText }) {
  return (
    <div className='recipe-card bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto flex justify-center items-center min-h-[150px]'>
      {recipeText ? (
        <div className='text-gray-600 w-full leading-[1.6]'>
          <ReactMarkdown>{recipeText}</ReactMarkdown>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <div className='animate-spin rounded-full h-10 w-10 border-4 border-indigo-600 border-t-transparent mb-2'></div>
          <p className='text-indigo-600 text-sm'>Generating your recipe...</p>
        </div>
      )}
    </div>
  );
}

export default Responce;

