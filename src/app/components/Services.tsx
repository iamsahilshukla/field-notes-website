import { BarChart3, TrendingUp, ShoppingCart, Users, Heart, FileBarChart } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Baseline & Endline Evaluations',
    description: 'Comprehensive assessment of project metrics at critical milestones to measure progress and outcomes effectively.'
  },
  {
    icon: TrendingUp,
    title: 'Impact Evaluation',
    description: 'Rigorous analysis of program effectiveness, measuring real-world impact and return on investment for social initiatives.'
  },
  {
    icon: ShoppingCart,
    title: 'Market Research',
    description: 'In-depth market analysis and consumer insights to guide strategic business decisions and market entry strategies.'
  },
  {
    icon: Users,
    title: 'Livelihood & Sanitation Research',
    description: 'Field-based studies on economic opportunities, sanitation practices, and community development initiatives.'
  },
  {
    icon: Heart,
    title: 'Public Health Studies',
    description: 'Evidence-based research on health interventions, accessibility, and community health outcomes across diverse populations.'
  },
  {
    icon: FileBarChart,
    title: 'Data Analysis & Landscape Reporting',
    description: 'Sophisticated data processing and comprehensive landscape reports that transform raw data into strategic insights.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#d97706]/10 text-[#d97706] rounded-full mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
            Our Services
          </div>
          <h2 
            className="text-4xl md:text-5xl text-[#1e293b] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What We Do
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Comprehensive research solutions tailored to drive evidence-based decision making
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#1e3a8a] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1e3a8a] transition-colors">
                  <Icon className="w-7 h-7 text-[#1e3a8a] group-hover:text-white transition-colors" />
                </div>
                <h3 
                  className="text-xl text-[#1e293b] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
