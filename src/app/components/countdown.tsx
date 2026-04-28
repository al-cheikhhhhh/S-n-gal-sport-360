import { GlassCard } from './glass-card';
import { useEffect, useState } from 'react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-31T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#432373] to-[#1a0f2e] opacity-40"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="uppercase tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#ffffff',
              letterSpacing: '1px'
            }}>
            COMPTE À REBOURS
          </h2>
          <p className="text-white/70"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px'
            }}>
            Jours restants avant l'histoire
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <GlassCard className="text-center">
            <div className="mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(48px, 8vw, 72px)',
                color: '#39FF14',
                lineHeight: '1'
              }}>
              {timeLeft.days}
            </div>
            <div className="uppercase tracking-wide"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 600
              }}>
              Jours
            </div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(48px, 8vw, 72px)',
                color: '#39FF14',
                lineHeight: '1'
              }}>
              {timeLeft.hours}
            </div>
            <div className="uppercase tracking-wide"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 600
              }}>
              Heures
            </div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(48px, 8vw, 72px)',
                color: '#39FF14',
                lineHeight: '1'
              }}>
              {timeLeft.minutes}
            </div>
            <div className="uppercase tracking-wide"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 600
              }}>
              Minutes
            </div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(48px, 8vw, 72px)',
                color: '#39FF14',
                lineHeight: '1'
              }}>
              {timeLeft.seconds}
            </div>
            <div className="uppercase tracking-wide"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 600
              }}>
              Secondes
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
