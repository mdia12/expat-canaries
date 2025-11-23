import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-white">Expat<span className="text-blue-500">Premium</span></span>
            <p className="text-sm mt-2">Accompagnement stratégique pour votre nouvelle vie.</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p className="mb-2">
            © {new Date().getFullYear()} ExpatPremium. Tous droits réservés.
          </p>
          <p>
            Avertissement : Ce site ne remplace pas un conseil juridique ou fiscal professionnel. 
            Les informations fournies sont à titre indicatif et ne sauraient engager la responsabilité de l'éditeur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
