import React from 'react';
import { Briefcase, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      title: "Entrepreneurs & Freelances",
      image: "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Profitez de la zone ZEC avec un impôt sur les sociétés à 4%.",
      points: [
        "Impôt société réduit à 4% (Zone ZEC)",
        "Cadre européen sécurisé",
        "Connexion internet haut débit",
        "Coût de la vie attractif"
      ]
    },
    {
      title: "Familles",
      image: "https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Offrez une qualité de vie exceptionnelle sous le soleil toute l'année.",
      points: [
        "Écoles internationales (anglais/espagnol)",
        "Sécurité et environnement sain",
        "Système de santé européen",
        "Activités plein air toute l'année"
      ]
    },
    {
      title: "Retraités & Rentrés",
      image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Profitez de votre retraite au soleil avec un pouvoir d'achat boosté.",
      points: [
        "Climat 'printemps éternel'",
        "Exonérations fiscales possibles",
        "Proximité avec l'Europe (4h de vol)",
        "Communauté francophone active"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pour qui est cet accompagnement ?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Que vous partiez seul, en famille ou pour le business, nous avons l'expertise pour sécuriser votre projet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6 text-sm">{item.description}</p>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-slate-700 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
