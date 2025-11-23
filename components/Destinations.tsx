import React from 'react';
import { MapPin, Sun, Wallet, Shield } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      name: "Tenerife",
      description: "L'île la plus peuplée, idéale pour les familles et les entrepreneurs. Écoles internationales et vie active.",
      tags: ["Santa Cruz", "Teide", "Business"],
      image: "https://images.pexels.com/photos/34773761/pexels-photo-34773761.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Gran Canaria",
      description: "Un continent miniature avec Las Palmas, ville dynamique et cosmopolite pour les digital nomads.",
      tags: ["Las Palmas", "Plages", "Nomads"],
      image: "https://images.pexels.com/photos/34773760/pexels-photo-34773760.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Lanzarote",
      description: "Paysages volcaniques uniques et tranquillité. Parfait pour ceux qui cherchent le calme et la nature.",
      tags: ["Nature", "Volcans", "Calme"],
      image: "https://images.pexels.com/photos/34773757/pexels-photo-34773757.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Fuerteventura",
      description: "Le paradis des plages de sable blanc et des sports nautiques. Une ambiance détendue toute l'année.",
      tags: ["Surf", "Plages", "Détente"],
      image: "https://images.pexels.com/photos/1129615/pexels-photo-1129615.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choisis ton île idéale</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Chaque île des Canaries a sa propre identité. Nous vous aidons à trouver celle qui correspond à votre style de vie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{dest.name}</h3>
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-slate-600 text-sm mb-6 min-h-[60px]">
                  {dest.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dest.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
