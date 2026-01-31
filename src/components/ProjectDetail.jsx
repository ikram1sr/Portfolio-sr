
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {ProjectData} from '../data/ProjectData';

export default function ProjectDetail() {
  const { slug } = useParams();

  const projectData = ProjectData[slug];

  // Si le projet n'existe pas, rediriger
  if (!projectData) {
    return <Navigate to="/projets" replace />;
  }

  // Styles de couleurs dynamiques
  const colorStyles = {
    orange: {
      gradient: "from-orange-500 to-orange-600",
      gradientHover: "from-orange-600 to-orange-700",
      text: "text-orange-600",
      textHover: "hover:text-orange-600",
      bg: "bg-orange-500",
      bgLight: "bg-orange-50",
      bgGradient: "from-orange-50 via-white to-orange-50",
      border: "border-orange-500",
      borderLight: "border-orange-100",
      overlay: "to-orange-900/70",
      badge: "bg-orange-100 border-orange-200 text-orange-600"
    },
    pink: {
      gradient: "from-pink-500 to-pink-600",
      gradientHover: "from-pink-600 to-pink-700",
      text: "text-pink-600",
      textHover: "hover:text-pink-600",
      bg: "bg-pink-500",
      bgLight: "bg-pink-50",
      bgGradient: "from-pink-50 via-white to-pink-50",
      border: "border-pink-600",
      borderLight: "border-pink-100",
      overlay: "to-pink-900/70",
      badge: "bg-pink-100 border-pink-200 text-pink-600"
    },
    
  };

  const colors = colorStyles[projectData.color] || colorStyles.orange;

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section avec image de fond */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${colors.bgGradient} py-20`}>
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img 
            src={projectData.heroImage} 
            alt={`${projectData.title} Background`}
            className="w-full h-full object-cover"
            
          />
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 ${colors.overlay}`}></div>
          <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient}/20 via-transparent ${colors.gradient}/20 animate-gradient`}></div>
        </div>
        
        {/* Formes décoratives animées */}
        <div className={`absolute top-20 right-10 w-72 h-72 bg-gradient-to-br ${colors.gradient}/30 rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr ${colors.gradient}/20 rounded-full blur-3xl animate-floatDelay`}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`inline-block px-4 py-2 ${colors.badge} backdrop-blur-sm border rounded-full mb-6 animate-slideDown`}>
            <span className="font-semibold text-sm">{projectData.year}</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 animate-slideUp drop-shadow-2xl">
            {projectData.title}
          </h1>
          
          <p className={`text-2xl sm:text-3xl ${projectData.color === 'orange' ? 'text-orange-200' : projectData.color === 'pink' ? 'text-pink-200' : 'text-green-200'} mb-8 max-w-3xl animate-slideUp drop-shadow-lg`} style={{animationDelay: '0.1s'}}>
            {projectData.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slideUp" style={{animationDelay: '0.2s'}}>
            <div className={`px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border ${colors.borderLight}`}>
              <span className={`${colors.text} font-bold text-lg`}>{projectData.features.length} Modules</span>
            </div>
            <div className={`px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border ${colors.borderLight}`}>
              <span className={`${colors.text} font-bold text-lg`}>{projectData.technologies.length} Technologies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Contexte et Impact */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 animate-fadeIn">
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                📖
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Contexte</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {projectData.resume}
            </p>
          </div>
          
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                🎯
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Impact</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {projectData.impact}
            </p>
          </div>
        </section>

        {/* Objectifs */}
        <section className="mb-20 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Objectifs du projet
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projectData.objectifs.map((obj, index) => (
              <div 
                key={index}
                className={`group flex items-start gap-4 p-6 bg-gradient-to-br ${colors.bgLight} to-white border ${colors.borderLight} rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slideIn`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:rotate-12 transition-transform duration-300`}>
                  ✓
                </div>
                <span className="text-gray-700 font-medium">{obj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="mb-20 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Fonctionnalités principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:${colors.border} hover:shadow-2xl transition-all duration-300 overflow-hidden animate-scaleIn`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}/0 ${colors.gradient}/0 group-hover:${colors.gradient}/5 group-hover:${colors.gradient}/10 transition-all duration-300`}></div> */}
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:${colors.text} transition-colors`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-20 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Technologies utilisées
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.technologies.map((tech, index) => (
              <div 
                key={index}
                className={`group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:${colors.border} hover:shadow-xl transition-all duration-300 overflow-hidden animate-slideIn`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative flex items-center gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <div>
                    <h3 className={`text-xl font-bold text-gray-900 group-hover:${colors.text} transition-colors`}>
                      {tech.name}
                    </h3>
                    <p className="text-sm text-gray-600">{tech.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-20 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Architecture technique
          </h2>
          <div className="space-y-4">
            {projectData.architecture.map((layer, index) => (
              <div 
                key={index}
                className={`group flex items-center gap-6 p-6 bg-gradient-to-r ${colors.bgLight} to-white border-2 ${colors.borderLight} rounded-2xl hover:${colors.border} hover:shadow-xl transition-all duration-300 animate-slideIn`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 ${layer.color} rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{layer.layer}</h3>
                  <p className={`${colors.text} font-semibold mb-2`}>{layer.tech}</p>
                  <p className="text-gray-600">{layer.desc}</p>
                </div>
                <div className={`px-4 py-2 ${colors.bgLight} rounded-full ${colors.text} font-mono font-bold`}>
                  :{layer.port}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-20 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Aperçu de l'application
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectData.screenshots.map((screenshot, index) => (
              <div 
                key={index}
                className={`group relative rounded-2xl overflow-hidden border-2 border-gray-200 hover:${colors.border} hover:shadow-2xl transition-all duration-300 animate-scaleIn`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`aspect-video bg-gradient-to-br ${colors.bgLight} ${colors.bgLight}/50 relative overflow-hidden`}>
                  <img 
                    src={screenshot.url}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold">{screenshot.title}</h3>
                  <p className={`${projectData.color === 'orange' ? 'text-orange-200' : projectData.color === 'pink' ? 'text-pink-200' : 'text-green-200'} text-sm`}>{screenshot.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative rounded-3xl overflow-hidden animate-fadeIn">
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} ${colors.gradientHover} animate-gradient`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]"></div>
          
          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explorez le code source
            </h2>
            <p className={`text-xl ${projectData.color === 'orange' ? 'text-orange-100' : projectData.color === 'pink' ? 'text-pink-100' : 'text-green-100'} mb-8 max-w-2xl mx-auto`}>
              Découvrez l'architecture complète et les détails d'implémentation sur GitHub
            </p>
            <a 
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-10 py-5 bg-white ${colors.text} rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300`}
            >
              <span>🔗</span>
              Voir le repository
              <span>→</span>
            </a>
          </div>
        </section>

      </div>

      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes floatDelay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-floatDelay {
          animation: floatDelay 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
      `}</style>

    </div>
  );
}