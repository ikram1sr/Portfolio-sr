// src/pages/Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '', // 'success' ou 'error'
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // IMPORTANT : Remplacez ces valeurs par les vôtres depuis EmailJS
    const SERVICE_ID = 'service_5cnms0p';
    const TEMPLATE_ID = 'template_cqmfihm';
    const PUBLIC_KEY = 'keQPdf6QID2K1D4w8';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('✅ Email envoyé avec succès:', result.text);
        setStatus({
          type: 'success',
          message: 'Message envoyé avec succès ! Je vous répondrai bientôt.'
        });
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('❌ Erreur lors de l\'envoi:', error.text);
        setStatus({
          type: 'error',
          message: 'Erreur lors de l\'envoi. Veuillez réessayer.'
        });
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-orange-500/5 animate-gradient"></div>
        
        {/* Formes décoratives */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-orange-300/15 to-pink-500/15 rounded-full blur-3xl animate-floatDelay"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-pink-100 border border-pink-200 rounded-full mb-6 animate-slideDown">
            <span className="text-pink-600 font-semibold text-sm">Restons en contact</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slideUp">
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp" style={{animationDelay: '0.1s'}}>
            Une question ? Un projet ? N'hésitez pas à me contacter
          </p>
        </div>
      </div>

      {/* Section Contact */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Informations de contact */}
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Je suis disponible pour discuter de nouveaux projets, d'opportunités de collaboration ou simplement échanger sur le développement web.
              </p>
            </div>

            {/* Coordonnées */}
            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 bg-gradient-to-br from-pink-50 to-white border-2 border-pink-100 rounded-xl hover:border-pink-500 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  📧
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:ikramsirine28@gmail.com" className="text-gray-600">
                    ikramsirine28@gmail.com
                  </a>
                </div>
              </div>

              

              <div className="group flex items-start gap-4 p-4 bg-gradient-to-br from-pink-50 to-white border-2 border-pink-100 rounded-xl hover:border-pink-500 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Localisation</h3>
                  <p className="text-gray-600">boumerdes, Algérie</p>
                </div>
              </div>
            </div>

           
          </div>

          {/* Formulaire de contact */}
          <div className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nom */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300"
                  placeholder="votre.email@example.com"
                />
              </div>

              {/* Sujet */}
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300"
                  placeholder="Objet de votre message"
                />
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none resize-none transition-all duration-300"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              {/* Message de statut */}
              {status.message && (
                <div className={`p-4 rounded-xl border-2 animate-slideIn ${
                  status.type === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-700' 
                    : 'bg-red-50 border-red-200 text-red-700'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{status.type === 'success' ? '✅' : '❌'}</span>
                    <span className="font-medium">{status.message}</span>
                  </div>
                </div>
              )}

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Envoyer le message
                    <span>📧</span>
                  </span>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Fin de page avec demi-cercle */}
      <div className="relative w-full h-[200px] bg-gray-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[200px] bg-white rounded-b-[100%]"></div>
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

    </section>
  );
}