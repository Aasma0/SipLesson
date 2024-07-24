// component/Content/OfferingsSection.js
import React from 'react';

const OfferingsSection = () => {
  const offerings = [
    {
      title: 'History',
      description: 'Lorem Lorem Lorem Lorem.',
      image: '/image/offer3.png', 
    },
    {
      title: 'Health Benefits',
      description: 'Lorem Lorem Lorem Lorem.',
      image: '/image/offer2.png', 
    },
    {
      title: 'Recipe',
      description: 'Lorem Lorem Lorem Lorem.',
      image: '/image/offer1.png', 
    },
  ];

  return (
    <section className="py-20" style={{backgroundColor:'#F1E9D6'}}>
      <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {offerings.map((offering, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={offering.image} alt={offering.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center p-4 text-center text-white">
              <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
              <p className="mb-4">{offering.description}</p>
              <button className="bg-gray-700 text-white py-2 px-4 rounded">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;
