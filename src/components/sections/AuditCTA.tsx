import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AuditCTAProps {
  onOpenAudit: () => void;
}

export default function AuditCTA({ onOpenAudit }: AuditCTAProps) {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
          Découvrons combien de clients qualifiés votre entreprise pourrait manquer.
        </h2>
        
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Obtenez un audit gratuit d'acquisition client et découvrez où vous perdez des prospects dans votre parcours actuel.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenAudit}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all shadow-xl group mb-4"
        >
          Obtenir Mon Audit Gratuit
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
        
        <p className="text-sm text-slate-500 font-medium">
          Nombre limité d'audits disponibles chaque mois au Maroc.
        </p>

      </div>
    </section>
  );
}
