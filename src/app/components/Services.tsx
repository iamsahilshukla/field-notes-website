import { BarChart3, TrendingUp, ShoppingCart, Users, Heart, FileBarChart } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Baseline & Endline Evaluations',
    description: 'Comprehensive assessment of project metrics at critical milestones to measure progress and outcomes effectively.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzcxNTg4MDAxfDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral'
  },
  {
    icon: TrendingUp,
    title: 'Impact Evaluation',
    description: 'Rigorous analysis of program effectiveness, measuring real-world impact and return on investment for social initiatives.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwwfHx8fDE3NzE1ODgwMDV8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral'
  },
  {
    icon: ShoppingCart,
    title: 'Market Research',
    description: 'In-depth market analysis and consumer insights to guide strategic business decisions and market entry strategies.',
    image: 'https://images.unsplash.com/photo-1553877522-43ce6fcff6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NzE1ODgwMDl8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Users,
    title: 'Livelihood & Sanitation Research',
    description: 'Field-based studies on economic opportunities, sanitation practices, and community development initiatives.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHRvZ2V0aGVyfGVufDB8fHx8MTc3MTU4ODAxNHww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Heart,
    title: 'Public Health Studies',
    description: 'Evidence-based research on health interventions, accessibility, and community health outcomes across diverse populations.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2h8ZW58MHx8fHwxNzcxNTg4MDIyfDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral'
  },
  {
    icon: FileBarChart,
    title: 'Data Analysis & Landscape Reports',
    description: 'Sophisticated data processing and comprehensive landscape reports that transform raw data into strategic insights.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXBvcnQlMjBkZXNrfGVufDB8fHx8MTc3MTU4ODAyOHww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral'
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

        {/* Services Editorial List */}
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative border-b border-gray-200 py-10 sm:py-14 hover:bg-white transition-colors duration-500 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center -mx-4 sm:mx-0 px-4 sm:px-8"
              >
                {/* Index Numbering */}
                <div
                  className="text-4xl sm:text-5xl text-gray-200 group-hover:text-[#d97706] transition-colors duration-500 font-light w-16 shrink-0"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Service Title */}
                <div className="flex-1 md:w-1/3 shrink-0">
                  <h3
                    className="text-2xl sm:text-3xl text-[#1e293b] group-hover:text-[#1e3a8a] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Service Description */}
                <div className="flex-1 mt-2 md:mt-0">
                  <p
                    className="text-lg text-gray-600 leading-relaxed font-light"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {service.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
