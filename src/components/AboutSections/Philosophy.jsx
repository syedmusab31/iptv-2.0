import React from 'react';
import { UsersIcon } from "@heroicons/react/24/outline";
import { Zap, Gem } from "lucide-react";

const Philosophy = () => {
    return (
        <section className="mt-32 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-10">Our User-Centric Philosophy</h2>
                <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                    At IPTV Factory, the user experience is paramount. We believe in providing <strong>powerful, yet simple-to-use</strong> tools that solve real-world problems for digital consumers. We constantly refine our algorithms and update our platform to align with the latest industry standards for <strong>licensed content delivery systems</strong>.
                </p>
                <div className="mt-8 grid md:grid-cols-3 gap-8 text-left">
                    <div className="p-8 bg-indigo-50 rounded-2xl shadow-md">
                        <Zap className="h-8 w-8 text-purple-600 mb-3" />
                        <h4 className="text-xl font-semibold text-slate-900">Simplicity & Speed</h4>
                        <p className="text-slate-700 text-sm mt-1">
                            Our interface is designed for maximum speed. Generate the necessary codes for your *paid subscription* in seconds, not minutes.
                        </p>
                    </div>
                    <div className="p-8 bg-purple-50 rounded-2xl shadow-md">
                        <Gem className="h-8 w-8 text-indigo-600 mb-3" />
                        <h4 className="text-xl font-semibold text-slate-900">Quality of Service</h4>
                        <p className="text-slate-700 text-sm mt-1">
                            We maintain a 99.9% uptime and constantly monitor our systems to ensure reliability, guaranteeing the tools are available when you need to connect to your service.
                        </p>
                    </div>
                    <div className="p-8 bg-pink-50 rounded-2xl shadow-md">
                        <UsersIcon className="h-8 w-8 text-pink-600 mb-3" />
                        <h4 className="text-xl font-semibold text-slate-900">Community Driven</h4>
                        <p className="text-slate-700 text-sm mt-1">
                            We listen to our users. Feedback drives our development, ensuring our tools meet the evolving needs of the legitimate IPTV subscriber base.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
