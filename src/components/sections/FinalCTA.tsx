import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCTAProps {
  onOpenAudit: () => void;
}

export default function FinalCTA({ onOpenAudit }: FinalCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden text-center">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
          Plus de Conversations Qualifiées.<br />
          <span className="text-blue-400">Plus d'Opportunités Confirmées.</span><br />
          Plus de Clients.
        </h2>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Arrêtez de gaspiller votre budget dans des leads qui ne deviennent jamais clients. Construisez un système d'acquisition autour d'opportunités confirmées.
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenAudit}
          className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] text-lg mb-6 group"
        >
          Obtenir Mon Audit Gratuit
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <p className="text-sm font-medium text-slate-500">
          Aucun logiciel compliqué à apprendre. Nous gérons le système pour vous.
        </p>

      </div>
    </section>
  );
}
