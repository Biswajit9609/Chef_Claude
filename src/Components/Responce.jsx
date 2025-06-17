import ReactMarkdown from 'react-markdown';

function Responce({ recipeText }) {
    return (
        <div className='bg-[#1a1a1a] text-white rounded-lg shadow-lg p-6 min-h-[200px]'>
            {recipeText ? (
                <div className='prose prose-invert max-w-none'>
                    <ReactMarkdown>{recipeText}</ReactMarkdown>
                </div>
            ) : (
                <div className='flex flex-col items-center'>
                    <div className='animate-spin rounded-full h-10 w-10 border-4 border-emerald-500 border-t-transparent mb-2'></div>
                    <p className='text-emerald-500 text-sm'>Generating your recipe...</p>
                </div>
            )}
        </div>
    );
}

export default Responce;
