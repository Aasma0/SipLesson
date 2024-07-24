import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="bg-yellow-100 py-20" style={{backgroundColor:'#EEF0DC'}}>
      <h2 className="text-3xl font-bold text-center mb-8" >Advantages</h2>
      <div className="container mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          <img src="/image/benefits2.png" alt="Tea" className="object-cover mb-4 md:mb-0 md:mr-6" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">The Hidden Health Benefits Of Tea</h3>
            <p className="mb-4">Tea offers a range of health benefits. Find out more about how it can improve your well-being.</p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded" style={{backgroundColor: '#7D806A'}}>Explore</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          <img src="/image/benefits.png" alt="Coffee" className="object-cover mb-4 md:mb-0 md:mr-6" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">The Hidden Health Benefits Of Coffee</h3>
            <p className="mb-4">Coffee is not only delicious but also has several health benefits. Learn more about them here.</p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded" style={{backgroundColor: '#7D806A'}}>Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
