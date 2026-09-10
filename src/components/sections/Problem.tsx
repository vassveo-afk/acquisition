import { motion } from 'motion/react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            La plupart des entreprises n'ont pas un problème de leads.<br className="hidden md:block" />
            <span className="text-slate-400">Elles ont un problème de conversion.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Les entreprises dépensent en publicité et génèrent des demandes, mais beaucoup de leads ne répondent jamais, ne sont pas sérieux, ne sont pas qualifiés ou disparaissent avant de devenir clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Traditional Way */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <h3 className="text-lg font-semibold text-slate-500 mb-8 flex items-center gap-2 uppercase tracking-wider text-sm">
              <XCircle className="w-5 h-5" />
              Génération de Leads Classique
            </h3>
            
            <div className="space-y-4 relative">
              <div className="absolute left-6 top-6 bottom-6 w-px bg-slate-200 z-0" />
              
              {[
                { label: 'Campagne Publicitaire', active: true },
                { label: 'Lead Généré', active: true },
                { label: 'Envoyé à l\'Entreprise', active: true },
                { label: 'Sans Réponse / Fantôme', active: false, error: true },
                { label: 'Client Perdu', active: false, error: true },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-sm border-2 ${
                    step.error ? 'bg-red-50 border-red-200 text-red-500' : 
                    step.active ? 'bg-slate-100 border-slate-200 text-slate-500' : 'bg-white border-slate-200 text-slate-300'
                  }`}>
                    {step.error ? <XCircle className="w-5 h-5" /> : `0${i + 1}`}
                  </div>
                  <div className={`font-medium ${step.error ? 'text-red-500' : 'text-slate-500'}`}>
                    {step.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Our System */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900 rounded-3xl p-8 lg:p-10 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

            <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2 uppercase tracking-wider text-sm">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              Notre Système d'Acquisition
            </h3>
            
            <div className="space-y-4 relative">
              <div className="absolute left-6 top-6 bottom-6 w-px bg-slate-800 z-0" />
              
              {[
                { label: 'Publicité Ciblée' },
                { label: 'Lead Capturé' },
                { label: 'Qualification Automatisée' },
                { label: 'Relance Immédiate' },
                { label: 'Confirmation d\'Intérêt' },
                { label: 'Client Qualifié Livré', highlight: true },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-sm ${
                    step.highlight 
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                      : 'bg-slate-800 border border-slate-700 text-slate-300'
                  }`}>
                    {step.highlight ? <CheckCircle2 className="w-5 h-5" /> : `0${i + 1}`}
                  </div>
                  <div className={`font-medium ${step.highlight ? 'text-white text-lg' : 'text-slate-300'}`}>
                    {step.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
