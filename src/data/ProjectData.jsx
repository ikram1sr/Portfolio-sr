// src/data/projectsData.js

export const ProjectData = {
  'hse-management': {
    title: "HSE Management",
    subtitle: "Système de Gestion des Incidents et Accidents",
    year: "2025",
    color: "orange",
    heroImage: "/hse/gcb.png",
    github: "https://github.com/ikram1sr/HSE-Managment",
    
    resume: "La société GCB, engagée dans le respect des normes HSE, a lancé le développement d'une application web dédiée à la gestion des incidents et accidents. Ces événements, soudains et imprévus, peuvent avoir un impact sur la santé, la sécurité ou l'environnement. L'ancien outil ne répondant plus aux exigences actuelles, une refonte s'est imposée pour mieux accompagner l'évolution des pratiques et réglementations.",
    
    impact: "Cette solution renforce la conformité, améliore les processus de gestion HSE et favorise une culture de prévention continue. L'intégration de l'IA constitue un levier stratégique pour améliorer la réactivité et la prise de décision sur le terrain.",
    
    objectifs: [
      "Archivage détaillé des événements HSE",
      "Envoi automatique d'alertes pour les cas graves ou récurrents",
      "Génération automatisée de rapports PDF",
      "Module d'intelligence artificielle pour prédire les causes probables",
      "Recommandations adaptées via IA",
      "Amélioration de la conformité et des processus HSE"
    ],
    
    features: [
      {
        title: "Gestion des Incidents",
        description: "Enregistrement détaillé et suivi des incidents avec classification par gravité",
        icon: "🎯"
      },
      {
        title: "Alertes Automatiques",
        description: "Système d'alerte intelligent pour les événements graves ou récurrents",
        icon: "🚨"
      },
      {
        title: "Rapports PDF",
        description: "Génération automatique de comptes-rendus et rapports de sécurité",
        icon: "📊"
      },
      {
        title: "Prédiction IA",
        description: "Module d'IA pour prédire les causes probables et proposer des recommandations",
        icon: "🤖"
      },
      {
        title: "Tableaux de Bord",
        description: "Visualisation des données HSE avec graphiques interactifs",
        icon: "📈"
      },
      {
        title: "Conformité Réglementaire",
        description: "Respect des normes HSE et traçabilité complète",
        icon: "✅"
      }
    ],
    
    technologies: [
      { name: "Laravel", category: "Backend", icon: "🔧", color: "from-red-500 to-pink-500" },
      { name: "React", category: "Frontend", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
      { name: "Python Flask", category: "IA & API", icon: "🐍", color: "from-blue-600 to-blue-800" },
      { name: "SQL Server", category: "Base de données", icon: "🗄️", color: "from-orange-500 to-red-500" },
      { name: "Jaspersoft Studio", category: "Reporting", icon: "📋", color: "from-purple-500 to-pink-500" },
      { name: "Machine Learning", category: "Intelligence Artificielle", icon: "🤖", color: "from-green-500 to-emerald-600" },
    ],
    
    architecture: [
      { layer: "Frontend", tech: "React + Vite", port: "5173", desc: "Interface moderne et réactive", color: "bg-orange-500" },
      { layer: "Backend", tech: "Laravel PHP", port: "8000", desc: "API RESTful sécurisée", color: "bg-orange-600" },
      { layer: "IA Engine", tech: "Python Flask", port: "5000", desc: "Prédictions ML en temps réel", color: "bg-orange-700" },
      { layer: "Database", tech: "SQL Server", port: "1433", desc: "Stockage sécurisé", color: "bg-orange-800" }
    ],
    
    screenshots: [
      { url: "/hse/statistique.PNG", alt: "Dashboard principal", title: "Tableau de bord" },
      { url: "/hse/historique.PNG", alt: "Gestion des incidents", title: "Gestion incidents" },
      { url: "/hse/prediction.PNG", alt: "Module IA", title: "Prédictions IA" },
      { url: "/hse/rapport.PNG", alt: "Rapports", title: "Génération rapports" },
      { url: "/hse/recommendation.PNG", alt: "IA génératif", title: "recommandation" },
    ]
  },

  'cake-shop': {
  title: "Cake Shop",
  subtitle: "Boutique en ligne de pâtisserie artisanale",
  year: "2025",
  color: "pink",
  heroImage: "/cakeshop/cakeshop.jfif",
  github: "https://github.com/ikram1sr/cakeshop",
  
  resume: "Une plateforme e-commerce élégante dédiée à une pâtisserie artisanale. Le site permet aux clients de découvrir les créations disponibles, remplir un formulaire de commande personnalisé et confirmer leur commande par téléphone. Un espace d'administration permet de gérer les produits et suivre les commandes.",
  
  impact: "Simplification du processus de commande avec un formulaire intuitif, permettant aux clients de personnaliser leurs gâteaux et de confirmer par téléphone. L'interface admin facilite la gestion complète des produits et des commandes.",
  
  objectifs: [
    "Présentation élégante des produits avec photos HD",
    "Formulaire de commande simple et intuitif",
    "Personnalisation des gâteaux (taille, saveur, décoration)",
    "Confirmation de commande par téléphone",
    "Interface d'administration pour gérer les produits",
    "Système de gestion des commandes pour l'admin"
  ],
  
  features: [
    {
      title: "Catalogue Produits",
      description: "Affichage élégant des gâteaux disponibles avec photos haute définition et descriptions détaillées",
      icon: "🍰"
    },
    {
      title: "Formulaire de Commande",
      description: "Formulaire intuitif pour personnaliser et passer commande facilement",
      icon: "📝"
    },
    {
      title: "Confirmation Téléphonique",
      description: "Les clients confirment leurs commandes par téléphone pour un service personnalisé",
      icon: "📞"
    },
    {
      title: "Espace Admin",
      description: "Interface d'administration sécurisée avec authentification",
      icon: "🔐"
    },
    {
      title: "Gestion des Produits",
      description: "Ajout, modification et suppression des produits par l'administrateur",
      icon: "⚙️"
    },
    {
      title: "Gestion des Commandes",
      description: "Suivi et gestion de toutes les commandes clients depuis le dashboard admin",
      icon: "📦"
    }
  ],
  
  technologies: [
    { name: "React", category: "Frontend", icon: "⚛️", color: "from-pink-500 to-rose-500" },
    { name: "Vite", category: "Build Tool", icon: "⚡", color: "from-purple-500 to-pink-500" },
    { name: "Node.js", category: "Backend", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "Express.js", category: "API", icon: "🚀", color: "from-gray-600 to-gray-800" },
    { name: "Bootstrap", category: "Styling", icon: "🎨", color: "from-purple-600 to-indigo-600" },
    { name: "SQL Server", category: "Base de données", icon: "🗄️", color: "from-orange-500 to-red-500" },
  ],
  
  architecture: [
    { layer: "Frontend", tech: "React + Vite + Bootstrap", port: "5174", desc: "Interface utilisateur élégante", color: "bg-pink-500" },
    { layer: "Backend", tech: "Node.js + Express", port: "5000", desc: "API RESTful", color: "bg-pink-600" },
    { layer: "Database", tech: "SQL Server", port: "1433", desc: "Stockage des produits et commandes", color: "bg-pink-700" },
    { layer: "Admin Auth", tech: "JWT", port: "5000", desc: "Authentification administrateur", color: "bg-pink-800" }
  ],
  
  screenshots: [
    { url: "/cakeshop/accueil.PNG", alt: "Page d'accueil", title: "Accueil avec produits" },
    { url: "/cakeshop/produits.PNG", alt: "Catalogue", title: "Catalogue produits" },
    { url: "/cakeshop/form.PNG", alt: "Formulaire", title: "Formulaire de commande" },
    { url: "/cakeshop/dashboard.PNG", alt: "Admin dashboard", title: "Interface admin" },
    { url: "/cakeshop/login.PNG", alt: "Admin login", title: "Interface admin login" },
  ]
},
 'carpooling': {
  title: "CarPooling",
  subtitle: "Plateforme web de covoiturage avec géolocalisation",
  year: "2024",
  color: "pink",
  heroImage: "/carpooling/carpooling.jfif",
  github: "https://github.com/rimadjamaa/CarPooling",
  
  resume: "CarPooling est une plateforme web conviviale et efficace permettant aux utilisateurs de partager et gérer leurs trajets en voiture de manière collaborative. Le site facilite la mise en relation entre conducteurs et passagers partageant des itinéraires similaires, favorisant ainsi le covoiturage pour une solution de transport économique, écologique et pratique.",
  
  impact: "Réduction significative des coûts de transport pour les utilisateurs, diminution de l'empreinte carbone liée aux déplacements individuels, et promotion d'une mobilité durable et collaborative. Optimisation de l'utilisation des véhicules grâce au partage des trajets.",
  
  objectifs: [
    "Mise en relation efficace entre conducteurs et passagers",
    "Recherche intelligente de trajets selon les itinéraires",
    "Système de réservation de places en temps réel",
    "Gestion complète des offres de covoiturage",
    "Panel d'administration pour supervision de la plateforme",
    "Réduction des coûts et de l'empreinte carbone"
  ],
  
  features: [
    {
      title: "Offre de Trajet",
      description: "Les conducteurs peuvent proposer des places disponibles avec détails complets (heure, point de rencontre, arrêts intermédiaires)",
      icon: "🚗"
    },
    {
      title: "Recherche de Trajet",
      description: "Les passagers recherchent des trajets correspondant à leurs besoins (itinéraire, horaire, lieu de départ)",
      icon: "🔍"
    },
    {
      title: "Réservation en Ligne",
      description: "Système de réservation de places avec confirmation instantanée de participation au trajet",
      icon: "✅"
    },
    {
      title: "Authentification Sécurisée",
      description: "Inscription et connexion sécurisées avec mots de passe cryptés",
      icon: "🔐"
    },
    {
      title: "Panel Administrateur",
      description: "Interface admin complète pour supervision, modification et suppression des offres et utilisateurs",
      icon: "👨‍💼"
    },
    {
      title: "Géolocalisation",
      description: "Intégration de la géolocalisation pour faciliter la recherche et l'affichage des trajets",
      icon: "📍"
    }
  ],
  
  technologies: [
    { name: "Laravel 9/10", category: "Backend Framework", icon: "🔧", color: "from-red-500 to-pink-500" },
    { name: "PHP 8.*", category: "Langage Backend", icon: "🐘", color: "from-purple-600 to-indigo-600" },
    { name: "MySQL", category: "Base de données", icon: "🗄️", color: "from-blue-500 to-cyan-500" },
    { name: "jQuery", category: "JavaScript", icon: "📜", color: "from-blue-600 to-blue-800" },
    { name: "Bootstrap", category: "Styling", icon: "🎨", color: "from-purple-500 to-pink-500" },
    
  ],
  
  architecture: [
    { layer: "Frontend", tech: "HTML/CSS/Bootstrap + jQuery", port: "5173", desc: "Interface utilisateur responsive", color: "bg-pink-500" },
    { layer: "Backend", tech: "Laravel 9/10 + PHP 8", port: "8000", desc: "Framework MVC complet", color: "bg-pink-600" },
    { layer: "Database", tech: "MySQL", port: "3306", desc: "Gestion des trajets et utilisateurs", color: "bg-pink-700" },
    { layer: "Build", tech: "NPM", port: "5173", desc: "Compilation des assets", color: "bg-pink-800" }
  ],
  
  screenshots: [
    { url: "/carpooling/accueil.PNG", alt: "Page d'accueil", title: "Accueil " },
    { url: "/carpooling/login.PNG", alt: "Page login", title: "Interface connexion et inscription" },
    { url: "/carpooling/driver.PNG", alt: "Offre de trajet", title: "Proposition conducteur" },
    { url: "/carpooling/client.PNG", alt: "Résultats recherche", title: "Recherche et réservation" },
    { url: "/carpooling/admin.PNG", alt: "Panel admin", title: "Interface admin" },
    
  ]

},
};