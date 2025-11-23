'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu'est-ce que la zone ZEC aux Canaries ?",
      answer: "La Zone Spéciale des Canaries (ZEC) permet aux entreprises éligibles de bénéficier d'un taux d'impôt sur les sociétés réduit à 4%, contre 25% en Espagne continentale, tout en restant dans l'UE."
    },
    {
      question: "Le coût de la vie est-il vraiment moins cher ?",
      answer: "Oui, le coût de la vie aux Canaries est en moyenne 20% à 30% moins élevé qu'en France métropolitaine (loyer, alimentation, sorties), avec une TVA locale (IGIC) à 7%."
    },
    {
      question: "Puis-je garder ma sécurité sociale française ?",
      answer: "En tant que résident fiscal espagnol, vous cotiserez à la sécurité sociale espagnole qui est excellente. Pour les retraités, le transfert des droits est possible via le formulaire S1."
    },
    {
      question: "Est-il facile de trouver un logement ?",
      answer: "Le marché est tendu sur certaines îles comme Tenerife ou Gran Canaria. Nous vous accompagnons pour trouver les meilleures opportunités, à la location ou à l'achat, avant votre arrivée."
    },
    {
      question: "Y a-t-il des écoles françaises ?",
      answer: "Oui, il existe des lycées français à Tenerife et Gran Canaria, ainsi que de nombreuses écoles internationales bilingues anglais/espagnol de très bon niveau."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Questions Fréquentes</h2>
          <p className="text-slate-600">
            Tout ce que vous devez savoir avant de vous lancer.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 flex items-center justify-between transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
