import { GlassCard } from './glass-card';
import { Users, Globe, Medal, Flame } from 'lucide-react';

export function FeaturedStats() {
  const stats = [
    {
      icon: Users,
      value: '3,500+',
      label: 'Athlètes',
      description: 'De tous les continents'
    },
    {
      icon: Globe,
      value: '200+',
      label: 'Pays',
      description: 'Comités olympiques nationaux'
    },
    {
      icon: Medal,
      value: '241',
      label: 'Médailles',
      description: 'Or, argent et bronze'
    },
    {
      icon: Flame,
      value: '28',
      label: 'Sports',
      description: 'Disciplines olympiques'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #39FF14 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #432373 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="uppercase tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#ffffff',
              letterSpacing: '1px'
            }}>
            EN <span style={{ color: '#39FF14' }}>CHIFFRES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <GlassCard key={index} className="text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-5">
                  <Icon size={120} className="text-white" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4 mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(57, 255, 20, 0.15)',
                      border: '2px solid rgba(57, 255, 20, 0.3)'
                    }}>
                    <Icon size={28} style={{ color: '#39FF14' }} />
                  </div>
                  <div className="mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(36px, 6vw, 56px)',
                      color: '#39FF14',
                      lineHeight: '1'
                    }}>
                    {stat.value}
                  </div>
                  <h3 className="uppercase mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '18px',
                      color: '#ffffff',
                      letterSpacing: '1px'
                    }}>
                    {stat.label}
                  </h3>
                  <p className="text-white/60 text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {stat.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
