import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg" style={{backgroundColor : '#7D806A'}} >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo and primary items */}
        <div className="flex items-center space-x-7">
          <Link to="/" className="flex items-center py-4 px-2">
            <img src="/image/logo.png" alt="Logo" className="h-20 w-20 rounded-full" /> 
          </Link>
          <div className="hidden md:flex space-x-4">
            {/* <Link to="/" className="py-4 px-2 text-gray-700 font-semibold hover:text-brown-700 transition duration-300">Home</Link> */}
            <Link to="/contact" className="py-4 px-2 text-gray-700 font-semibold hover:text-brown-700 transition duration-300">Contact</Link>
          </div>
        </div>
        {/* Secondary items */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login" className="py-2 px-2 font-medium text-gray-700 rounded hover:bg-gray-200 transition duration-300">Login</Link>
          <Link to="/registration" className="py-2 px-2 font-medium text-gray-700 rounded hover:bg-gray-200 transition duration-300">Sign Up</Link>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden flex items-center outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-gray-700 hover:text-brown-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul>
            {/* <li><Link to="/" className="block text-sm px-2 py-4 text-white bg-brown-700 font-semibold">Home</Link></li> */}
            <li><Link to="/contact" className="block text-sm px-2 py-4 hover:bg-brown-700 transition duration-300">Contact</Link></li>
            <li><Link to="/login" className="block text-sm px-2 py-4 hover:bg-brown-700 transition duration-300">Log In</Link></li>
            <li><Link to="/registration" className="block text-sm px-2 py-4 hover:bg-brown-700 transition duration-300">Sign Up</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavbarComponent;
