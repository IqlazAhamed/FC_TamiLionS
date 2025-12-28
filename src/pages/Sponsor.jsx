import React from 'react';
import SectionCard from '../components/SectionCard';

const Sponsor = () => {
    // Placeholder sponsors for demo
    const sponsors = [
        { name: "Sponsor A", type: "Kit Sponsor" },
        { name: "Sponsor B", type: "Training Partner" },
        { name: "Sponsor C", type: "Logistics Partner" },
        { name: "Sponsor D", type: "Recovery Partner" },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <SectionCard title="Our Sponsors">
                <p className="text-center text-gray-500 mb-8">Proudly supported by top brands committed to sports excellence.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-gray-500 font-bold text-xl">
                                {sponsor.name.charAt(0)}
                            </div>
                            <h4 className="font-bold text-gray-800">{sponsor.name}</h4>
                            <p className="text-xs text-gray-500 uppercase">{sponsor.type}</p>
                        </div>
                    ))}
                </div>
            </SectionCard>
        </div>
    );
};

export default Sponsor;
