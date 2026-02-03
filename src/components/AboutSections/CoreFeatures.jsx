import React from 'react';
import { ShieldCheckIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Code, Play } from "lucide-react";

const features = [
    {
        title: "Xtream Code Generator",
        description: "Easily generate usernames, passwords, expiration dates, and region-specific codes for legal IPTV services.",
        icon: Play,
    },
    {
        title: "Stalker Code Generator",
        description: "Create portal access codes and MAC addresses with advanced IPTV configuration options.",
        icon: Code,
    },
    {
        title: "Ad-Supported & Free",
        description: "Tools free to use, supported by non-intrusive ads to maintain high-quality services.",
        icon: ShieldCheckIcon,
    },
    {
        title: "Secure & Reliable",
        description: "Prioritize data security and uptime, ensuring smooth and safe access to IPTV content.",
        icon: UsersIcon,
    },
];

const CoreFeatures = () => {
    return (
        <section className="mt-32 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 text-center mb-16"> Core Features</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={idx}
                                className={`relative bg-white bg-opacity-70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-4 hover:scale-105 ${idx % 2 === 0 ? "rotate-1" : "-rotate-1"
                                    }`}
                            >
                                <div className="flex items-center justify-center h-20 w-20 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white mb-6 animate-float">
                                    <Icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-700 text-sm">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoreFeatures;
