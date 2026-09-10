import { motion } from 'motion/react';
import { Target, Users, Filter, CheckSquare, Briefcase } from 'lucide-react';

export default function Process() {
  const steps = [
    { id: '01', title: 'Trafic', icon: Target, desc: 'Publicités ciblées' },
    { id: '02', title: 'Lead', icon: Users, desc: 'Capture de contact' },
    { id: '03', title: 'Qualification', icon: Filter, desc: 'Filtre d\'intention' },
    { id: '04', title: 'Confirmation', icon: CheckSquare, desc: 'Vérification d\'intérêt' },
    { id: '05', title: 'Client', icon: Briefcase, desc: 'Transmis à l\'équipe' },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-slate-950 overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-20">
          Du Clic Publicitaire au Client Confirmé
        </h2>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-slate-800 z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-blue-500 origin-left"
            />
          </div>
          
          {/* Mobile Connecting Line */}
          <div className="block lg:hidden absolute top-0 bottom-0 left-[39px] w-0.5 bg-slate-800 z-0">
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-blue-500 origin-top"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-12 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-row lg:flex-col items-center gap-6 lg:gap-6 text-left lg:text-center w-full lg:w-48"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 border-4 border-slate-950 shadow-xl relative
                  ${i === steps.length - 1 ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}
                >
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-3 lg:-top-4 bg-slate-800 text-slate-300 text-xs font-bold px-2 py-1 rounded-md border border-slate-700">
                    {step.id}
                  </div>
                </div>
                
                <div>
                  <h3 className={`text-xl font-bold mb-1 tracking-tight ${i === steps.length - 1 ? 'text-white' : 'text-slate-200'}`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
