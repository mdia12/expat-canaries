import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2656913/pexels-photo-2656913.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Canary Islands Coast" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Prépare ton expatriation <span className="text-blue-400">aux Canaries</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
            Un accompagnement sur-mesure pour vivre et entreprendre sous le soleil espagnol : 
            fiscalité ZEC à 4%, logement, écoles et installation. Ne pars pas à l'aveugle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Réserver un appel
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <button 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger le guide gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
