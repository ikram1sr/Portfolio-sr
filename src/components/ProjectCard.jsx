
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ image, title, slug, logo, color = 'pink' , logoShape = 'square' }) {

  const colorVariants = {
    pink: {
      text: 'text-pink-100 group-hover:text-pink-400',
      bg: 'bg-pink-600',
      bgHover: 'hover:bg-pink-700'
    },
    blue: {
      text: 'group-hover:text-blue-400',
      bg: 'bg-blue-600',
      bgHover: 'hover:bg-blue-700'
    },
    purple: {
      text: 'group-hover:text-purple-400',
      bg: 'bg-purple-600',
      bgHover: 'hover:bg-purple-700'
    },
    green: {
      text: 'group-hover:text-green-400',
      bg: 'bg-green-600',
      bgHover: 'hover:bg-green-700'
    },
    orange: {
      text: 'text-orange-100 group-hover:text-orange-400',
      bg: 'bg-orange-600',
      bgHover: 'hover:bg-orange-700'
    },
    red: {
      text: 'group-hover:text-red-400',
      bg: 'bg-red-600',
      bgHover: 'hover:bg-red-700'
    },
    teal: {
      text: 'group-hover:text-teal-400',
      bg: 'bg-teal-600',
      bgHover: 'hover:bg-teal-700'
    },
    yellow: {
      text: 'group-hover:text-yellow-400',
      bg: 'bg-yellow-600',
      bgHover: 'hover:bg-yellow-700'
    }
  };

  const currentColor = colorVariants[color] || colorVariants.pink;

  return (
    <div className="block group">
      <div
        className="relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-xl overflow-hidden shadow-lg transform group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
        
        {/* Contenu de la carte */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          
          {/* Logo du projet */}
          {logo && (
            <div className={`mb-4 overflow-hidden bg-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center 
              ${logoShape === 'rectangle' 
                ? 'w-32 h-20 md:w-35 md:h-15 rounded-lg' 
                : 'w-17 h-17 md:w-24 md:h-24 rounded-full'
              }`}>
              <img 
                src={logo} 
                alt={`${title} logo`} 
                className={`${logoShape === 'rectangle' ? 'max-w-full max-h-full object-contain' : 'w-full h-full object-cover'}`} 
              />
            </div>
          )}
          
          
          {/* Nom du projet */}
          <h3 className={` text-xl md:text-2xl font-bold italic mb-6 ${currentColor.text} transition-colors duration-300`}>
            {title}
          </h3>
          
          {/* Bouton voir détails */}
          <Link 
            to={`/projets/${slug}`}
            className={`px-6 py-3 ${currentColor.bg} ${currentColor.bgHover} text-white font-semibold rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300`}
          >
            Voir les détails
          </Link>
        </div>
      </div>
    </div>
  );
}