
import { BUSINESS } from "@/lib/constants";
import { Instagram, MapPin, Phone, ExternalLink, Calendar } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-semibold text-white">
              {BUSINESS.fullName}
            </h3>
            <p className="text-sm leading-relaxed max-w-xs text-neutral-400">
              {BUSINESS.tagline}. Un espace dédié à votre bien-être et à votre beauté naturelle.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-brand-800/30 border border-brand-700/50 rounded-full text-xs font-medium text-brand-200">
                Basé à {BUSINESS.address.city} ({BUSINESS.address.postalCode})
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-brand-300 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-300 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Nos Soins
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-300 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  L'Institut
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-300 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact & Accès
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Nous trouver</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5 group-hover:text-brand-300 transition-colors" />
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  {BUSINESS.address.street}<br />
                  {BUSINESS.address.postalCode} {BUSINESS.address.city}
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-brand-400 shrink-0 group-hover:text-brand-300 transition-colors" />
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Social & Booking */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Suivez-nous</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={BUSINESS.links.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/5"
              >
                <div className="p-2 bg-neutral-800 rounded-full group-hover:bg-brand-600 transition-colors duration-300">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 opacity-50 ml-auto" />
              </a>
              
              <a 
                href={BUSINESS.links.planity} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors group p-2 -ml-2 rounded-lg hover:bg-white/5"
              >
                <div className="p-2 bg-neutral-800 rounded-full group-hover:bg-brand-600 transition-colors duration-300">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>Réserver sur Planity</span>
                <ExternalLink className="w-3 h-3 opacity-50 ml-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {currentYear} {BUSINESS.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
