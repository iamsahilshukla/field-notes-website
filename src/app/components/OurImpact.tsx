import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import IndiaMap from './IndiaMap';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const highlightedStates = [
    "Uttar Pradesh",
    "Kerala",
    "Rajasthan",
    "Andhra Pradesh",
    "Himachal Pradesh",
    "Nagaland",
    "Bihar",
    "Odisha",
    "Maharashtra",
    "Gujarat",
    "West Bengal",
    "Madhya Pradesh",
    "Karnataka",
    "Assam",
    "Jharkhand"
];

export function OurImpact() {
    const [tooltipContent, setTooltipContent] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section id="impact" className="py-24 sm:py-32 bg-[#F3F0E6] text-[#1e293b] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side: Animated Metrics */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[2px] w-12 bg-[#d97706]"></span>
                            <span className="text-sm uppercase tracking-[0.2em] text-[#d97706] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
                                Our Footprint
                            </span>
                        </div>

                        <h2
                            className="text-5xl sm:text-6xl lg:text-7xl mb-12 sm:mb-16 leading-[1.1] font-medium text-[#0f172a]"
                            style={{ fontFamily: 'var(--font-serif)' }}
                        >
                            National insights at <br className="hidden sm:block" />
                            <span className="text-[#d97706] italic">unmatched scale.</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">

                            {/* Metric 1 */}
                            <div>
                                <h3 className="text-xl sm:text-2xl text-gray-500 uppercase tracking-widest font-semibold mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                                    States Covered
                                </h3>
                                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#1e293b]" style={{ fontFamily: 'var(--font-serif)' }}>
                                    {isClient ? <CountUp end={15} duration={3} enableScrollSpy scrollSpyOnce /> : '15'}+
                                </div>
                            </div>

                            {/* Metric 2 */}
                            <div>
                                <h3 className="text-xl sm:text-2xl text-gray-500 uppercase tracking-widest font-semibold mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                                    Respondents
                                </h3>
                                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#1e293b] whitespace-nowrap" style={{ fontFamily: 'var(--font-serif)' }}>
                                    {isClient ? <CountUp end={50} duration={3} enableScrollSpy scrollSpyOnce /> : '50'}K+
                                </div>
                            </div>

                            {/* Metric 3 */}
                            <div className="sm:col-span-2">
                                <h3 className="text-xl sm:text-2xl text-gray-500 uppercase tracking-widest font-semibold mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                                    Field Projects
                                </h3>
                                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#1e293b]" style={{ fontFamily: 'var(--font-serif)' }}>
                                    {isClient ? <CountUp end={50} duration={3} enableScrollSpy scrollSpyOnce /> : '50'}+
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Interactive Map */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center h-[500px] sm:h-[700px] lg:h-[850px] relative -mt-12 lg:mt-0">
                        <IndiaMap highlightedStates={highlightedStates} setTooltipContent={setTooltipContent} />
                    </div>

                </div>
            </div>

            {/* Tooltip for the Map */}
            {isClient && (
                <Tooltip id="map-tooltip" className="!bg-[#1e293b] !text-white !font-sans !font-medium !text-sm !px-4 !py-2 !rounded-md !shadow-xl" float>
                    {tooltipContent}
                </Tooltip>
            )}
        </section>
    );
}
