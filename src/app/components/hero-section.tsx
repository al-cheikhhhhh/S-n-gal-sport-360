import { GlassCard } from './glass-card';
import { Calendar, MapPin, Flame } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#432373] via-[#2d1850] to-[#000000]"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(57, 255, 20, 0.15)',
              border: '1px solid rgba(57, 255, 20, 0.3)'
            }}>
            <Flame size={16} style={{ color: '#39FF14' }} />
            <span className="text-[#39FF14] text-sm uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>
              Première en Afrique
            </span>
          </div>

          <h1 className="mb-6 uppercase tracking-tight leading-[1.1]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(40px, 8vw, 72px)',
              color: '#ffffff',
              letterSpacing: '1px'
            }}>
            JEUX OLYMPIQUES
            <br />
            DE LA JEUNESSE
            <br />
            <span style={{ color: '#39FF14' }}>DAKAR 2026</span>
          </h1>

          <p className="max-w-2xl mx-auto mb-8"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.7'
            }}>
            L'Afrique accueille pour la première fois les Jeux Olympiques. Suivez en direct toute l'actualité, les résultats et les moments forts de cet événement historique.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button className="px-8 py-4 rounded-full uppercase tracking-wide transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: '#39FF14',
                color: '#000000',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 700,
                boxShadow: '0 4px 20px rgba(57, 255, 20, 0.4)'
              }}>
              Voir le Programme
            </button>
            <button className="px-8 py-4 rounded-full uppercase tracking-wide transition-all hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 700,
                backdropFilter: 'blur(10px)'
              }}>
              Suivre en Direct
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full"
                style={{ background: 'rgba(57, 255, 20, 0.15)' }}>
                <Calendar size={24} style={{ color: '#39FF14' }} />
              </div>
              <div>
                <div className="text-white/60 text-sm mb-1"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Dates
                </div>
                <div className="text-white uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '18px' }}>
                  31 OCT - 13 NOV
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full"
                style={{ background: 'rgba(57, 255, 20, 0.15)' }}>
                <MapPin size={24} style={{ color: '#39FF14' }} />
              </div>
              <div>
                <div className="text-white/60 text-sm mb-1"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Localisation
                </div>
                <div className="text-white uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '18px' }}>
                  DAKAR, SÉNÉGAL
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full"
                style={{ background: 'rgba(57, 255, 20, 0.15)' }}>
                <div className="text-[#39FF14] font-bold" style={{ fontSize: '24px' }}>🏅</div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-1"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Pays Participants
                </div>
                <div className="text-white uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '18px' }}>
                  200+ NATIONS
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
