import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] md:h-[68px] sm:h-[56px]"
        style={{
          background: 'rgba(67, 35, 115, 0.85)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="tracking-tight uppercase" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '22px',
              color: '#ffffff',
              letterSpacing: '0.5px'
            }}>
              SÉNÉGAL SPORT 36
              <span style={{ color: '#39FF14' }}>0</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link text-white hover:text-[#39FF14] transition-colors relative group"
              style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500 }}>
              Accueil
              <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#39FF14] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{ boxShadow: '0 0 8px #39FF14' }}></span>
            </a>
            <a href="/top-infos" className="nav-link text-white hover:text-[#39FF14] transition-colors relative group"
              style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500 }}>
              Top Infos
              <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#39FF14] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{ boxShadow: '0 0 8px #39FF14' }}></span>
            </a>
            <a href="#" className="nav-link text-white hover:text-[#39FF14] transition-colors relative group"
              style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500 }}>
              Événements
              <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#39FF14] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{ boxShadow: '0 0 8px #39FF14' }}></span>
            </a>
            <a href="#" className="nav-link text-white hover:text-[#39FF14] transition-colors relative group"
              style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500 }}>
              À Propos
              <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#39FF14] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{ boxShadow: '0 0 8px #39FF14' }}></span>
            </a>
            <a href="#" className="nav-link text-white hover:text-[#39FF14] transition-colors relative group"
              style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500 }}>
              Contact
              <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#39FF14] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{ boxShadow: '0 0 8px #39FF14' }}></span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-white hover:text-[#39FF14] transition-colors" aria-label="Rechercher">
              <Search size={20} />
            </button>

            <div className="hidden md:flex items-center gap-3">
              <div className="px-4 py-1.5 rounded-full text-xs"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontFamily: 'var(--font-body)',
                  color: '#ffffff',
                  fontWeight: 600
                }}>
                BREAKING NEWS
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(220, 38, 38, 0.9)' }}>
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-white text-xs font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                  LIVE
                </span>
              </div>
            </div>

            <button
              className="md:hidden text-white hover:text-[#39FF14] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-[56px]"
          style={{
            background: 'rgba(67, 35, 115, 0.98)',
            backdropFilter: 'blur(24px)'
          }}>
          <div className="flex flex-col p-6 gap-6">
            <a href="#" className="text-white text-xl py-3 border-b border-white/10"
              style={{ fontFamily: 'var(--font-heading)' }}
              onClick={() => setMobileMenuOpen(false)}>
              ACCUEIL
            </a>
            <a href="#" className="text-white text-xl py-3 border-b border-white/10"
              style={{ fontFamily: 'var(--font-heading)' }}
              onClick={() => setMobileMenuOpen(false)}>
              TOP INFOS
            </a>
            <a href="/top-infos" className="text-white text-xl py-3 border-b border-white/10"
              style={{ fontFamily: 'var(--font-heading)' }}
              onClick={() => setMobileMenuOpen(false)}>
              ÉVÉNEMENTS
            </a>
            <a href="#" className="text-white text-xl py-3 border-b border-white/10"
              style={{ fontFamily: 'var(--font-heading)' }}
              onClick={() => setMobileMenuOpen(false)}>
              À PROPOS
            </a>
            <a href="#" className="text-white text-xl py-3 border-b border-white/10"
              style={{ fontFamily: 'var(--font-heading)' }}
              onClick={() => setMobileMenuOpen(false)}>
              CONTACT
            </a>

            <div className="flex items-center gap-2 px-3 py-2 rounded-full mt-4 self-start"
              style={{ background: 'rgba(220, 38, 38, 0.9)' }}>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <span className="text-white text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                LIVE
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
