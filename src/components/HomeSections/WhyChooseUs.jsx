import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
    return (
        <div className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                        Why Choose Us
                    </h2>
                    <p className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                        Everything You Need to Power Your Streams
                    </p>
                    <p className="mt-6 text-base text-slate-600 leading-relaxed">
                        Our tools are engineered for professionals who demand reliability,
                        speed, and security ensuring a seamless experience every time.
                    </p>
                </div>
                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            <CheckCircle className="h-6 w-6 text-primary-600" />
                            High Availability
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                            99.9% uptime with enterprise-grade infrastructure to keep your
                            generation services running flawlessly.
                        </dd>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            <CheckCircle className="h-6 w-6 text-primary-600" />
                            Secure Processing
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                            Your data is fully encrypted, processed instantly, and never stored
                            longer than required maximum privacy.
                        </dd>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            <CheckCircle className="h-6 w-6 text-primary-600" />
                            Instant Results
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                            Generate IPTV codes, stalker profiles, and playlist
                        </dd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
