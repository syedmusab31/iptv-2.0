import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import {
    DocumentTextIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    ExclamationTriangleIcon,
    ScaleIcon,
    ArrowPathIcon,
    EnvelopeIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';

const TermsService = () => {
    const sections = [
        {
            title: "1. Agreement to Terms",
            icon: DocumentTextIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        By accessing or using IPTV Factory ("the Service"), you agree to be bound by these Terms of Service ("Terms").
                        These Terms constitute a legally binding agreement between you ("User," "you," or "your") and IPTV Factory
                        ("we," "us," or "our").
                    </p>
                    <p>
                        <strong>If you do not agree to these Terms, you must not access or use the Service.</strong> Your continued
                        use of the Service following any changes to these Terms constitutes acceptance of those changes.
                    </p>
                    <p className="text-sm text-slate-600">
                        <strong>Effective Date:</strong> December 6, 2024<br />
                        <strong>Last Updated:</strong> December 6, 2024
                    </p>
                </div>
            ),
        },
        {
            title: "2. Description of Service",
            icon: GlobeAltIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        IPTV Factory provides free online tools for generating configuration codes for legitimate IPTV services.
                        Our Service includes:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li><strong>Xtream Code Generator:</strong> Formats Xtream API credentials (URL, username, password, expiration, region) for use with compatible IPTV applications.</li>
                        <li><strong>Stalker Code Generator:</strong> Generates properly formatted portal URLs and MAC addresses for Stalker/MAG middleware platforms.</li>
                        <li><strong>Educational Resources:</strong> Blog articles, guides, and FAQ content about IPTV technology and legal usage.</li>
                        <li><strong>Download and Share Features:</strong> Export generated codes in various formats (TXT, image) for convenience.</li>
                    </ul>
                    <p className="bg-amber-50 border-l-4 border-amber-500 p-4 text-sm">
                        <strong>Important:</strong> IPTV Factory is a configuration tool only. We do not provide, host, stream, or distribute any IPTV content, channels, or media. We do not sell IPTV subscriptions or provide access to any streaming services.
                    </p>
                </div>
            ),
        },
        {
            title: "3. Eligibility and User Accounts",
            icon: UserGroupIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        <strong>Age Requirement:</strong> You must be at least 18 years old to use this Service. By using the Service,
                        you represent and warrant that you meet this age requirement.
                    </p>
                    <p>
                        <strong>Account Registration:</strong> Currently, IPTV Factory does not require user registration or account creation.
                        The Service is accessible without providing personal information. If we introduce user accounts in the future,
                        additional terms will apply.
                    </p>
                    <p>
                        <strong>Accurate Information:</strong> If you provide any information to us (e.g., through contact forms), you agree
                        that such information will be accurate, current, and complete.
                    </p>
                </div>
            ),
        },
        {
            title: "4. Acceptable Use Policy",
            icon: ShieldCheckIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        You agree to use the Service only for lawful purposes and in accordance with these Terms. Specifically, you agree NOT to:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Use the Service to access, configure, or facilitate access to illegal IPTV services or pirated content</li>
                        <li>Use generated codes for any service you do not have a valid, paid subscription for</li>
                        <li>Circumvent content protection measures or digital rights management (DRM) systems</li>
                        <li>Violate any applicable local, state, national, or international law or regulation</li>
                        <li>Infringe upon the intellectual property rights of others</li>
                        <li>Transmit any malicious code, viruses, or harmful software through the Service</li>
                        <li>Attempt to gain unauthorized access to our systems, servers, or databases</li>
                        <li>Interfere with or disrupt the Service or servers/networks connected to the Service</li>
                        <li>Use automated systems (bots, scrapers) to access the Service without our express written permission</li>
                        <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity</li>
                        <li>Collect or harvest any personally identifiable information from the Service</li>
                        <li>Use the Service for any commercial purpose without our prior written consent</li>
                    </ul>
                    <p className="bg-red-50 border-l-4 border-red-500 p-4 text-sm">
                        <strong>Legal Disclaimer:</strong> IPTV Factory is designed exclusively for users with legitimate, paid subscriptions
                        to authorized IPTV services. Using our tools to access unauthorized content is illegal and strictly prohibited.
                        We reserve the right to terminate access for users who violate this policy.
                    </p>
                </div>
            ),
        },
        {
            title: "5. Intellectual Property Rights",
            icon: ScaleIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        <strong>Ownership:</strong> The Service, including all content, features, functionality, software, code, design,
                        graphics, logos, and trademarks, is owned by IPTV Factory or its licensors and is protected by international
                        copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                    <p>
                        <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to
                        access and use the Service for personal, non-commercial purposes, subject to these Terms.
                    </p>
                    <p>
                        <strong>Restrictions:</strong> You may not:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Copy, modify, distribute, sell, or lease any part of the Service</li>
                        <li>Reverse engineer, decompile, or disassemble the Service or any software used in the Service</li>
                        <li>Remove or alter any copyright, trademark, or other proprietary notices</li>
                        <li>Create derivative works based on the Service</li>
                        <li>Frame or mirror any part of the Service without our express written permission</li>
                    </ul>
                    <p>
                        <strong>User-Generated Content:</strong> If you submit feedback, suggestions, or other communications to us,
                        you grant us a perpetual, worldwide, royalty-free license to use, modify, and incorporate such submissions
                        without compensation or attribution.
                    </p>
                </div>
            ),
        },
        {
            title: "6. Disclaimer of Warranties",
            icon: ExclamationTriangleIcon,
            content: (
                <div className="space-y-4">
                    <p className="uppercase font-bold">
                        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                    </p>
                    <p>
                        To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                        <li>Warranties regarding the accuracy, reliability, or completeness of generated codes</li>
                        <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
                        <li>Warranties that defects will be corrected</li>
                        <li>Warranties regarding the results obtained from using the Service</li>
                    </ul>
                    <p>
                        <strong>No Guarantee of Access:</strong> Generated codes are configuration strings only. We do not guarantee
                        that these codes will provide access to any specific IPTV service. Access depends entirely on your valid
                        subscription with a licensed IPTV provider.
                    </p>
                    <p>
                        <strong>Third-Party Services:</strong> The Service may contain links to third-party websites or services.
                        We are not responsible for the content, accuracy, or practices of these third-party sites.
                    </p>
                </div>
            ),
        },
        {
            title: "7. Limitation of Liability",
            icon: ExclamationTriangleIcon,
            content: (
                <div className="space-y-4">
                    <p className="uppercase font-bold">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IPTV FACTORY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                    </p>
                    <p>
                        This includes, but is not limited to, damages arising from:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Your use or inability to use the Service</li>
                        <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                        <li>Any interruption or cessation of transmission to or from the Service</li>
                        <li>Any bugs, viruses, or malicious code transmitted through the Service by third parties</li>
                        <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the Service</li>
                        <li>The defamatory, offensive, or illegal conduct of any third party</li>
                    </ul>
                    <p>
                        <strong>Maximum Liability:</strong> In jurisdictions that do not allow the exclusion or limitation of liability
                        for consequential or incidental damages, our liability is limited to the maximum extent permitted by law.
                        In no event shall our total liability to you for all damages exceed $100 USD.
                    </p>
                </div>
            ),
        },
        {
            title: "8. Indemnification",
            icon: ShieldCheckIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        You agree to defend, indemnify, and hold harmless IPTV Factory, its affiliates, licensors, and service providers,
                        and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors,
                        and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees
                        (including reasonable attorneys' fees) arising out of or relating to:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Your violation of these Terms</li>
                        <li>Your use or misuse of the Service</li>
                        <li>Your violation of any third-party rights, including intellectual property rights</li>
                        <li>Your violation of any applicable law or regulation</li>
                        <li>Any content you submit or transmit through the Service</li>
                    </ul>
                    <p className="text-sm text-slate-600">
                        This indemnification obligation will survive the termination of these Terms and your use of the Service.
                    </p>
                </div>
            ),
        },
        {
            title: "9. Termination",
            icon: ArrowPathIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        <strong>Termination by You:</strong> You may stop using the Service at any time. No formal termination process
                        is required as we do not maintain user accounts.
                    </p>
                    <p>
                        <strong>Termination by Us:</strong> We reserve the right to suspend or terminate your access to the Service
                        immediately, without prior notice or liability, for any reason, including but not limited to:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Breach of these Terms</li>
                        <li>Violation of applicable laws or regulations</li>
                        <li>Fraudulent, abusive, or illegal activity</li>
                        <li>Requests by law enforcement or government agencies</li>
                        <li>Discontinuation or material modification of the Service</li>
                        <li>Unexpected technical or security issues</li>
                    </ul>
                    <p>
                        <strong>Effect of Termination:</strong> Upon termination, your right to use the Service will immediately cease.
                        All provisions of these Terms which by their nature should survive termination shall survive, including ownership
                        provisions, warranty disclaimers, indemnity, and limitations of liability.
                    </p>
                </div>
            ),
        },
        {
            title: "10. Governing Law and Dispute Resolution",
            icon: ScaleIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of
                        the jurisdiction in which IPTV Factory operates, without regard to its conflict of law provisions.
                    </p>
                    <p>
                        <strong>Dispute Resolution:</strong> Any dispute arising from or relating to these Terms or the Service shall
                        be resolved through:
                    </p>
                    <ol className="list-decimal ml-6 space-y-2">
                        <li><strong>Informal Negotiation:</strong> First, contact us to attempt to resolve the dispute informally.</li>
                        <li><strong>Mediation:</strong> If informal resolution fails, disputes may be submitted to mediation.</li>
                        <li><strong>Arbitration:</strong> If mediation is unsuccessful, binding arbitration may be required (depending on jurisdiction).</li>
                    </ol>
                    <p>
                        <strong>Class Action Waiver:</strong> To the extent permitted by law, you agree that any dispute resolution
                        proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                    </p>
                    <p className="text-sm text-slate-600">
                        <strong>Jurisdiction:</strong> You agree to submit to the personal jurisdiction of the courts located within
                        our operating jurisdiction for the purpose of litigating all such claims or disputes.
                    </p>
                </div>
            ),
        },
        {
            title: "11. Changes to Terms",
            icon: ArrowPathIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        We reserve the right to modify or replace these Terms at any time at our sole discretion. Changes may be made to:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Reflect changes in our Service or business practices</li>
                        <li>Comply with legal or regulatory requirements</li>
                        <li>Improve clarity or address user feedback</li>
                        <li>Add new features or functionality</li>
                    </ul>
                    <p>
                        <strong>Notification of Changes:</strong> We will provide notice of material changes by:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Updating the "Last Updated" date at the top of these Terms</li>
                        <li>Posting a notice on our homepage or Service</li>
                        <li>Sending an email notification (if we have your email address)</li>
                    </ul>
                    <p>
                        <strong>Your Continued Use:</strong> Your continued use of the Service following the posting of revised Terms
                        means that you accept and agree to the changes. If you do not agree to the new Terms, you must stop using the Service.
                    </p>
                    <p className="text-sm text-slate-600">
                        We encourage you to review these Terms periodically to stay informed about our practices and your rights and obligations.
                    </p>
                </div>
            ),
        },
        {
            title: "12. Miscellaneous Provisions",
            icon: DocumentTextIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        <strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and any other legal notices
                        published by us on the Service, constitute the entire agreement between you and IPTV Factory concerning the Service.
                    </p>
                    <p>
                        <strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, that
                        provision will be enforced to the maximum extent possible, and the remaining provisions will remain in full force and effect.
                    </p>
                    <p>
                        <strong>Waiver:</strong> No waiver of any term of these Terms shall be deemed a further or continuing waiver of
                        such term or any other term. Our failure to assert any right or provision under these Terms shall not constitute
                        a waiver of such right or provision.
                    </p>
                    <p>
                        <strong>Assignment:</strong> You may not assign or transfer these Terms or your rights hereunder without our
                        prior written consent. We may assign these Terms without restriction.
                    </p>
                    <p>
                        <strong>Force Majeure:</strong> We shall not be liable for any failure to perform our obligations where such
                        failure results from causes beyond our reasonable control, including natural disasters, war, terrorism, riots,
                        embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of
                        transportation, facilities, fuel, energy, labor, or materials.
                    </p>
                    <p>
                        <strong>Headings:</strong> The section headings in these Terms are for convenience only and have no legal or
                        contractual effect.
                    </p>
                </div>
            ),
        },
        {
            title: "13. Contact Information",
            icon: EnvelopeIcon,
            content: (
                <div className="space-y-4">
                    <p>
                        If you have any questions, concerns, or comments about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                        <p className="font-semibold text-slate-900">IPTV Factory Support</p>
                        <p className="text-slate-700">
                            <strong>Email:</strong> <a href="mailto:mohcin15000@gmail.com" className="text-indigo-600 hover:underline">mohcin15000@gmail.com</a>
                        </p>
                        <p className="text-slate-700">
                            <strong>Website:</strong> <a href="https://iptv-factory.com" className="text-indigo-600 hover:underline">https://iptv-factory.com</a>
                        </p>
                        <p className="text-sm text-slate-600 mt-2">
                            We aim to respond to all inquiries within 48 business hours.
                        </p>
                    </div>
                    <p className="text-sm text-slate-600">
                        <strong>Legal Notices:</strong> For legal notices or formal communications, please use the email address above
                        with the subject line "Legal Notice - Terms of Service."
                    </p>
                </div>
            ),
        },
    ];

    return (
        <>
            <Breadcrumb items={[
                { label: 'Home', path: '/' },
                { label: 'Legal', path: '/legal' },
                { label: 'Terms of Service', path: '/legal/service' }
            ]} />
            <div className="bg-gradient-to-b from-gray-50 via-white to-indigo-50 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Please read these Terms of Service carefully before using IPTV Factory. By accessing or using our Service,
                        you acknowledge that you have read, understood, and agree to be bound by these Terms.
                    </p>
                    <div className="mt-6 inline-block bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full text-sm font-semibold">
                        Last Updated: December 6, 2024
                    </div>
                </div>

                {/* Table of Contents */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-indigo-500">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Table of Contents</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {sections.map((section, idx) => (
                            <a
                                key={idx}
                                href={`#section-${idx}`}
                                className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                            >
                                {section.title}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-12">
                    {sections.map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <section
                                key={idx}
                                id={`section-${idx}`}
                                className="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-indigo-500 scroll-mt-24"
                            >
                                <div className="flex items-start mb-6">
                                    {Icon && (
                                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                                            <Icon className="h-6 w-6 text-indigo-600" />
                                        </div>
                                    )}
                                    <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="text-slate-700 leading-relaxed prose prose-slate max-w-none">
                                    {section.content}
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* Footer Notice */}
                <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
                    <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                        We're here to help. If you have any questions or concerns about our Terms of Service,
                        please don't hesitate to reach out to our support team.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
            </div>
        </>
    );
};

export default TermsService;
