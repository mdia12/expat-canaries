import React from 'react';
import { Wallet, Scale, GraduationCap, HeartPulse, Home, Globe } from 'lucide-react';

const Tips = () => {
  const tips = [
    {
      icon: <Wallet className="h-6 w-6 text-blue-600" />,
      title: "Budget Réaliste",
      text: "Prévoyez toujours 30% de marge de sécurité pour les premiers mois d'installation."
    },
    {
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      title: "Fiscalité",
      text: "Comprenez bien la notion de résidence fiscale avant de quitter votre pays d'origine."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: "Scolarité",
      text: "Les listes d'attente des écoles internationales peuvent être longues, anticipez !"
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-blue-600" />,
      title: "Santé",
      text: "Vérifiez la couverture santé locale et souscrivez une assurance internationale si besoin."
    },
    {
      icon: <Home className="h-6 w-6 text-blue-600" />,
      title: "Logement",
      text: "Louez un Airbnb pour les premières semaines avant de signer un bail long terme."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Culture",
      text: "Apprenez les bases de la langue locale, c'est le meilleur vecteur d'intégration."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/1212818/pexels-photo-1212818.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conseils d&apos;Expatriation</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Quelques clés essentielles pour préparer votre départ dans les meilleures conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 p-3 rounded-lg">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
