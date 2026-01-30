import React from "react";
import { RocketLaunchIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const ServiceOverview = () => {
    return (
        <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
            {/* Subtle Accent Stripe/Shadow */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header Block - Focused and Centered */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-xl font-semibold text-slate-500 uppercase tracking-widest">
                        Seamless Streaming Utility
                    </h2>
                    <p className="mt-4 text-5xl font-extrabold text-slate-900 leading-tight">
                        The Ultimate Toolkit for Content Streamers
                    </p>
                    <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-7">
                        In the ever-evolving world of digital media, accessing and managing your preferred content sources should be effortless. Our platform provides a comprehensive suite of powerful and user-friendly tools designed to optimize your viewing experience.
                    </p>
                </div>

                {/* Expanded Feature Block - Clean, Modern Box with Vertical Emphasis */}
                <div className="mx-auto mt-20 max-w-4xl">
                    <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 backdrop-blur-sm">

                        {/* Left Side: Gradient Accent and Icon */}
                        <div className="flex items-center justify-center p-8 bg-gradient-to-br from-indigo-500 to-purple-600 w-1/4 min-w-[150px]">
                            <RocketLaunchIcon className="h-12 w-12 text-white/90" />
                        </div>

                        {/* Right Side: Content */}
                        <div className="p-10 w-3/4">
                            <dt className="flex items-center text-2xl font-bold text-slate-900 border-b pb-4 mb-4 border-indigo-50/50">
                                <CheckCircleIcon className="h-6 w-6 text-indigo-500 mr-2" />
                                Dedicated Focus on User Accessibility and Performance
                            </dt>

                            <dd className="text-lg text-slate-700 leading-relaxed">
                                Our infrastructure is meticulously engineered for maximum throughput and minimal latency, guaranteeing that any codes or profiles generated are delivered almost instantaneously. We prioritize an intuitive user interface that makes complex generation processes simple for everyone, regardless of technical expertise. This commitment to both speed and simplicity is what sets our service apart, providing a consistently superior experience for millions of users worldwide who rely on our tools daily for their entertainment needs.
                            </dd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverview;
