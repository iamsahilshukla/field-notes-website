import { FileText } from 'lucide-react';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.jpeg"
              alt="Field Notes Research Logo"
              className="h-12 w-auto object-contain mix-blend-multiply"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="md:hidden px-4 py-2 bg-[#1e3a8a] text-white rounded-lg"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
