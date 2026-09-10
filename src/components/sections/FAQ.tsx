import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Garantissez-vous des clients ?',
      a: 'Les résultats dépendent de votre entreprise, de votre marché au Maroc, de votre offre, de vos prix et de vos ventes. Nous nous concentrons sur la génération et la qualification d\'opportunités pertinentes plutôt que de faire des promesses irréalistes.'
    },
    {
      q: 'Avec quelles entreprises travaillez-vous ?',
      a: 'Nous accompagnons les entreprises locales marocaines avec un service de valeur et un processus d\'acquisition clair (cliniques, immobilier, services, salles de sport, etc.).'
    },
    {
      q: 'Générez-vous uniquement des leads ?',
      a: 'Non. Le système est conçu pour qualifier, relancer et confirmer les clients potentiels avant de vous les transmettre. L\'objectif est le client final.'
    },
    {
      q: 'Gérez-vous la publicité ?',
      a: 'Oui. L\'agence gère tout le processus d\'acquisition, de la publicité ciblée à la qualification et au système de relance.'
    },
    {
      q: 'Sous quel délai pouvons-nous commencer ?',
      a: 'Après l\'audit initial et le lancement, les campagnes et automatisations sont généralement configurées en 7 à 14 jours selon la complexité du projet.'
    },
    {
      q: 'Ai-je besoin de connaissances techniques ?',
      a: 'Pas du tout. Nous gérons toute l\'installation technique, les intégrations et l\'optimisation continue pour vous.'
    }
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Foire Aux Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
      >
        <span className="font-semibold text-slate-900 pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
