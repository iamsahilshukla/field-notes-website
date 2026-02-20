import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF9F6] text-[#1e293b] relative selection:bg-[#d97706]/20 selection:text-[#1e293b]">
      {/* Editorial Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#F3F0E6] pointer-events-none hidden lg:block" />
      <div className="absolute top-12 left-12 w-[1px] h-32 bg-[#d97706]/30 hidden lg:block" />
      <div className="absolute top-12 left-12 w-32 h-[1px] bg-[#d97706]/30 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

          {/* Header & Typography Focused Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[2px] w-12 bg-[#d97706]"></span>
                <span className="text-sm uppercase tracking-[0.2em] text-[#d97706] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
                  Stay Connected
                </span>
              </div>

              <h2
                className="text-5xl sm:text-6xl lg:text-7xl mb-8 leading-[1.1] font-medium text-[#0f172a]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Let's explore your <br className="hidden sm:block" />
                <span className="italic text-[#d97706] font-light">research needs.</span>
              </h2>

              <p
                className="text-xl sm:text-2xl text-gray-600 max-w-lg leading-relaxed font-light mb-12"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Our experts are ready to partner with you to uncover valuable insights and drive your next breakthrough.
              </p>
            </div>

            {/* Instant Connect - Elevated WhatsApp Action */}
            <div className="bg-white p-8 sm:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[#25D366]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <h3 className="text-xl font-medium" style={{ fontFamily: 'var(--font-serif)' }}>Direct Line</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                    Scan to instantly connect with our consultancy team on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919955680260"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#1e293b] hover:text-[#25D366] transition-colors group/link pb-1 border-b-2 border-[#1e293b] hover:border-[#25D366]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Open WhatsApp Chat
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="bg-white p-2 shadow-sm border border-gray-100 shrink-0">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/919955680260"
                    alt="WhatsApp QR"
                    className="w-24 h-24 grayscale opacity-80 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Right Side */}
          <div className="lg:w-1/2 flex flex-col pt-4 sm:pt-16 lg:pt-0">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mb-16">

              {/* Distinctive Detail Blocks */}
              <div className="group">
                <div className="mb-4 text-[#d97706]">
                  <Mail className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-medium mb-3 text-[#1e293b]" style={{ fontFamily: 'var(--font-serif)' }}>Inquiries</h4>
                <a
                  href="mailto:info@fieldnotesresearch.com"
                  className="text-gray-600 hover:text-[#d97706] transition-colors text-lg font-light block"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  info@fieldnotesresearch.com
                </a>
              </div>

              <div className="group">
                <div className="mb-4 text-[#d97706]">
                  <Phone className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-medium mb-3 text-[#1e293b]" style={{ fontFamily: 'var(--font-serif)' }}>Consultation</h4>
                <a
                  href="tel:+919955680260"
                  className="text-gray-600 hover:text-[#d97706] transition-colors text-lg font-light block"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  +91 99556 80260
                </a>
              </div>
            </div>

            {/* Expansive Address Section */}
            <div className="border-t border-gray-200 pt-12 mt-auto">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 stroke-[1.5] text-[#d97706] shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-4 text-[#1e293b]" style={{ fontFamily: 'var(--font-serif)' }}>Registered Office</h4>
                  <address className="not-italic text-lg text-gray-600 font-light leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    <strong className="font-medium text-[#1e293b] block mb-2 font-serif">Field Notes Research Consultancy Pvt. Ltd.</strong>
                    Bansdih<br />
                    Ballia (UP)<br />
                    India
                  </address>
                </div>
              </div>
            </div>

            {/* Timezones / Hours */}
            <div className="border-t border-gray-200 pt-12 mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-2 font-medium" style={{ fontFamily: 'var(--font-sans)' }}>Mon - Sat</p>
                <p className="text-lg text-gray-800" style={{ fontFamily: 'var(--font-serif)' }}>9:00 — 17:00 <span className="text-gray-400 text-sm ml-1">IST</span></p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-2 font-medium" style={{ fontFamily: 'var(--font-sans)' }}>Sunday</p>
                <p className="text-lg text-gray-400" style={{ fontFamily: 'var(--font-serif)' }}>Closed</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
