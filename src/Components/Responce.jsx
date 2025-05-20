import ReactMarkdown from 'react-markdown';

function Responce({ recipeText }) {
  return (
    <section className="p-6 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto prose prose-lg prose-indigo">
      <ReactMarkdown>{recipeText}</ReactMarkdown>
    </section>
  );
}

export default Responce;
