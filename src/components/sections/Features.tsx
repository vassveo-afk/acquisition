import { motion } from 'motion/react';
import { ShieldCheck, Zap, Bot, CheckSquare, LineChart, Target } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Target,
      title: 'Leads Qualifiés',
      desc: 'Seuls les prospects pertinents et à forte intention avancent vers votre équipe.'
    },
    {
      icon: Zap,
      title: 'Réactivité Maximale',
      desc: 'Les clients potentiels reçoivent une communication automatisée et immédiate.'
    },
    {
      icon: Bot,
      title: 'Relances Automatisées',
      desc: 'Réduisez les opportunités perdues à cause de suivis lents ou oubliés.'
    },
    {
      icon: CheckSquare,
      title: 'Intérêt Confirmé',
      desc: 'Nous vérifions que les prospects sont réellement intéressés avant la mise en relation.'
    },
    {
      icon: ShieldCheck,
      title: 'Efficacité Commerciale',
      desc: 'Votre équipe passe plus de temps avec de vrais clients, pas avec des curieux.'
    },
    {
      icon: LineChart,
      title: 'Acquisition Prédictible',
      desc: 'Bâtissez un système d\'acquisition de clients répétable et mesurable au Maroc.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Votre équipe n'a pas besoin de plus de leads.<br />
            <span className="text-slate-400">Elle a besoin de meilleurs leads.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
