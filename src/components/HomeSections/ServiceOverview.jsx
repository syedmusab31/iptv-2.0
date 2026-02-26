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
                    <p className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
The Complete Set of Tools for People Who Stream Content                    </p>
                    <p className="mt-6 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Right from the start, staying connected to what you watch matters more than ever. Built into how things work now, getting hold of favorite streams fits smoothly into daily life. Instead of clutter, clean design guides each choice. With features that respond fast, navigation feels natural. Watching unfolds without pauses. Tools adapt quietly, matching habits over time. Everything lines up so attention stays on content, never on controls.
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
                            <dt className="flex items-center text-xl font-bold text-slate-900 border-b pb-4 mb-4 border-indigo-50/50">
                                <CheckCircleIcon className="h-6 w-6 text-indigo-500 mr-2" />
                                Dedicated Focus on User Accessibility and Performance
                            </dt>

                            <dd className="text-base text-slate-700 leading-relaxed">
                               Speed comes first here, built right into how things run so everything moves fast without delays, meaning your codes show up nearly the moment they’re made. What you see matters just as much, designed so anyone can get going even if tech feels confusing or overwhelming at times. That mix - fast systems paired with clear design - is why people keep coming back, using these tools every day across the planet for fun and ease.
                            </dd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverview;
