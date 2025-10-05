
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = 'px-4 py-2 text-lg font-medium text-victrix-blue hover:text-victrix-yellow transition-colors duration-300';
  const activeLinkClasses = 'text-victrix-yellow';

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Services</NavLink>
            <NavLink to="/contact" className="ml-4 px-6 py-2 bg-victrix-yellow text-victrix-blue font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300">
              Contact Us
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-victrix-blue focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center space-y-2">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Services</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="mt-2 w-full text-center px-6 py-2 bg-victrix-yellow text-victrix-blue font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300">
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
