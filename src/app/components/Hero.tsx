import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-section-image.jpeg"
          alt="Field Research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/95 via-[#1e3a8a]/85 to-[#1e3a8a]/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Evidence-Based Research for Impactful Decisions
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Specializing in field research, surveys, and evaluations for government agencies, NGOs, and market entities
          </p>
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d97706] text-white rounded-lg hover:bg-[#ea580c] transition-all transform hover:scale-105 shadow-lg"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
