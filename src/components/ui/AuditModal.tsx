import { X, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      businessName: formData.get('businessName'),
      phone: formData.get('phone'),
      industry: formData.get('industry'),
      website: formData.get('website'),
      serviceNeeded: formData.get('serviceNeeded'),
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzyzzwyYURcLufpVw2ybBAMVnCXpPuHup-9TzWZWCZB6YsjoCyIsu8TuauPut2YmxGf/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    } finally {
      setIsSubmitting(false);
      onClose();
      navigate('/thank-you');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Demander un Audit Gratuit
            </h2>
            <p className="text-slate-600">
              Découvrons où vous perdez des clients potentiels dans votre système actuel.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Nom</label>
                    <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="Amine Bennani" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Nom de l'entreprise</label>
                    <input required name="businessName" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="Cabinet Sourire" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Téléphone / WhatsApp</label>
                    <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="+212 6 00 00 00 00" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Secteur d'activité</label>
                    <select required name="industry" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all">
                      <option value="">Sélectionnez votre secteur...</option>
                      <option value="dental">Cabinet Dentaire / Médical</option>
                      <option value="beauty">Beauté & Esthétique</option>
                      <option value="real-estate">Immobilier</option>
                      <option value="fitness">Salle de Sport / Fitness</option>
                      <option value="home">Services à Domicile</option>
                      <option value="auto">Automobile</option>
                      <option value="other">Autre Entreprise Locale</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Site Web / Instagram</label>
                  <input type="text" name="website" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="instagram.com/votre_entreprise" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Pour quel service souhaitez-vous plus de clients ?</label>
                  <textarea required name="serviceNeeded" rows={2} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none" placeholder="ex: Soins dentaires, rénovation de cuisine..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Demander Mon Audit Gratuit"
                  )}
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  Nombre limité d'audits disponibles chaque mois au Maroc.
                </p>
              </form>
        </div>
      </div>
    </div>
  );
}
