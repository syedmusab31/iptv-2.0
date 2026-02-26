import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { DocumentTextIcon, ShieldCheckIcon, CurrencyDollarIcon, UsersIcon, ArrowPathIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const TermsConditions = () => {
  const sections = [
    {
      title: "Effective Date",
      icon: DocumentTextIcon,
      content: (
        <p>
Effective November 28th, 2025 - this agreement sets the rules moving forward. While dates matter, clarity matters more. The terms apply starting that day. Not before. Each line here shapes understanding going ahead. Though written plainly, it holds weight. Since change happens, updates may come later. Yet this version stands firm now.  </p>
      ),
    },
    {
      title: "Acceptance of Terms",
      icon: ShieldCheckIcon,
      content: (
        <p>
Using the IPTV Generator means you accept these rules without exception. Should those conditions not sit right with you, step away from the platform entirely
        </p>
      ),
    },
    {
      title: "Service Description",
      icon: DocumentTextIcon,
      content: (
        <p>
   A tool called IPTV Generator creates example login details - like address, name, password, date limits, and location - just for showing how things work. Though it builds realistic formats, there is no promise these will connect to real streaming platforms. Used mostly in training or testing setups, the output acts as placeholder data instead of live keys. Access depends on actual providers, which this generator does not control or represent. Its role stays limited to mimicking structure without linking to external services.
        </p>
      ),
    },
    {
      title: "Ad-Supported Features",
      icon: CurrencyDollarIcon,
      content: (
        <p>
         Using the app means seeing ads now and then - like when creating login details. These interruptions are part of how it works. Accepting this happens automatically once you start using it.
        </p>
      ),
    },
    {
      title: "User Conduct",
      icon: UsersIcon,
      content: (
        <ul className="list-disc ml-6 space-y-2">
         Use the service only for lawful purposes.
Always follow rules that apply where you are, across regions, countries, or global standards.
Trying to twist, take apart, or game the system won’t work. Hacking at its core or bending rules leads nowhere. Using it wrongly just stops things moving forward. Every shortcut fails before it starts.
Sharing unlawful IPTV material breaks rules. Spreading such streams invites trouble. Passing around forbidden viewing links leads to consequences. Circulating unapproved video feeds crosses lines. Distributing restricted TV services causes issues.
Stay away from trying to get into systems you are not allowed to use.
        </ul>
      ),
    },
    {
      title: "Intellectual Property",
      icon: DocumentTextIcon,
      content: (
        <p>
         Whatever appears via IPTV Generator - layouts, words, code, logos - belongs to those who made it. Each piece stays under legal shield through copyrights and ownership rules meant for creative work.
        </p>
      ),
    },
    {
      title: "Limitation of Liability",
      icon: ShieldCheckIcon,
      content: (
        <p>
        Even though it works most times, the IPTV Generator comes without promises. You get it just like that - no assurances attached. Things might break, change, or stop working without warning. Accuracy of codes isn’t something we can stand behind. Data could be off, incomplete, or outdated at any moment. Reliability? Not guaranteed. What you see is what you deal with, nothing more.
        </p>
      ),
    },
    {
      title: "Termination",
      icon: ArrowPathIcon,
      content: (
        <p>
          Suspension or termination of service access may happen at any time, no warning needed. Reason? Breaking these rules could do it. The company decides when someone can no longer use the system.
        </p>
      ),
    },
    {
      title: "Changes to Terms",
      icon: ArrowPathIcon,
      content: (
        <p>
          Changes can happen to these rules whenever needed. New versions show up online right after updates. Sticking with the service means you are okay with what’s changed.
        </p>
      ),
    },
    {
      title: "Governing Law",
      icon: ShieldCheckIcon,
      content: (
        <p>
          Whichever nation you call home sets the rules here. Laws from that place apply, full stop. Conflicting legal ideas from elsewhere? They do not matter. How things are read follows local practice only. Outside influence gets left out entirely
        </p>
      ),
    },
    {
      title: "Contact Information",
      icon: EnvelopeIcon,
      content: (
        <p>
          Got a question about these Terms? Reach out anytime by emailing mohcin15000@gmail.com. Messages sent there will get attention. We’re available if something isn’t clear. Thoughts or confusion - just write in. This address handles all feedback tied to the rules above. No query is too small when it comes to clarity. Drop an email whenever you need answers
        </p>
      ),
    },
  ];

  return (
    <>
      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Legal', path: '/legal' },
        { label: 'Terms & Conditions', path: '/legal/terms' }
      ]} />
      <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-slate-900 text-center mb-6">
          Terms and Conditions
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
    </>
  );
};

export default TermsConditions;
