const teamMembers = [
  {
    name: 'Kalyan Swarup',
    role: 'Policy Analyst | Research Communicator',
    bio: 'Expert in translating complex policy research into actionable insights for stakeholders.',
    image: 'https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTUyMTU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Gaurav Gulmohar',
    role: 'Community Issues Researcher',
    bio: 'Specializes in grassroots engagement and community-centered research methodologies.',
    image: 'https://images.unsplash.com/photo-1560242565-89440ce40739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGluZGlhbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTU3MzEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Atul Kumar Pandey',
    role: 'Communications Researcher | Digital Strategy Consultant',
    bio: 'Bridges research findings with digital communication strategies for maximum impact.',
    image: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGFzaWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNTczMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Suryaprakash Kaswan',
    role: 'Strategic Analyst | Policy Enthusiast',
    bio: 'Drives strategic analysis with a focus on evidence-based policy recommendations.',
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNTE4OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Aishwarya D. Meshram',
    role: 'Media Researcher | Trainer',
    bio: 'Combines media research expertise with training initiatives for capacity building.',
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNDk1NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Abhishek Raj',
    role: 'Project Strategist | Operations Specialist',
    bio: 'Ensures seamless project execution through strategic planning and operational excellence.',
    image: 'https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTUyMTU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Ananya Shukla',
    role: 'Growth Strategist | Organizational Development Advisor',
    bio: 'Focuses on sustainable growth strategies and organizational capacity development.',
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNDk1NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Hasna K. H.',
    role: 'Media Strategist | Gender & Public Policy Researcher',
    bio: 'Integrates gender perspectives into public policy research and media strategy.',
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNDk1NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Team() {
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
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#1e3a8a] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl text-[#1e293b] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {member.name}
                </h3>
                <p 
                  className="text-sm text-[#d97706] mb-3"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {member.role}
                </p>
                <p 
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
