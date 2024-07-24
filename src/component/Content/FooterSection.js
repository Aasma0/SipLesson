import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-8" style={{backgroundColor : '#7D806A'}}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold">Sip Lesson</h4>
          <p className="text-sm">© 2024 Sip Lesson. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-white hover:text-yellow-500">Home</a>
          <a href="#" className="text-white hover:text-yellow-500">History</a>
          <a href="#" className="text-white hover:text-yellow-500">Recipe</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-yellow-500">Facebook</a>
          <a href="#" className="text-white hover:text-yellow-500">Twitter</a>
          <a href="#" className="text-white hover:text-yellow-500">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
