import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { OurWork } from './components/OurWork';
import { Team } from './components/Team';
import { Contact } from './components/Contact';

export default function App() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      <Navigation />
      <Hero onExploreClick={scrollToServices} />
      <About />
      <Services />
      <OurWork />
      <Team />
      <Contact />
    </div>
  );
}
