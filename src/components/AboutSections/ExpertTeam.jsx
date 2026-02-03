import React from 'react';
import { UserCircleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const ExpertTeam = () => {
    return (
        <section className="mt-32 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">The Team Behind the Technology</h2>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <UserCircleIcon className="w-12 h-12 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Expertise</h3>
                            <p className="text-indigo-600 font-medium mb-4">Network Ops & Software Development</p>
                            <p className="text-slate-600 leading-relaxed">
                                Our collective is comprised of seasoned network administrators and full-stack software engineers with over a decade of hands-on experience in telecommunications and media streaming architecture. We specialize in optimizing protocol handshakes and mitigating packet loss in high-bandwidth environments.
                            </p>
                        </div>
                        <div className="p-12 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                                <CheckBadgeIcon className="w-12 h-12 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Editorial Integrity</h3>
                            <p className="text-emerald-600 font-medium mb-4">Verified Technical Standards</p>
                            <p className="text-slate-600 leading-relaxed">
                                In an internet flooded with automated content, we stand for accuracy. Every technical guide, toolkit explanation, and protocol analysis on IPTV Factory undergoes a rigorous internal review process. We manually verify our tools against current streaming standards (like HLS and MPEG-DASH) to ensure every piece of advice is actionable and factually correct.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertTeam;
