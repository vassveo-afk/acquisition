import { motion } from 'motion/react';
import { Activity, Sparkles, Home, Dumbbell, Wrench, Eraser, GraduationCap, Stethoscope, Briefcase } from 'lucide-react';

interface IndustriesProps {
  onOpenAudit: () => void;
}

export default function Industries({ onOpenAudit }: IndustriesProps) {
  const industries = [
    { name: 'Cabinets Dentaires', icon: Activity },
    { name: 'Beauté & Esthétique', icon: Sparkles },
    { name: 'Agences Immobilières', icon: Home },
    { name: 'Salles de Sport & Fitness', icon: Dumbbell },
    { name: 'Services Automobiles', icon: Wrench },
    { name: 'Nettoyage & Domicile', icon: Eraser },
    { name: 'Centres de Formation', icon: GraduationCap },
    { name: 'Cliniques Privées', icon: Stethoscope },
    { name: 'Autres Services Locaux', icon: Briefcase },
  ];

  return (
    <section id="who-we-help" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Conçu pour les entreprises marocaines<br />
            <span className="text-slate-400">Qui dépendent de leurs clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all duration-300 group cursor-default"
            >
              <ind.icon className="w-8 h-8 text-slate-400 mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="font-semibold text-slate-900 group-hover:text-white transition-colors tracking-tight">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenAudit}
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all"
          >
            Voir Si Votre Entreprise Est Éligible
          </button>
        </div>

      </div>
    </section>
  );
}
