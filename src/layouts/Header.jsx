import { useState } from "react";
import { Link } from "react-router-dom";

const navlist = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo / Nom */}
        <div className="text-xl font-bold text-gray-700 hover:text-pink-600
                hover:scale-110 transition-transform duration-300 drop-shadow-md">
          Sirine Ikram
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">

          {navlist.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* BOUTON CONTACTER-MOI */}
          <Link
            to="/contact"
            className="bg-pink-500 text-white px-5 py-2 rounded-full font-medium
              shadow-md hover:bg-pink-600 transition duration-300 relative
              animate-pulse hover:scale-105"
          >
            Contacter moi
          </Link>
        </nav>

        {/* Bouton mobile */}
        <button
          className="md:hidden text-gray-700 hover:text-pink-300 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          {navlist.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-6 py-4 text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors duration-200 border-b border-gray-100 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* BOUTON CONTACT MOBILE */}
          <Link
            to="/contact"
            className="block px-6 py-4 text-white bg-pink-500 font-medium text-center
              hover:bg-pink-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacter moi
          </Link>
        </nav>
      )}
    </header>
    
  );
};

export default Header;
