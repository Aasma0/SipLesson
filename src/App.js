import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainContent from './component/Content/MainContent';
import ContactUs from './component/form/ContactUs';
import Login from './component/form/Login';
import Register from './component/form/Register';
import NavbarComponent from './component/Navbar/NavbarComponent';
import CategoryComponent from './component/category/CategoryComponent';
import './tailwind.css';
import AddProductComponent from './component/Recipe/AddProductComponent';

// A component that conditionally renders the Navbar
const AppWithNavbar = () => {
  const location = useLocation();

  // Hide Navbar on login and registration pages
  const shouldHideNavbar = location.pathname === '/login' || location.pathname === '/registration';

  return (
    <>
      {!shouldHideNavbar && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/recipe" element={<AddProductComponent />} />
        <Route path="/category" element={< CategoryComponent/>} />
        <Route path="/" element={<MainContent />} /> {/* Default route */}
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWithNavbar />
    </Router>
  );
}

export default App;
