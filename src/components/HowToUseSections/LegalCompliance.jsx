import React from 'react';
import { ShieldCheck, Database, Code } from "lucide-react";

// Data for Compliance Section - Moved inside or kept here if needed independently
export const compliancePoints = [
    {
        title: "100% Legal Use Policy",
        description:
            "Our generators strictly format codes for legitimate, paid IPTV subscriptions. We do not provide or generate content access, only configuration strings.",
        icon: ShieldCheck,
    },
    {
        title: "Data Protection Guarantee",
        description:
            "All generated information is ephemeral and not stored. We prioritize user privacy and secure connection protocols.",
        icon: Database,
    },
    {
        title: "No Content Hosting",
        description:
            "We are a tool provider, not a content host. This platform does not stream, store, or link to any copyrighted media.",
        icon: Code,
    },
];

const LegalCompliance = () => {
    return (
        <div className="mt-32 pt-16 border-t border-gray-200">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-slate-900">
                    Legal Compliance and Safe Use
                </h2>
                <p className="mt-4 text-lg text-slate-700 max-w-4xl mx-auto">
                    Our commitment is to provide <strong>legally compliant</strong> configuration tools only. These generators are designed to assist users in accessing their <strong>existing, paid, and licensed</strong> IPTV services.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                {compliancePoints.map((point, index) => (
                    <div key={index} className="p-8 bg-indigo-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center space-x-4">
                            <point.icon className="h-8 w-8 text-indigo-600" />
                            <h3 className="text-xl font-bold text-slate-900">{point.title}</h3>
                        </div>
                        <p className="mt-4 text-slate-700">{point.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LegalCompliance;
