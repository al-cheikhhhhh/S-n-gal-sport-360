import { Navbar } from './components/navbar';
import { HeroSection } from './components/hero-section';
import { NewsGrid } from './components/news-grid';
import { Countdown } from './components/countdown';
import { SportsCategories } from './components/sports-categories';
import { FeaturedStats } from './components/featured-stats';
import { VideoHighlights } from './components/video-highlights';
import { LiveMatches } from './components/live-matches';
import { Footer } from './components/footer';
import { AfricanPattern } from './components/african-pattern';

export default function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden"
      style={{
        background: '#000000',
        fontFamily: 'var(--font-body)'
      }}>
      <AfricanPattern />

      <Navbar />

      <main className="pt-[68px] md:pt-[68px] sm:pt-[56px]">
        <HeroSection />
        <LiveMatches />
        <FeaturedStats />
        <Countdown />
        <SportsCategories />
        <NewsGrid />
        <VideoHighlights />
      </main>

      <Footer />
    </div>
  );
}