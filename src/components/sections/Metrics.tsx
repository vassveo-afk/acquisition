import { motion } from 'motion/react';

export default function Metrics() {
  const metrics = [
    { value: '+XXX', label: 'Leads Qualifiés' },
    { value: 'XX%', label: 'Taux de Qualification' },
    { value: 'XX%', label: 'Taux de Confirmation' },
    { value: 'XXX', label: 'Clients Générés' },
  ];

  return (
    <section id="results" className="py-24 bg-blue-600 text-white overflow-hidden relative">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full blur-[80px] mix-blend-screen opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500 rounded-full blur-[80px] mix-blend-screen opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center mb-12">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-blue-100 font-medium text-sm md:text-base">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-700/50 rounded-full text-blue-100 text-xs font-medium uppercase tracking-widest border border-blue-400/30">
            Exemples de Métriques de Performance
          </div>
        </div>

      </div>
    </section>
  );
}
