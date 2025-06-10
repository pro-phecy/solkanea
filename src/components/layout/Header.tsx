import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['Home', 'Services', 'About', 'Blog', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
      <div className="container flex items-center justify-between">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="solkanea.png" height={50} width={50} alt="SolKanea logo" />
          <span className="text-xl font-bold text-primary-800">SolKanea</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) => `
                text-base font-medium transition-colors
                ${isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}
              `}
            >
              {item}
            </NavLink>
          ))}
          <Link 
            to="/contact"
            className="bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => `
                  text-base font-medium py-2 
                  ${isActive ? 'text-primary-600' : 'text-gray-700'}
                `}
                onClick={toggleMenu}
              >
                {item}
              </NavLink>
            ))}
            <Link 
              to="/contact"
              className="bg-primary-600 text-white py-2 px-4 rounded-md text-center"
              onClick={toggleMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
