import { GlassCard } from './glass-card';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VideoHighlights() {
  const videos = [
    {
      title: 'Résumé du match de basketball : Sénégal vs Nigeria',
      thumbnail: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80',
      duration: '12:45',
      category: 'Basketball'
    },
    {
      title: 'Record du monde junior battu au 100m',
      thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      duration: '8:30',
      category: 'Athlétisme'
    },
    {
      title: 'Visite du village olympique de Dakar',
      thumbnail: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80',
      duration: '15:20',
      category: 'Reportage'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="uppercase tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#ffffff',
              letterSpacing: '1px'
            }}>
            <span style={{ color: '#39FF14' }}>TEMPS</span> FORTS
          </h2>

          <button className="px-6 py-2.5 rounded-full uppercase text-sm tracking-wide transition-all hover:scale-105"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              backdropFilter: 'blur(10px)'
            }}>
            Toutes les Vidéos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <GlassCard key={index} hover={true} className="group cursor-pointer">
              <div className="relative mb-4 rounded-[12px] overflow-hidden h-[220px]">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all group-hover:bg-black/60">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                    style={{
                      background: 'rgba(57, 255, 20, 0.9)',
                      boxShadow: '0 0 30px rgba(57, 255, 20, 0.5)'
                    }}>
                    <Play size={28} fill="#000000" className="text-black ml-1" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs uppercase tracking-wide"
                  style={{
                    background: 'rgba(67, 35, 115, 0.9)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    backdropFilter: 'blur(10px)'
                  }}>
                  {video.category}
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-xs"
                  style={{
                    background: 'rgba(0, 0, 0, 0.9)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600
                  }}>
                  {video.duration}
                </div>
              </div>

              <h3 className="leading-tight"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: '1.4'
                }}>
                {video.title}
              </h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
