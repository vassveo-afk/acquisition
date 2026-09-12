export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm font-medium">
        
        <div className="flex items-center gap-2 group">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
          <span className="text-white font-bold tracking-tight">
            GRABB
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Conditions d'Utilisation</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div>
          © {new Date().getFullYear()} GRABB. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
