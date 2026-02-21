import { useState } from 'react';
import { X, ChevronUp } from 'lucide-react';

const teamMembers = [
  {
  name: 'Rajan Pandey',
  role: 'Director',
  bio: 'Contributing expert to our research consultancy initiatives.',
  image: '/team/rajan-pandey.jpeg'
},
  {
    name: 'Kalyan Swarup',
    role: 'Policy Analyst | Research Communicator',
    bio: 'Kalyan Swarup is a media professional and political analyst with a strong academic foundation in journalism and communication. An engineering graduate, he transitioned into media after completing a PG Diploma from B.H.U. and a Master’s in Journalism and Mass Communication from Mahatma Gandhi Central University.\n\nHe began his journalism career with ETV Bharat News, reporting on political and social developments across regions. His work reflects a keen interest in decoding political narratives and exploring governance structures through research-led storytelling. Currently associated with Field Notes Research, Kalyan continues to focus on media analysis, political discourse, and the evolving intersection of communication and public opinion.',
    image: '/team/kalyan-swarup.jpeg'
  },
  {
    name: 'Gaurav Gulmohar',
    role: 'Community Issues Researcher',
    bio: 'Gaurav Gulmohar is an independent journalist based in eastern Uttar Pradesh, known for his in-depth field reporting and grassroots storytelling. Over the past three years, he has covered diverse social issues across Uttar Pradesh and Delhi, with his work appearing in platforms such as Down To Earth and Mojo Story.\n\nHailing from a farming family in Lambhua village, Sultanpur, Gaurav brings authenticity and empathy to his reporting. His journalism highlights critical themes such as secularism, caste dynamics, and marginalized community rights—particularly those of the Nishad community. His research-driven approach and commitment to social justice continue to shape conversations around equity and inclusion in regional narratives.',
    image: '/team/gaurav.jpeg'
  },
  {
    name: 'Atul Kumar Pandey',
    role: 'Communications Researcher | Digital Strategy Consultant | Survey Specialist',
    bio: 'Atul Kumar Pandey is a communications expert with a strong foundation in digital strategy, audience analysis, and survey-based research. With extensive experience in planning and executing data-driven outreach, he focuses on crafting impactful communication frameworks rooted in evidence and behavioral insights. His work spans content strategy, media analytics, and research design, aimed at enhancing information delivery and stakeholder engagement.',
    image: '/team/atul-kumar.jpeg'
  },
  {
    name: 'Suryaprakash Kaswan',
    role: 'Strategic Analyst | Research Consultant | Policy Enthusiast',
    bio: 'Suryaprakash Kaswan is a strategic thinker with over four years of experience in research, stakeholder engagement, and data-driven decision-making. He has contributed to high-level analytical reports across diverse Indian states, focusing on citizen rights, governance models, and regional dynamics. With a strong foundation in field research and organizational strategy, he excels at synthesizing complex data into actionable insights for impactful decision-making.',
    image: '/team/surya-prakash.jpeg'
  },
  {
    name: 'Aishwarya D. Meshram',
    role: 'Media Researcher | Trainer | Social Communication Expert',
    bio: 'Aishwarya D. Meshram is a versatile media professional with a rich background in journalism, public communication, and community training. She has worked with leading publications and NGOs, designing and executing awareness campaigns and educational content. A three-time India Book of Records holder, she specializes in social messaging, digital outreach, and grassroots capacity building, with an emphasis on environmental and educational advocacy.',
    image: '/team/aishwarya.jpeg'
  },
  {
    name: 'Abhishek Raj',
    role: 'Project Strategist | Research Analyst | Operations Specialist',
    bio: 'Abhishek Raj is a results-oriented project leader with deep expertise in research coordination, operational management, and strategic execution. With an MBA in Marketing and HR, he brings a structured approach to stakeholder engagement and data interpretation. His work spans high-impact initiatives where he’s managed large teams and synthesized field research into strategic outcomes.',
    image: '/team/abhishek-raj.jpeg'
  },
  {
    name: 'Ananya Shukla',
    role: 'Growth Strategist | Research Consultant | Organizational Development Advisor',
    bio: 'Ananya Shukla is a multidisciplinary professional with experience in scaling startups, research consultancy, and strategic innovation. With a background in growth leadership, she has led research-driven projects and advisory roles, focusing on organizational development and stakeholder mapping. Her strength lies in combining analytical thinking with practical execution to drive sustainable, impact-focused solutions.',
    image: '/team/ananya-shukla.jpeg'
  },
  {
    name: 'Hasna K. H.',
    role: 'Media Strategist | Political Strategy Consultant | Gender & Public Policy Researcher',
    bio: 'Hasna K. H. is a media strategist and political analyst with a strong foundation in law, gender studies, and electoral research. With professional experience as a media consultant, political strategist, and researcher, she has worked closely with political parties on campaign communication, narrative building, and public engagement.\n\nHolding a Degree in Law and a Master’s in Women’s Studies, Hasna’s work bridges legal insight, gender analysis, and political practice. She has extensive experience in research design and data collection, including qualitative interviews, fieldwork coordination, survey implementation, and political data analysis. Her work spans gender justice, labour politics, and election studies, with a particular focus on how power, representation, and media intersect in contemporary democratic spaces.\n\nShe brings together strategy, research, data-driven insight, and storytelling to shape impactful political communication grounded in social realities.',
    image: '/team/hasna-Kh.jpeg'
  }
];

export function Team() {
  const [activeMember, setActiveMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#d97706]/10 text-[#d97706] rounded-full mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
            Our Team
          </div>
          <h2
            className="text-4xl md:text-5xl text-[#1e293b] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Meet the Experts
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            A dedicated team of professionals bringing diverse expertise to every project
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#1e3a8a] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col"
              onClick={() => setActiveMember(activeMember === index ? null : index)}
            >
              <div className="aspect-square overflow-hidden bg-gray-100 relative shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative bg-white z-10 flex flex-col flex-grow">
                <h3
                  className="text-xl text-[#1e293b] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm text-[#d97706] line-clamp-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {member.role}
                </p>
                <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read full bio</span>
                  <ChevronUp className="w-3 h-3" />
                </div>
              </div>

              {/* Overlay Content (Mobile Click + Desktop Hover) */}
              <div
                className={`absolute inset-0 bg-white/95 backdrop-blur-md p-6 overflow-y-auto transition-all duration-500 ease-in-out z-20 flex flex-col shadow-inner
                ${activeMember === index ? 'translate-y-0 opacity-100' : 'translate-y-[102%] opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'}`}
              >
                <div className="flex justify-between items-start mb-4 shrink-0">
                  <div>
                    <h3 className="text-xl text-[#1e293b] leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>{member.name}</h3>
                    <p className="text-xs font-semibold text-[#d97706] mt-1 pr-4" style={{ fontFamily: 'var(--font-sans)' }}>{member.role}</p>
                  </div>
                  <button
                    className="md:hidden text-gray-400 hover:text-[#1e293b] p-2 -mr-2 -mt-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    onClick={(e) => { e.stopPropagation(); setActiveMember(null); }}
                    aria-label="Close bio"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-sm text-gray-700 space-y-3 font-sans leading-relaxed pb-6">
                  {member.bio.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
