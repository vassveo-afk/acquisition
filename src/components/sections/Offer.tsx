import { motion } from 'motion/react';

export default function Offer() {
  const steps = [
    {
      num: '01',
      title: 'ATTIRER',
      desc: 'Nous utilisons la publicité ciblée pour attirer des clients potentiels réellement intéressés par vos services au Maroc, pas juste des curieux.',
      color: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      num: '02',
      title: 'QUALIFIER',
      desc: 'Nous posons les bonnes questions pour filtrer les profils non pertinents, hors zone ou de faible qualité.',
      color: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      num: '03',
      title: 'RELANCER',
      desc: 'Les clients potentiels reçoivent des relances immédiates et personnalisées pour que l\'opportunité ne disparaisse pas.',
      color: 'bg-violet-50',
      textColor: 'text-violet-600'
    },
    {
      num: '04',
      title: 'CONFIRMER',
      desc: 'Nous confirmons l\'intérêt, vérifions la disponibilité et l\'intention avant de transmettre le client à votre entreprise.',
      color: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Nous ne générons pas seulement des leads.<br />
            <span className="text-slate-400">Nous transformons l'intérêt en opportunités confirmées.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${step.color} ${step.textColor} flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform`}>
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-2xl bg-slate-900 text-white px-8 py-5 text-lg font-medium shadow-xl">
            Vous recevez des opportunités qualifiées au lieu d'un fichier Excel rempli de contacts aléatoires.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
