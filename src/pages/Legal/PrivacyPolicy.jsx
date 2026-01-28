import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                    Privacy Policy
                </h1>

                <p className="text-lg text-slate-600 mb-12">
                    At <span className="font-semibold text-slate-900">IPTV Generator</span>, your privacy is our top priority.
                    This Privacy Policy outlines how we collect, manage, and protect your personal information when
                    you interact with our website and services. By using our platform, you agree to the terms
                    described below.
                </p>

                <div className="space-y-12 text-slate-700 leading-relaxed">

                    {/* Section: Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                        <p className="mb-4">
                            We collect information to improve your experience and deliver our services efficiently.
                            Information collected may include:
                        </p>

                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                <strong>Personal Information:</strong> Such as your name, email address, phone number,
                                or any details you voluntarily provide when contacting us or using our tools.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> Automatically collected data including your IP address,
                                browser type, device information, access times, and pages visited before and after
                                using our platform.
                            </li>
                            <li>
                                <strong>Cookies & Tracking Technologies:</strong> We use cookies to enhance site
                                performance, remember preferences, and understand user behavior.
                            </li>
                        </ul>
                    </section>

                    {/* Section: How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                        <p className="mb-4">
                            The information we collect allows us to improve our platform and provide you with a fast,
                            secure, and seamless user experience. We may use your data to:
                        </p>

                        <ul className="list-disc ml-6 space-y-2">
                            <li>Create and manage user accounts (if applicable).</li>
                            <li>Improve website performance, stability, and responsiveness.</li>
                            <li>Respond to your inquiries or support requests.</li>
                            <li>Monitor site analytics to enhance features and functionality.</li>
                            <li>Ensure compliance with legal obligations and protect against misuse.</li>
                        </ul>
                    </section>

                    {/* Section: Sharing of Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing & Disclosure</h2>
                        <p>
                            We do not sell or trade your personal information. Data may only be shared with:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mt-2">
                            <li>
                                <strong>Trusted service providers</strong> who assist in website hosting, analytics, or
                                security (all bound by confidentiality agreements).
                            </li>
                            <li>
                                <strong>Legal authorities</strong> when required to comply with applicable laws or
                                protect our platform against fraud or misuse.
                            </li>
                        </ul>
                    </section>

                    {/* Section: Data Protection */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Protection & Security</h2>
                        <p>
                            We implement strict security measures to safeguard your information from unauthorized
                            access, alteration, or destruction. While no system is entirely foolproof, we continually
                            update our practices to ensure maximum protection and reliability.
                        </p>
                    </section>

                    {/* Section: Third-Party Links */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Links</h2>
                        <p>
                            Our website may contain links to external sites. We are not responsible for the content,
                            policies, or practices of third-party websites. We encourage you to review their
                            privacy policies before interacting with them.
                        </p>
                    </section>

                    {/* Section: Updates */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Updates to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect changes in our practices.
                            Any updates will be posted on this page with a revised effective date. We recommend
                            reviewing this page regularly to stay informed.
                        </p>
                    </section>

                    {/* Section: Contact */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                        <p>
                            If you have any questions, concerns, or requests regarding this Privacy Policy, feel
                            free to contact us through our official support page.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
