import React from 'react';
import { BookOpenIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const LegalCommitment = () => {
    return (
        <section className="mt-32 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Our Commitment to Legality & Safety</h2>
                <div className="lg:flex lg:items-center lg:space-x-12">
                    <div className="lg:w-1/2 bg-white bg-opacity-70 backdrop-blur-md rounded-3xl p-10 shadow-xl mb-10 lg:mb-0">
                        <BookOpenIcon className="h-12 w-12 text-indigo-500 mb-4" />
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Strictly for Authorized Services</h3>
                        <p className="text-slate-700">
                            IPTV Factory's tools are designed to facilitate legitimate access to paid or authorized subscription-based IPTV services. We do not support, endorse, or provide codes for illegal streaming or circumventing content protection measures. Our platform helps users manage and connect to their existing, legally purchased subscriptions efficiently.
                        </p>
                    </div>
                    <div className="lg:w-1/2 bg-white bg-opacity-70 backdrop-blur-md rounded-3xl p-10 shadow-xl">
                        <ShieldCheckIcon className="h-12 w-12 text-indigo-500 mb-4" />
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Data Security & Privacy Focus</h3>
                        <p className="text-slate-700">
                            We prioritize your <strong>privacy and security</strong>. Our code generation process is stateless and does not store sensitive personal information or proprietary subscription details. All generated codes are based on public-domain configuration formats (like Xtream and Stalker protocols) and are intended for use with your <strong>own licensed IPTV provider</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegalCommitment;
