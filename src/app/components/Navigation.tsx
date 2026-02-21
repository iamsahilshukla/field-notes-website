import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Close menu when clicking a link
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

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'work' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/brand/F_logo_proper.png"
              alt="Field Notes Research Logo"
              className="h-12 w-auto object-contain mix-blend-multiply"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-[#1e3a8a] transition-colors font-medium"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/919955680260"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat with an Expert</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://wa.me/919955680260"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-sm hover:shadow-md transition-all font-medium text-sm"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#1e3a8a] focus:outline-none p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full pb-6 px-4 pt-3 flex flex-col space-y-1 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50 transition-colors text-left px-4 py-3.5 rounded-md font-medium border-b border-gray-50 last:border-none"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
