import { GlassCard } from './glass-card';
import { Trophy, Dumbbell, Bike, Volleyball, Zap, Target } from 'lucide-react';

export function SportsCategories() {
  const sports = [
    { name: 'Athlétisme', icon: Zap, events: 32, color: '#39FF14' },
    { name: 'Natation', icon: Trophy, events: 24, color: '#3B82F6' },
    { name: 'Gymnastique', icon: Target, events: 18, color: '#F59E0B' },
    { name: 'Cyclisme', icon: Bike, events: 12, color: '#EF4444' },
    { name: 'Haltérophilie', icon: Dumbbell, events: 10, color: '#8B5CF6' },
    { name: 'Volleyball', icon: Volleyball, events: 8, color: '#EC4899' }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="uppercase tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#ffffff',
              letterSpacing: '1px'
            }}>
            DISCIPLINES <span style={{ color: '#39FF14' }}>SPORTIVES</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: '1.7'
            }}>
            Plus de 100 épreuves dans 28 disciplines olympiques
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sports.map((sport, index) => {
            const Icon = sport.icon;
            return (
              <GlassCard key={index} hover={true} className="text-center">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${sport.color}20, ${sport.color}10)`,
                    border: `2px solid ${sport.color}40`
                  }}>
                  <Icon size={32} style={{ color: sport.color }} />
                </div>
                <h3 className="uppercase mb-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px',
                    color: '#ffffff',
                    letterSpacing: '0.5px'
                  }}>
                  {sport.name}
                </h3>
                <p className="text-white/50 text-xs"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {sport.events} épreuves
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
