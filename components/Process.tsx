import React from 'react';
import { Phone, FileText, Plane } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnostic de situation",
      description: "Un appel découverte pour comprendre vos objectifs, votre situation familiale et patrimoniale.",
      icon: <Phone className="h-6 w-6 text-white" />,
      color: "bg-blue-600"
    },
    {
      number: "02",
      title: "Plan d'expatriation",
      description: "Nous élaborons une feuille de route précise : montage fiscal, budget prévisionnel et calendrier.",
      icon: <FileText className="h-6 w-6 text-white" />,
      color: "bg-teal-600"
    },
    {
      number: "03",
      title: "Accompagnement global",
      description: "Assistance complète pour les visas, le logement, l'école et l'installation sur place.",
      icon: <Plane className="h-6 w-6 text-white" />,
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comment on t'aide ?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour transformer votre projet en réalité, étape par étape.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <div className="bg-white px-4">
                  <span className="block text-sm font-bold text-slate-400 mb-2 tracking-wider">ÉTAPE {step.number}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
