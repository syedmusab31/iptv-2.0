import React from 'react';
import { BoltIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

const TechnologyOverview = () => {
    return (
        <section className="mt-32 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 text-center mb-16"> How Our Generators Work (The Technology)</h2>
                <div className="bg-white backdrop-blur-md bg-opacity-80 rounded-3xl shadow-2xl p-14">
                    <div className="space-y-8">
                        <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600">
                                <BoltIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900">Understanding Xtream API Logic</h3>
                                <p className="text-slate-700 mt-1">
                                    The <strong>Xtream Code Generator</strong> utilizes known parameters of the Xtream Codes API (used by many legitimate providers) to structure access details. It takes your <strong>valid</strong> provider-issued credentials and formats them into a single, cohesive login string that is compatible with various IPTV client applications, simplifying connection setup.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                                <ComputerDesktopIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900">Stalker Portal Configuration</h3>
                                <p className="text-slate-700 mt-1">
                                    Our <strong>Stalker Code Generator</strong> is built around the Mag and Stalker middleware platforms. This tool generates the correctly formatted <strong>virtual MAC addresses</strong> and portal URL combinations needed for a subscriber's device (e.g., set-top box or smart TV app) to interface with a Stalker-based IPTV service, ensuring proper authentication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyOverview;
