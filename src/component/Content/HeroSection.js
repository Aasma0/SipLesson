// // component/Content/HeroSection.js
// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="py-20" style={{backgroundColor:'#FFFADA'}}>
//       <div className="container mx-auto flex md:flex-row items-center justify-between">
//         <div className="text-left md:mr-8 mb-8 md:mb-0">
//           <h1 className="text-4xl font-bold mb-4">Sip Lesson</h1>
//           <p className="text-gray-700 mb-4">Discover the world of coffee and tea with us!</p>
//           <button className="text-white py-2 px-6 rounded-full" style={{backgroundColor: '#7D806A'}}>Explore</button>
//         </div>
//         <div className="relative">
//           <img
//             src="/image/teacup.png"
//             alt="Teacup "
//             className="relative z-10 w-72 h-64 right-20 object-cover rounded-lg shadow-lg"
//           />
//           <img
//             src="/image/coffee.png"
//             alt="Coffee"
//             className="absolute top-10 left-8 transform z-0 w-72 h-64 object-cover rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// component/Content/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 py-20" style={{backgroundColor:'#EEF0DC'}} >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="text-left md:w-1/2 px-4 md:px-0">
          <h2 className="text-5xl uppercase font-bold  mb-2">Siplesson</h2>
          <h1 className="text-sm font-thin mb-6">Discover the world of coffee and tea with us</h1>
          <button className="bg-gray-500 text-white py-2 px-6 rounded-full mt-10" style={{backgroundColor: '#7D806A'}}>Explore</button>
          <img src="/image/coffee3.png" alt="Tea cups" className="h-32 w-40"/>
          <img src="/image/leaves.png" alt="Tea cups" className="h-32 w-40"/>
        </div>
        <div className="md:w-1/2 px-4 md:px-0 mb-6 md:mb-0">
          <img
            src="/image/teacup.png"
            alt="Tea cups"
            className="rounded-lg shadow-lg w-full"
          />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

