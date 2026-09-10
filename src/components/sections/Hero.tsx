import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Calendar, User, Clock } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
}

export default function Hero({ onOpenAudit }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-slate-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Systèmes d'Acquisition de Clients
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Arrêtez de Payer Pour des Leads.<br />
              <span className="text-slate-400">Commencez à Obtenir des Clients Qualifiés & Confirmés.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Nous aidons les entreprises marocaines à attirer, qualifier, relancer et confirmer des clients potentiels — pour que votre équipe puisse se concentrer sur la vente et le service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onOpenAudit}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group"
              >
                Obtenir Mon Audit Gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all flex items-center justify-center border border-white/10"
              >
                Voir Comment Ça Marche
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-400" />
                Sans engagement à long terme
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-400" />
                Pas de configuration complexe
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-400" />
                Axé sur de vrais clients
              </div>
            </div>
          </motion.div>

          {/* Right Column: CRM Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main CRM Card */}
            <div className="bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative z-10">
              {/* Header */}
              <div className="bg-slate-800/50 border-b border-white/5 px-6 py-4 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-xs font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Pipeline d'Acquisition</div>
              </div>
              
              {/* Pipeline Columns */}
              <div className="p-6 grid grid-cols-3 gap-4">
                
                {/* Column 1: Qualified */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-white">Qualifié</h3>
                    <span className="text-xs bg-white/10 text-slate-300 px-2 py-0.5 rounded-full">12</span>
                  </div>
                  {[
                    { name: 'Fatima Zahra', time: 'Il y a 10m', service: 'Soins Dentaires' },
                    { name: 'Youssef Benali', time: 'Il y a 1h', service: 'Blanchiment' }
                  ].map((lead, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="bg-slate-800 border border-white/5 rounded-xl p-3"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white">
                          <User className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-medium text-white">{lead.name}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3 text-xs">
                        <span className="text-slate-400">{lead.service}</span>
                        <span className="text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {lead.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Column 2: Confirmed */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-white">Confirmé</h3>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">8</span>
                  </div>
                  {[
                    { name: 'Amine El Fassi', time: 'À l\'instant', tag: 'Haute Intention' },
                    { name: 'Nadia Chraibi', time: 'Il y a 2h', tag: 'Reprogrammé' }
                  ].map((lead, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + (i * 0.1) }}
                      className="bg-slate-800 border border-blue-500/30 rounded-xl p-3 shadow-[0_0_15px_-5px_rgba(37,99,235,0.2)]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">{lead.name}</span>
                        <div className="bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded uppercase font-bold">
                          {lead.tag}
                        </div>
                      </div>
                      <div className="w-full bg-slate-900 rounded-lg p-2 text-xs text-slate-400 flex items-center gap-2 mt-2">
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        Intérêt Confirmé
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Column 3: Booked */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-white">Réservé</h3>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">4</span>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                    className="bg-slate-800 border border-green-500/30 rounded-xl p-3"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-white">Salma Idrissi</span>
                    </div>
                    <div className="bg-green-500/10 text-green-400 rounded-lg p-2 text-xs flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        Demain, 10:00
                      </div>
                      <span className="text-slate-400 ml-5">Consultation</span>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>

            {/* Floating Notification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-4 z-20 border border-slate-100"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Nouveau Rendez-vous</p>
                <p className="text-xs text-slate-500">Salma Idrissi vient de confirmer.</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
