import React from "react";
import { DocumentTextIcon, ShieldCheckIcon, CurrencyDollarIcon, UsersIcon, ArrowPathIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const TermsConditions = () => {
  const sections = [
    {
      title: "Effective Date",
      icon: DocumentTextIcon,
      content: (
        <p>
          This Terms and Conditions document is effective as of <strong>November 28th, 2025</strong>.
        </p>
      ),
    },
    {
      title: "Acceptance of Terms",
      icon: ShieldCheckIcon,
      content: (
        <p>
          By using the IPTV Generator service, you agree to comply with and be legally bound by these terms. 
          If you do not agree, please do not use the service.
        </p>
      ),
    },
    {
      title: "Service Description",
      icon: DocumentTextIcon,
      content: (
        <p>
        IPTV Generator is a utility that generates sample IPTV credentials (URL, Username, Password, Expiry, and Region) 
          for demonstration or educational purposes. These codes are not guaranteed to provide access to any specific IPTV service.
        </p>
      ),
    },
    {
      title: "Ad-Supported Features",
      icon: CurrencyDollarIcon,
      content: (
        <p>
          This application is supported by advertisements. Ads may appear during usage (e.g., generating credentials). 
          By using the service, you consent to the presence of such ads.
        </p>
      ),
    },
    {
      title: "User Conduct",
      icon: UsersIcon,
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>Use the service only for lawful purposes.</li>
          <li>Do not violate any local, national, or international law or regulation.</li>
          <li>Do not attempt to misuse, reverse engineer, or exploit the service.</li>
          <li>Do not share or distribute illegal IPTV content.</li>
          <li>Do not attempt unauthorized access to other systems or services.</li>
        </ul>
      ),
    },
    {
      title: "Intellectual Property",
      icon: DocumentTextIcon,
      content: (
        <p>
          All content provided through IPTV Generator, including design, text, software, and branding, 
          is the property of its respective owners and protected by copyright and intellectual property laws.
        </p>
      ),
    },
    {
      title: "Limitation of Liability",
      icon: ShieldCheckIcon,
      content: (
        <p>
         IPTV Generator is provided “as is” and “as available” without warranties of any kind. 
          We make no guarantees regarding the availability, accuracy, or reliability of the IPTV codes or related data.
        </p>
      ),
    },
    {
      title: "Termination",
      icon: ArrowPathIcon,
      content: (
        <p>
          We reserve the right to terminate or suspend access to the service without notice, for any reason, 
          including breach of these Terms.
        </p>
      ),
    },
    {
      title: "Changes to Terms",
      icon: ArrowPathIcon,
      content: (
        <p>
          We may modify these Terms at any time. Updated versions will be posted, and continued use of the service 
          indicates acceptance of the new terms.
        </p>
      ),
    },
    {
      title: "Governing Law",
      icon: ShieldCheckIcon,
      content: (
        <p>
          These Terms shall be governed and interpreted in accordance with the laws of your country or region, 
          without regard to conflict of law provisions.
        </p>
      ),
    },
    {
      title: "Contact Information",
      icon: EnvelopeIcon,
      content: (
        <p>
          For any questions or concerns regarding these Terms, please contact us at: 
          <a className="text-indigo-600 underline ml-1" href="mailto:mohcin15000@gmail.com">mohcin15000@gmail.com</a>
        </p>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-slate-900 text-center mb-6">
          Terms & Conditions
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-16">
          Welcome to <span className="font-semibold text-slate-900">IPTV Generators</span>. 
          By accessing or using our website or mobile application, you agree to these Terms and Conditions. Please read carefully.
        </p>

        <div className="space-y-12">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <section
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-indigo-500"
              >
                <div className="flex items-center mb-4">
                  {Icon && <Icon className="h-6 w-6 text-indigo-500 mr-3" />}
                  <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                </div>
                <div className="text-slate-700">{section.content}</div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
