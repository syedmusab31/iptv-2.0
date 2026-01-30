import React from "react";

const GlobalReach = () => {
    return (
        <div className="py-24 sm:py-32 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                        Engineered for Excellence
                    </h2>
                    <p className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                        Global Infrastructure for Uninterrupted Service
                    </p>
                    <p className="mt-6 text-xl text-slate-700 leading-relaxed text-left pr-8 pl-8 md:pl-0 md:pr-0">
                        Our technology platform is hosted on globally distributed, redundant cloud infrastructure. This advanced setup ensures not only the 99.99% uptime reliability you expect, but also provides geo-optimized performance. Users from any corner of the globe will experience the same lightning-fast generation speeds. This robust and scalable architecture is constantly monitored and updated by our engineering team to pre-emptively address any potential issues, maintaining our standing as the most dependable toolset in the streaming utility space.
                    </p>
                </div>

                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-3 lg:max-w-none">
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition bg-white">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            {/* <CheckCircle className="h-6 w-6 text-primary-600" /> */}
                            Scalable Cloud Architecture
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                            Built on modern, autoscaling cloud platforms, our service seamlessly handles massive spikes in demand without any degradation in performance. This scalability means your tool access remains consistently fast, day or night.
                        </dd>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition bg-white">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            {/* <CheckCircle className="h-6 w-6 text-primary-600" /> */}
                            Dedicated Support
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                            Beyond the automated tools, our experienced support team is available to assist with any technical inquiries or usage questions, ensuring you get the most out of our comprehensive utility set.
                        </dd>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition bg-white">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            {/* <CheckCircle className="h-6 w-6 text-primary-600" /> */}
                            Continuous Innovation
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                            We are dedicated to evolving our services. Regular updates introduce new features and compatibility adjustments, keeping our tools relevant and functional with the latest streaming technologies.
                        </dd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalReach;
