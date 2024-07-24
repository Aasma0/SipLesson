import React from 'react';

const RecipeCard = ({ title, description, image }) => (
  <div className="bg-white p-4 rounded shadow max-w-xs">
    <img src={image} alt={title} className="mb-4 h-40 w-full object-cover" />
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p>{description}</p>
    <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4" style={{backgroundColor: '#7D806A'}}>Explore</button>
  </div>
);

const RecipesSection = () => {
  const recipes = [
    { title: 'Cappuccino', description: 'A delicious cappuccino.', image: 'image/lattee.jpg' },
    { title: 'Latte', description: 'A creamy latte.', image: 'image/lattee.jpg' },
    { title: 'Macchiato', description: 'A strong macchiato.', image: 'image/lattee.jpg' },
  ];

  return (
    <section className="bg-gray-100 py-20" style={{backgroundColor:'#F1E9D6'}}>
      <h2 className="text-3xl font-bold text-center mb-8">Our Recipe</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.title} {...recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipesSection;
