import React from "react";

const PrivacySecurity = () => {
    return (
        <div className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                        Your Trust, Our Priority
                    </h2>
                    <p className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                        Strict Security and Private Data
                    </p>
                    <p className="mt-6 text-base text-slate-700 leading-relaxed text-left pr-8 pl-8 md:pl-0 md:pr-0">
                     Every moment online needs protection, especially now. Built into our system are tough safeguards, so each exchange stays locked down through top-tier coding methods. Nothing gets recorded - no messages, nothing typed in ever sticks around. While some companies keep tabs, ours does not save, watch, or study any codes made here, like those for IPTV, Stalker setups, or channel lists. What you stream stays hidden, far from sight.
                    </p>
                </div>

                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 lg:max-w-none">
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            {/* <CheckCircle className="h-6 w-6 text-primary-600" /> */}
                            End-to-End Encryption
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                       Information shared while generating stays locked down using SSL or TLS protection. A hidden path opens up between your web app and the systems running behind, blocking outsiders from peeking through. Nobody grabs what flows inside - not halfway, not at any point along the way.
                        </dd>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            {/* <CheckCircle className="h-6 w-6 text-primary-600" /> */}
                            Ephemeral Processing Policy
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                           Memory keeps your data just long enough to produce what you need. After showing the result, it vanishes without trace - gone for good. This is how we protect your privacy, fully and always.
                        </dd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacySecurity;
