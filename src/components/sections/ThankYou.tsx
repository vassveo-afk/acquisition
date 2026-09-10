import { CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react';

interface ThankYouProps {
  onBack: () => void;
}

export default function ThankYou({ onBack }: ThankYouProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 selection:bg-blue-200">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-16 text-center">
        <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Félicitations, demande d'audit reçue !
        </h1>
        
        <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
          Merci pour votre confiance. Notre équipe va analyser l'acquisition de votre entreprise et vous contactera très rapidement pour planifier votre appel stratégique offert.
        </p>
        
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 mb-10 text-left border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 text-lg">Prochaines étapes :</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
              <p className="text-slate-600">Nous analysons discrètement votre présence en ligne actuelle et celle de vos concurrents directs au Maroc.</p>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
              <p className="text-slate-600">Un expert vous appelle dans les <span className="font-semibold text-slate-900">24 à 48 heures</span> pour réserver votre créneau.</p>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</div>
              <p className="text-slate-600">Nous vous présentons un plan d'action concret et prédictible pour générer plus de clients.</p>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium px-6 py-3 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </button>
          
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a] font-medium px-6 py-3 rounded-xl transition-all shadow-lg shadow-green-600/20 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Nous contacter sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
