import { useState, useEffect } from 'react';
// Les composants sont dans ./app/components/ d'après tes dossiers
import { Navbar } from './app/components/navbar';
import { HeroSection } from './app/components/hero-section';
import { NewsGrid } from './app/components/news-grid';
import { Countdown } from './app/components/countdown';
import { SportsCategories } from './app/components/sports-categories';
import { FeaturedStats } from './app/components/featured-stats';
import { VideoHighlights } from './app/components/video-highlights';
import { LiveMatches } from './app/components/live-matches';
import { Footer } from './app/components/footer';
import { AfricanPattern } from './app/components/african-pattern';
import { TopInfosPage } from './app/components/top-infos-page'; 

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    // Écoute les changements d'URL
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden"
      style={{
        background: '#000000',
        fontFamily: 'var(--font-body)'
      }}>
      <AfricanPattern />

      <Navbar />

      <main className="pt-[68px] md:pt-[68px] sm:pt-[56px]">
        {path === '/top-infos' ? (
          <TopInfosPage /> 
        ) : (
          <>
            <HeroSection />
            <LiveMatches />
            <FeaturedStats />
            <Countdown />
            <SportsCategories />
            <NewsGrid />
            <VideoHighlights />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
