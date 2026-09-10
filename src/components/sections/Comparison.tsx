import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export default function Comparison() {
  const points = [
    {
      typical: 'Paie pour le trafic',
      our: 'Génère des demandes ciblées',
    },
    {
      typical: 'Génère des demandes',
      our: 'Qualifie automatiquement les prospects',
    },
    {
      typical: 'Vous envoie les contacts',
      our: 'Relance systématiquement',
    },
    {
      typical: 'Vous courez après le lead',
      our: 'Confirme le réel intérêt',
    },
    {
      typical: 'Vous qualifiez le lead',
      our: 'Livre des opportunités qualifiées',
    },
    {
      typical: 'Vous faites les relances',
      our: 'Votre équipe se concentre sur la vente',
      highlight: true
    },
    {
      typical: 'Vous espérez qu\'ils achètent',
      our: 'Acquisition de clients prédictible',
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Les leads ne sont pas le produit.<br />
            <span className="text-slate-400">Les clients le sont.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            
            {/* Typical Agency */}
            <div className="p-8 lg:p-12 bg-slate-50 border-r border-slate-200">
              <h3 className="text-xl font-bold text-slate-500 mb-8 text-center uppercase tracking-wider">
                Agence Classique
              </h3>
              <ul className="space-y-6">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <X className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    <span className="text-slate-500">{point.typical}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our System */}
            <div className="p-8 lg:p-12 bg-slate-900 relative">
              <div className="absolute inset-0 bg-blue-500/5 mix-blend-screen pointer-events-none" />
              
              <h3 className="text-xl font-bold text-blue-400 mb-8 text-center uppercase tracking-wider relative z-10">
                Notre Système
              </h3>
              <ul className="space-y-6 relative z-10">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`shrink-0 mt-0.5 rounded-full p-0.5 ${point.highlight ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400'}`}>
                       <Check className="w-4 h-4" />
                    </div>
                    <span className={`${point.highlight ? 'text-white font-semibold' : 'text-slate-300'}`}>
                      {point.our}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
