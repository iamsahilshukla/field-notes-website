export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/about/our-mission.jpeg"
              alt="Data Analysis"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 bg-[#d97706]/10 text-[#d97706] rounded-full mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
              About Us
            </div>
            <h2
              className="text-4xl md:text-5xl text-[#1e293b] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Mission
            </h2>
            <div className="space-y-4 text-lg text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
              <p className="leading-relaxed">
                Field Notes Research Consultancy Private Limited delivers actionable insights through rigorous field research and comprehensive data analysis. We bridge the gap between grassroots realities and policy decisions.
              </p>
              <p className="leading-relaxed">
                Our approach combines deep grassroots storytelling with sophisticated data analysis, creating landscape reports that drive meaningful change. We specialize in transforming complex field data into clear, evidence-based recommendations.
              </p>
              <p className="leading-relaxed">
                With expertise spanning impact evaluations, market research, and public health studies, we empower government agencies, NGOs, CSR projects, and corporate clients to make informed decisions that create lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
