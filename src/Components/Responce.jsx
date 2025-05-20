import ReactMarkdown from 'react-markdown';

function Responce({ recipeText }) {
  return (
    <section className='p-4'>
      <ReactMarkdown>{recipeText}</ReactMarkdown>
    </section>
  );
}

export default Responce;
