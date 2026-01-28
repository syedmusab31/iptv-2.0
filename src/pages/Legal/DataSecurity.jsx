import React from "react";
import { ShieldCheckIcon, LockClosedIcon, ServerIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

const DataSecurity = () => {
  const sections = [
    {
      title: "Our Commitment to Security",
      icon: ShieldCheckIcon,
      content: (
        <p>
          We are dedicated to maintaining the security of your data. Although we do not collect personally identifiable information, 
          we implement industry-standard security practices to protect any non-personal data collected during your interaction with our service.
        </p>
      ),
    },
    {
      title: "Encryption",
      icon: LockClosedIcon,
      content: (
        <p>
          Sensitive data is transmitted securely using encryption protocols such as SSL/TLS, ensuring information is protected in transit. 
          Only authorized personnel with special access rights can view encrypted data.
        </p>
      ),
    },
    {
      title: "Servers & Firewalls",
      icon: ServerIcon,
      content: (
        <p>
          Our services utilize secure servers and firewalls provided by trusted hosting platforms to protect data from unauthorized access and vulnerabilities.
        </p>
      ),
    },
    {
      title: "Regular Software Updates",
      icon: ArrowPathIcon,
      content: (
        <p>
          We regularly update our software to patch known vulnerabilities, minimizing risks and maintaining a secure environment for all interactions.
        </p>
      ),
    },
    {
      title: "Access Controls",
      icon: ShieldCheckIcon,
      content: (
        <p>
          Strict access controls are enforced to minimize data exposure. Only authorized personnel have access to sensitive systems and information.
        </p>
      ),
    },
    {
      title: "Security Disclaimer",
      icon: ShieldCheckIcon,
      content: (
        <p>
          No method of transmission over the Internet or electronic storage is 100% secure. While we use commercially acceptable means to protect your information, absolute security cannot be guaranteed.
        </p>
      ),
    },
    {
      title: "Breach Notification",
      icon: ArrowPathIcon,
      content: (
        <p>
          In the unlikely event of a security breach compromising your data, we will take appropriate measures to notify users and mitigate the issue in accordance with applicable laws and regulations.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-slate-900 text-center mb-6">
          Data Security
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-16">
          At <span className="font-semibold text-slate-900">IPTV Generator</span>, we prioritize your data security and implement best practices to safeguard all information processed by our service.
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

export default DataSecurity;
