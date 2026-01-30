import React from "react";

const PrivacySecurity = () => {
    return (
        <div className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                        Your Trust, Our Priority
                    </h2>
                    <p className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                        Uncompromising Security and Data Confidentiality
                    </p>
                    <p className="mt-6 text-xl text-slate-700 leading-relaxed text-left pr-8 pl-8 md:pl-0 md:pr-0">
                        We understand that privacy is paramount in the digital age. Our platform is built on a foundation of rigorous security protocols, ensuring that every interaction and data transmission is protected using industry-leading encryption standards. We strictly adhere to a no-log policy regarding user-generated content and input. Unlike other services, we do not store, track, or analyze the IPTV codes, Stalker profiles, or playlists you generate, guaranteeing that your personal streaming preferences remain completely anonymous and secure.
                    </p>
                </div>

                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 lg:max-w-none">
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            {/* <CheckCircle className="h-6 w-6 text-primary-600" /> */}
                            End-to-End Encryption
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                            All data exchanged during the generation process is protected with SSL/TLS encryption. This creates a secure tunnel between your browser and our servers, making it impossible for third parties to intercept or read the information, thus safeguarding your connection credentials from start to finish.
                        </dd>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                        <dt className="flex items-center gap-x-3 text-lg font-semibold text-slate-900">
                            {/* <CheckCircle className="h-6 w-6 text-primary-600" /> */}
                            Ephemeral Processing Policy
                        </dt>
                        <dd className="mt-4 text-slate-600 leading-7">
                            We only hold input data in memory for the immediate time required to generate your output. Once the results are displayed, the associated data is instantly and permanently purged from our system, upholding our commitment to maximum user privacy and zero data retention.
                        </dd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacySecurity;
