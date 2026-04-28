import { GlassCard } from './glass-card';
import { Radio } from 'lucide-react';

export function LiveMatches() {
  const matches = [
    {
      sport: 'Basketball',
      team1: { name: 'SEN', flag: '🇸🇳', score: 78 },
      team2: { name: 'NGA', flag: '🇳🇬', score: 65 },
      quarter: 'Q4 - 08:45',
      isLive: true
    },
    {
      sport: 'Football',
      team1: { name: 'CIV', flag: '🇨🇮', score: 2 },
      team2: { name: 'GHA', flag: '🇬🇭', score: 1 },
      quarter: '75\'',
      isLive: true
    },
    {
      sport: 'Volleyball',
      team1: { name: 'EGY', flag: '🇪🇬', score: 2 },
      team2: { name: 'KEN', flag: '🇰🇪', score: 1 },
      quarter: 'SET 4',
      isLive: true
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, #39FF14 0%, transparent 70%)',
            filter: 'blur(150px)'
          }}></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <h2 className="uppercase tracking-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#ffffff',
                letterSpacing: '1px'
              }}>
              MATCHS <span style={{ color: '#39FF14' }}>EN DIRECT</span>
            </h2>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(220, 38, 38, 0.9)' }}>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <span className="text-white text-xs font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                LIVE
              </span>
            </div>
          </div>

          <button className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full uppercase text-sm tracking-wide transition-all hover:scale-105"
            style={{
              background: '#39FF14',
              color: '#000000',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              boxShadow: '0 4px 20px rgba(57, 255, 20, 0.3)'
            }}>
            <Radio size={16} />
            Voir Tous les Matchs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matches.map((match, index) => (
            <GlassCard key={index} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5"
                style={{
                  background: 'radial-gradient(circle, #39FF14 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wide"
                    style={{
                      background: 'rgba(67, 35, 115, 0.6)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700
                    }}>
                    {match.sport}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(220, 38, 38, 0.8)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                    <span className="text-white text-xs font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                      {match.quarter}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{match.team1.flag}</span>
                      <span className="uppercase tracking-wide"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '24px',
                          color: '#ffffff',
                          letterSpacing: '1px'
                        }}>
                        {match.team1.name}
                      </span>
                    </div>
                    <div className="px-4 py-2 rounded-lg"
                      style={{
                        background: 'rgba(57, 255, 20, 0.15)',
                        border: '2px solid rgba(57, 255, 20, 0.3)'
                      }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '32px',
                        color: '#39FF14',
                        lineHeight: '1'
                      }}>
                        {match.team1.score}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{match.team2.flag}</span>
                      <span className="uppercase tracking-wide"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '24px',
                          color: '#ffffff',
                          letterSpacing: '1px'
                        }}>
                        {match.team2.name}
                      </span>
                    </div>
                    <div className="px-4 py-2 rounded-lg"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '2px solid rgba(255, 255, 255, 0.1)'
                      }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '32px',
                        color: '#ffffff',
                        lineHeight: '1'
                      }}>
                        {match.team2.score}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 rounded-full uppercase text-sm tracking-wide transition-all hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700
                  }}>
                  Suivre le Match
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
