import './acc.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Accueil() {
  // Créer des refs pour les animations au scroll
  const [introRef, introVisible] = useScrollAnimation({ threshold: 0.2 });
  const [educationRef, educationVisible] = useScrollAnimation({ threshold: 0.1 });
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id='accueil'>
      {/* HERO SECTION avec laptop */}
      <div className="py-12 sm:py-16 md:py-20 w-full bg-gray-200 relative flex justify-center">

        <div className="w-full h-[200px] sm:h-[250px] md:h-[350px] bg-white rounded-t-[100%] absolute bottom-0 left-0"></div>

        <div className="relative z-10 flex flex-col items-center px-4">
          
          <div className="relative w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px] animate-floatImage">
            
            <img 
              src="/laptop.png" 
              alt="Laptop"
              className="w-full"
            />
    
            <div className="absolute top-[5%] left-[12%] w-[76%] h-[62%] bg-white flex flex-col justify-center items-center text-center">
              <div className="absolute top-0 left-[80%] -translate-x-1/2 h-8 sm:h-10 md:h-13 w-[1px] bg-gray-700"></div>

              <p className="absolute tracking-wider text-[10px] sm:text-xs md:text-sm mt-2 top-[17%] left-[59%] text-gray-700">Sirine Ikram's</p>
              <h1 className="absolute tracking-wider text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium top-[30%] left-[50%] text-gray-700 hover:text-pink-600 active:text-pink-700 hover:scale-110 active:scale-105 transition-transform duration-300">Portfolio</h1>
              <p className="absolute top-[65%] left-[20%] text-[10px] sm:text-xs md:text-sm mt-2 tracking-wider text-gray-700">Ingénierie de Logiciels</p>

              <div className="absolute bottom-0 left-[21%] -translate-x-1/2 h-8 sm:h-10 md:h-12 w-[1px] bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* SECTION INTRODUCTION - Animation au scroll */}
      <div 
        ref={introRef}
        className={`w-full max-w-5xl mx-auto mt-5 mb-8 px-4 sm:px-6 transition-all duration-1000 ${
          introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >

        <div className="flex items-center gap-2 sm:gap-4">
          <h2 className="text-base sm:text-lg md:text-xl tracking-widest font-semibold text-gray-700 hover:text-pink-600 active:text-pink-700 hover:scale-110 active:scale-105 transition-transform duration-300 whitespace-nowrap">
            INTRODUCTION
          </h2>
          <div className="flex-1 h-[1px] bg-gray-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center items-center group order-1 md:order-1">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-70 md:h-94 transition-all duration-500 group-hover:scale-105 group-active:scale-[0.98]">
              <img 
                src="/portrait.jpg" 
                alt="portrait"
                className="absolute inset-0 w-full h-full rounded-full object-cover object-top border-4 border-gray-300 shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:border-pink-100 group-hover:scale-105 group-active:shadow-2xl group-active:border-pink-200"
              />
            
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-100/20 to-gray-100/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* TEXTE */}
          <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 order-2 md:order-2">
            <p className="text-sm sm:text-base md:text-lg">
              Je suis Sirine Ikram, diplômée d'un <span className="text-pink-600 font-semibold">Master 2 en Ingénierie de Logiciels</span>, je suis passionnée par 
              le développement web et la création de solutions numériques modernes, performantes
              et centrées sur l'utilisateur.
            </p>

            <p className="text-sm sm:text-base md:text-lg">
              J'aime transformer des idées en expériences interactives
              et intuitives, tout en combinant logique, créativité et bonnes pratiques du développement.
            </p>

            <p className="text-sm sm:text-base md:text-lg">
              Ce portfolio rassemble mes projets, mes compétences et mon évolution dans le monde du web et 
              du logiciel.
            </p>

            {/* ICÔNES SOCIALES + BOUTON CV */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
              <a href="https://www.facebook.com/ikra.much.14?locale=fr_FR" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 active:bg-pink-300 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                  <FaFacebookF className="text-pink-600 text-base sm:text-xl" />
                </div>
              </a>

              <a href="https://www.instagram.com/ikram_eme?igsh=aXB4b2V4enI1N2Jr" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 active:bg-pink-300 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                  <FaInstagram className="text-pink-600 text-base sm:text-xl" />
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ikram-sirine-b6481627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 active:bg-pink-300 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                  <FaLinkedinIn className="text-pink-600 text-base sm:text-xl" />
                </div>
              </a>

              <a href="https://github.com/ikram1sr?tab=overview&from=2025-12-01&to=2025-12-13" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 active:bg-pink-300 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                  <FaGithub className="text-pink-600 text-base sm:text-xl" />
                </div>
              </a>

              <a 
                href="/cv.pdf" 
                download
                className="inline-block"
              >
                <button className="
                  px-6 sm:px-8 md:px-10 py-2 sm:py-3 
                  bg-pink-100 
                  text-pink-600 
                  text-sm sm:text-base
                  rounded-full 
                  font-bold 
                  tracking-wide 
                  shadow-md 
                  hover:bg-pink-200 
                  active:bg-pink-300
                  hover:scale-105 
                  active:scale-95
                  hover:shadow-lg
                  active:shadow-xl
                  transition-all 
                  duration-300
                ">
                  CV
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Section ÉDUCATION - Animation au scroll */}
        <div 
          ref={educationRef}
          className={`w-full max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 px-0 transition-all duration-1000 ${
            educationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <h2 className="text-base sm:text-lg md:text-xl tracking-widest font-semibold text-gray-700 hover:text-pink-600 active:text-pink-700 hover:scale-110 active:scale-105 transition-transform duration-300 whitespace-nowrap">
              EDUCATION
            </h2>
            <div className="flex-1 h-[2px] bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Baccalauréat Scientifique", year: "2020", delay: 0 },
              { title: "Formation en anglais", year: "2021", school: "The Castle School", delay: 100 },
              { title: "Licence en Informatique Générale", year: "2021 - 2023", school: "USTHB", delay: 200 },
              { title: "Master 2 en Ingénierie de Logiciels", year: "2023 - 2025", school: "USTHB", delay: 300 }
            ].map((edu, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-pink-600 transform transition-all duration-700 hover:scale-105 active:scale-[0.98] hover:shadow-xl active:shadow-2xl hover:border-l-8 active:border-l-8 ${
                  educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: educationVisible ? `${edu.delay}ms` : '0ms' }}
              >
                <p className="text-pink-600 font-semibold text-base sm:text-lg">{edu.title}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{edu.year}</p>
                {edu.school && <p className="text-gray-600 text-sm sm:text-base mt-2">École : {edu.school}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Section COMPÉTENCES - Animation au scroll */}
        <div 
          ref={skillsRef}
          className={`w-full max-w-5xl mb-0 mt-12 sm:mt-16 md:mt-20 px-0 transition-all duration-1000 ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <h2 className="text-base sm:text-lg md:text-xl tracking-widest font-semibold text-gray-700 hover:text-pink-600 active:text-pink-700 hover:scale-110 active:scale-105 transition-transform duration-300 whitespace-nowrap">
              COMPÉTENCES
            </h2>
            <div className="flex-1 h-[2px] bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {[
              { title: "Outils Design", icon: "🛠️", skills: ['Photoshop', 'Illustrator', 'Figma', 'Canva'], delay: 0 },
              { title: "Soft Skills", icon: "💬", skills: ['Communication', 'Travail d\'équipe', 'Gestion du temps', 'Adaptabilité'], delay: 100 },
              { title: "Hard Skills", icon: "⚡", skills: ['Laravel', 'React', 'Vite', 'Node.js', 'Python', 'API', 'IA', 'Tailwind', 'HTML/CSS/JS', 'SQL Server'], delay: 200, span: "sm:col-span-2 lg:col-span-1" }
            ].map((category, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200 transform transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl active:shadow-2xl hover:border-pink-600 active:border-pink-700 ${
                  category.span || ''
                } ${
                  skillsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: skillsVisible ? `${category.delay}ms` : '0ms' }}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center transition-colors duration-300">
                    <span className="text-gray-600 text-xl sm:text-2xl transition-colors duration-300">{category.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-pink-100 text-pink-700 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-sm active:shadow-md hover:bg-pink-200 active:bg-pink-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Fin de page avec fond gris + demi cercle blanc */}
      <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px] bg-gray-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[150px] sm:h-[180px] md:h-[200px] bg-white rounded-b-[100%]"></div>
      </div>

      <style>{`
        @keyframes floatImage {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-floatImage {
          animation: floatImage 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}