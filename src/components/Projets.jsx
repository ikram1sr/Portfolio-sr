import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projetsData = [
  { slug: 'cake-shop', title: "L'art de la pâtisserie, l'élégance du web", image: '/cakeshop/cakeshop.jfif' , logo: '/cakeshop/design cake.png' , color: 'pink' , logoShape : 'square'},
  { slug: 'hse-management', title: "Solution moderne pour une conformité HSE efficace", image: '/hse/gcb.png' , logo: '/hse/logogcb.png' , color : 'orange' , logoShape : 'square'},
  { slug: 'carpooling', title: "Partagez la route, économisez ensemble", image: '/carpooling/carpooling.jfif' , logo: '/carpooling/logocar.png' , color : 'pink' , logoShape : 'rectangle'},
];

export default function Projets() {
  return (
    <section id="projets">

        <div className="py-20 w-full bg-gray-200 relative flex justify-center ">

        <div className="w-full h-[300px] bg-white rounded-t-[100%] absolute top-15 bottom-0 left-0"></div>

        {/* CONTENU */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl font-bold text-gray-700 mb-4 hover:text-pink-600 hover:scale-110 transition-transform duration-300">
            Mes Projets
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Découvrez une sélection de mes projets en développement web,
            créations modernes, interfaces UI/UX et applications dynamiques.
          </p>
        </div>
      </div>

      
     <div className="w-full mx-auto px-5 py-20  flex flex-col items-center space-y-15">
      {projetsData.map((p) => (
        <div key={p.slug} className="w-full max-w-5xl">
          <ProjectCard {...p} />
        </div>
      ))}
    </div>
    <div className="relative w-full h-[200px] bg-gray-200 overflow-hidden">
        {/* Demi cercle blanc en haut (arrondi vers le bas) */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-white rounded-b-[100%]"></div>
      </div>
    </section>
  );
}