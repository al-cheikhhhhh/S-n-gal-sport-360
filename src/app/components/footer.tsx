import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16"
      style={{
        background: 'linear-gradient(to bottom, rgba(67, 35, 115, 0.3), rgba(0, 0, 0, 0.8))',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="uppercase tracking-tight mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '24px',
                color: '#ffffff',
                letterSpacing: '0.5px'
              }}>
              SÉNÉGAL SPORT 36
              <span style={{ color: '#39FF14' }}>0</span>
            </h3>
            <p className="text-white/60 mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: '1.7'
              }}>
              Votre source d'actualités sportives pour les Jeux Olympiques de la Jeunesse Dakar 2026.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                <Youtube size={18} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="uppercase mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '16px',
                color: '#39FF14',
                letterSpacing: '1px'
              }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Accueil', 'Top Infos', 'Événements', 'Résultats', 'Classements'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-[#39FF14] transition-colors"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px'
                    }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="uppercase mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '16px',
                color: '#39FF14',
                letterSpacing: '1px'
              }}>
              Sports
            </h4>
            <ul className="space-y-3">
              {['Athlétisme', 'Basketball', 'Football', 'Natation', 'Judo'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-[#39FF14] transition-colors"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px'
                    }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="uppercase mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '16px',
                color: '#39FF14',
                letterSpacing: '1px'
              }}>
              Informations
            </h4>
            <ul className="space-y-3">
              {['À Propos', 'Contact', 'Partenaires', 'Presse', 'Politique de Confidentialité'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-[#39FF14] transition-colors"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px'
                    }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px'
            }}>
            © 2026 Sénégal Sport 360. Tous droits réservés. | Jeux Olympiques de la Jeunesse Dakar 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
