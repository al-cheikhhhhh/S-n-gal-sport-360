import { GlassCard } from './glass-card';
import { Clock, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewsGrid() {
  const newsItems = [
    {
      category: 'Basketball',
      title: 'L\'équipe sénégalaise de basketball remporte son premier match de qualification',
      excerpt: 'Une victoire écrasante 89-67 contre le Nigeria lors des éliminatoires régionales.',
      time: 'Il y a 2 heures',
      trending: true,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80'
    },
    {
      category: 'Athlétisme',
      title: 'Record national établi lors des qualifications du 100m féminin',
      excerpt: 'Aminata Diallo franchit la ligne en 10.98 secondes, un nouveau record pour le Sénégal.',
      time: 'Il y a 4 heures',
      trending: true,
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80'
    },
    {
      category: 'Football',
      title: 'Le stade de Diamniadio prêt à accueillir les compétitions',
      excerpt: 'Les derniers aménagements sont terminés, capacité de 50,000 spectateurs confirmée.',
      time: 'Il y a 6 heures',
      trending: false,
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80'
    },
    {
      category: 'Natation',
      title: 'Inauguration du nouveau complexe aquatique olympique',
      excerpt: 'Le centre international de natation de Dakar ouvre ses portes avec 8 bassins de compétition.',
      time: 'Il y a 8 heures',
      trending: false,
      image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80'
    },
    {
      category: 'Judo',
      title: 'Trois médailles d\'or pour l\'Afrique de l\'Ouest aux championnats préparatoires',
      excerpt: 'Performance exceptionnelle des judokas sénégalais, maliens et ivoiriens.',
      time: 'Il y a 12 heures',
      trending: false,
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80'
    },
    {
      category: 'Culture',
      title: 'Cérémonie d\'ouverture: fusion de tradition et modernité',
      excerpt: 'Un spectacle de 3 heures mêlant danse sabar, percussions djembé et performances high-tech.',
      time: 'Il y a 1 jour',
      trending: false,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80'
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
            <span style={{ color: '#39FF14' }}>TOP</span> INFOS
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
            Voir Tout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <GlassCard key={index} hover={true}>
              <div className="relative mb-4 rounded-[12px] overflow-hidden h-[200px]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs uppercase tracking-wide"
                  style={{
                    background: 'rgba(67, 35, 115, 0.9)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    backdropFilter: 'blur(10px)'
                  }}>
                  {item.category}
                </div>
                {item.trending && (
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5"
                    style={{
                      background: 'rgba(57, 255, 20, 0.9)',
                      color: '#000000',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700
                    }}>
                    <TrendingUp size={14} />
                    TENDANCE
                  </div>
                )}
              </div>

              <h3 className="mb-3 leading-tight"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: '1.3'
                }}>
                {item.title}
              </h3>

              <p className="mb-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6'
                }}>
                {item.excerpt}
              </p>

              <div className="flex items-center gap-2 text-white/50 text-xs"
                style={{ fontFamily: 'var(--font-body)' }}>
                <Clock size={14} />
                {item.time}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
