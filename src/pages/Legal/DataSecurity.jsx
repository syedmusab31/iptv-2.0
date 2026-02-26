import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { ShieldCheckIcon, LockClosedIcon, ServerIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

const DataSecurity = () => {
  const sections = [
    {
      title: "Our Commitment to Security",
      icon: ShieldCheckIcon,
      content: (
        <p>
         Staying safe online matters most. Even if we never gather personal details, safeguards still go up around whatever you share while using what we offer. Security moves happen behind the scenes - routine ones, tested ones - all meant to guard what passes through
        </p>
      ),
    },
    {
      title: "Encryption",
      icon: LockClosedIcon,
      content: (
        <p>
        When sensitive data moves across networks, it travels under lock via encryption like SSL/TLS - keeping it safe while en route. Access to that scrambled information? Limited strictly to approved individuals who hold specific permissions.


        </p>
      ),
    },
    {
      title: "Servers and Firewalls",
      icon: ServerIcon,
      content: (
        <p>
         Fences around digital space come from reliable hosts, using strong barriers so outsiders cannot slip through. Locked pathways guard what matters, keeping information away from risk.


        </p>
      ),
    },
    {
      title: "Regular Software Updates",
      icon: ArrowPathIcon,
      content: (
        <p>
         Each time we improve the software, fixes go in for recognized weaknesses, cutting down threats while keeping every interaction safe by design. Updates happen often so protection stays strong behind the scenes.
        </p>
      ),
    },
    {
      title: "Access Controls",
      icon: ShieldCheckIcon,
      content: (
        <p>
          Machines lock down who can peek at files. Access stays limited to those cleared by security checks.
        </p>
      ),
    },
    {
      title: "Security Disclaimer",
      icon: ShieldCheckIcon,
      content: (
        <p>
         Even when safeguards are applied, no digital data transfer or storage can ever claim perfect safety. We rely on standard industry practices to guard what you share, yet complete protection remains out of reach. Security measures help, still gaps may exist without warning.
        </p>
      ),
    },
    {
      title: "Breach Notification",
      icon: ArrowPathIcon,
      content: (
        <p>
          If a security problem ever touches your information, steps will be taken to inform people affected while handling the situation under current legal rules.
        </p>
      ),
    },
  ];

  return (
    <>
      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Legal', path: '/legal' },
        { label: 'Data Security', path: '/legal/security' }
      ]} />
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
    </>
  );
};

export default DataSecurity;
