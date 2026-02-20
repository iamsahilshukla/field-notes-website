import { ExternalLink } from 'lucide-react';

const works = [
    {
        id: 1,
        date: 'Dec 31, 2024',
        title: 'Nationwide Field Research Operations',
        description: 'Within six months of its formation, team Fieldnotes has completed multiple field research projects- from the sea coasts of Kerala and Andhra Pradesh in South to the mighty Himalayas of Himachal Pradesh and Gangetic plains of UP in the north...',
        imageUrl: '/work-1.jpeg',
        link: 'https://www.linkedin.com/posts/field-notes-research_within-six-months-of-its-formation-team-activity-7284064778350706689-nTZ9',
        span: 'md:col-span-2 md:row-span-2' // Larger feature item
    },
    {
        id: 2,
        date: 'Feb 13, 2025',
        title: 'Evaluating the Drone Theft Scare in UP',
        description: 'Is Drone Theft scare the new “Bachcha Chor” rumour which caused havoc in last decade? UP is under the grip of fear and mistrust caused by the Drone Chor phenomenon. Villagers across the state suspect that thieves are using modern technology like drones to do aerial surveillance...',
        imageUrl: '/work-2.jpeg',
        link: 'https://www.linkedin.com/posts/rajan-pandey-b4766b97_is-drone-theft-scare-the-new-bachcha-chor-activity-7381584616467386368-7qPY',
        span: 'md:col-span-1 md:row-span-2' // Tall vertical item
    },
    {
        id: 3,
        date: 'Oct 8, 2024',
        title: 'Haryana Assembly Election 2024 Exit Poll Analysis',
        description: 'The exit poll of People’s Pulse predicts a clear Congress win in HaryanaAssemblyElection2024 while ruling BJP is far behind. Other than INLD-BSP alliance and independents, smaller parties likely to get a 0.',
        imageUrl: '/work-3.jpeg',
        link: 'https://www.linkedin.com/posts/rajan-pandey-b4766b97_the-exit-poll-of-peoples-pulse-predicts-activity-7248322601016565761-vUqK',
        span: 'md:col-span-1 md:row-span-1' // Standard square
    },
    {
        id: 4,
        date: 'Feb 26, 2026',
        title: '9 States Field Surveys Concluded',
        description: 'Over past 2 months, our teams have finished field surveys in 9 states- from the sea coast of Kerala to snow capped mountains of Himachal Pradesh and from the deserts of Barmer in Rajasthan to the hills of Nagaland.',
        imageUrl: '/work-4.jpeg',
        link: 'https://www.linkedin.com/posts/rajan-pandey-b4766b97_over-past-2-months-our-teams-have-finished-activity-7429555505993388032-aZ6b',
        span: 'md:col-span-2 md:row-span-1' // Wide rectangle
    }
];

export function OurWork() {
    return (
        <section id="work" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1 bg-[#1e3a8a]/10 text-[#1e3a8a] rounded-full mb-6 font-medium tracking-wide text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                            Field Reports & Case Studies
                        </div>
                        <h2
                            className="text-4xl md:text-6xl text-[#1e293b] leading-tight"
                            style={{ fontFamily: 'var(--font-serif)' }}
                        >
                            Our Work in the Field
                        </h2>
                    </div>
                    <div className="md:w-1/3">
                        <p
                            className="text-lg text-gray-600 leading-relaxed font-light"
                            style={{ fontFamily: 'var(--font-sans)' }}
                        >
                            Explore recent qualitative studies, landscape reports, and field insights direct from our teams operating across India.
                        </p>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
                    {works.map((work) => (
                        <a
                            key={work.id}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 block ${work.span}`}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={work.imageUrl}
                                    alt={work.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/90 via-[#1e293b]/40 to-transparent group-hover:from-[#1e3a8a]/90 transition-colors duration-500" />
                            </div>

                            {/* Content Container */}
                            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                                    {/* Meta tag */}
                                    <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className="text-sm font-medium text-[#d97706] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider">
                                            LinkedIn Update
                                        </span>
                                        <span className="text-sm text-gray-300 font-light hidden sm:inline-block">
                                            {work.date}
                                        </span>
                                    </div>

                                    <h3
                                        className="text-2xl sm:text-3xl text-white mb-3"
                                        style={{ fontFamily: 'var(--font-serif)' }}
                                    >
                                        {work.title}
                                    </h3>

                                    <p
                                        className="text-gray-200 text-sm sm:text-base leading-relaxed line-clamp-2 md:line-clamp-3 font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                    >
                                        {work.description}
                                    </p>

                                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors gap-2 text-sm font-medium">
                                        <span>Read full report</span>
                                        <ExternalLink className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                    </div>

                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
