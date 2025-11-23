import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side - Info */}
          <div className="md:w-2/5 bg-slate-900 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Parlons de votre projet</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Remplissez ce formulaire et je reviens vers vous sous 24h pour discuter de votre expatriation.
              </p>
              <div className="space-y-4 text-slate-300 text-sm">
                <p>✓ Analyse confidentielle</p>
                <p>✓ Réponse personnalisée</p>
                <p>✓ Sans engagement</p>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-xs text-slate-500">
                Vos données sont protégées et ne seront jamais partagées.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-3/5 p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Prénom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="current" className="block text-sm font-medium text-slate-700 mb-2">Pays actuel</label>
                  <input 
                    type="text" 
                    id="current" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ex: France"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-slate-700 mb-2">Île envisagée</label>
                  <input 
                    type="text" 
                    id="destination" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ex: Tenerife, Gran Canaria..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Votre projet</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Racontez-moi brièvement votre situation et vos objectifs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Envoyer mon projet
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
