import React from "react";

const GlobalReach = () => {
    return (
        <div className="py-24 sm:py-32 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                        Engineered for Excellence
                    </h2>
                    <p className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                        Global Infrastructure for Uninterrupted Service
                    </p>
                    <p className="mt-6 text-base text-slate-700 leading-relaxed text-left pr-8 pl-8 md:pl-0 md:pr-0">
                        Running across a network of backup-powered data centers worldwide, the system stays live almost all the time. Because it lives in multiple places at once, speed doesn’t drop no matter where someone logs in from. Fast response times stay consistent, whether accessed from Tokyo or Lisbon. Engineers watch performance around the clock, swapping in updates before hiccups arise. Dependability isn’t claimed here - it’s built into how everything runs behind the scenes.
                    </p>
                </div>

                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-3 lg:max-w-none">
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition bg-white">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            {/* <CheckCircle className="h-6 w-6 text-primary-600" /> */}
                            Scalable Cloud Architecture
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                            When demand jumps, the system stretches to meet it - running on up-to-date cloud infrastructure that adjusts automatically. Speed stays steady no matter when you log in, thanks to built-in room for growth.
                        </dd>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition bg-white">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            {/* <CheckCircle className="h-6 w-6 text-primary-600" /> */}
                            Dedicated Support
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                          When tools aren’t enough, real people stand by to help troubleshoot or explain features, so navigating the full range of functions feels less like guessing.
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
