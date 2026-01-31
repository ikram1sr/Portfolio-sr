export default function Footer() {
  const name = "SIRINE IKRAM";

  return (
    <footer className="bg-gray-200 py-10 ">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Nom avec animation lettre par lettre */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 flex justify-center gap-1">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block transition-transform duration-300 hover:scale-125 text-gray-700 hover:text-pink-600 cursor-pointer"
            >
              {letter}
            </span>
          ))}
        </h2>

        {/* Texte */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-5">
          Quelle est votre prochaine grande idée ?  
          Prêt(e) à lui donner vie ?  
          Travaillons ensemble pour créer quelque chose de remarquable.  
          Contactez-moi et commençons !
        </p>

        {/* Email */}
        <p className="text-gray-700 font-medium">
          📧 ikramsirine28@gmail.com
        </p>

        <p className="text-sm text-gray-500 mt-5">
          © 2025 Tous droits réservés
        </p>

      </div>
    </footer>
  );
}