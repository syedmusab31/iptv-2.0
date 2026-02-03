import React from 'react';
import { Clock, Wifi, LifeBuoy } from "lucide-react";

// Data for Troubleshooting Section
export const troubleshootingTips = [
    {
        title: "Check Subscription Status",
        description: "Ensure your IPTV service subscription is active and paid before using the generator.",
        icon: Clock,
    },
    {
        title: "Verify Network Connection",
        description: "Confirm you have a stable and fast internet connection (Wi-Fi or Ethernet) for successful configuration.",
        icon: Wifi,
    },
    {
        title: "Refer to Your Provider",
        description: "For specific portal URLs or Xtream API credentials, always consult your licensed IPTV service provider.",
        icon: LifeBuoy,
    },
];

const Troubleshooting = () => {
    return (
        <div className="mt-32 pt-16 border-t border-gray-200 mb-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-slate-900">
                    Troubleshooting & Support
                </h2>
                <p className="mt-4 text-lg text-slate-700 max-w-4xl mx-auto">
                    Encountering issues? Here are a few common checks to perform before seeking further support.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {troubleshootingTips.map((tip, index) => (
                    <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <tip.icon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900">{tip.title}</h3>
                        <p className="mt-2 text-slate-700 text-sm">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Troubleshooting;
