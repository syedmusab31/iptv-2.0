import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { ShieldCheckIcon, UsersIcon, BookOpenIcon, BoltIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { Code, Play, Zap, Gem } from "lucide-react";
import SEO from "../components/SEO";


const features = [
  {
    title: "Xtream Code Generator",
    description: "Easily generate usernames, passwords, expiration dates, and region-specific codes for legal IPTV services.",
    icon: Play,
  },
  {
    title: "Stalker Code Generator",
    description: "Create portal access codes and MAC addresses with advanced IPTV configuration options.",
    icon: Code,
  },
  {
    title: "Ad-Supported & Free",
    description: "Tools free to use, supported by non-intrusive ads to maintain high-quality services.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Secure & Reliable",
    description: "Prioritize data security and uptime, ensuring smooth and safe access to IPTV content.",
    icon: UsersIcon,
  },
];

const stats = [
  { label: "Users Worldwide", value: "10k+" },
  { label: "Generations Daily", value: "50k+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Support", value: "24/7" },
];

const About = () => {
  return (
    <>
      <SEO
        title="About IPTV Factory - Our Mission & Values"
        description="Discover IPTV Factory's mission to provide secure, legal IPTV tools. Professional code generators for Xtream and Stalker with zero illegal content."
        keywords="about IPTV Factory, IPTV tools, legitimate IPTV, code generator, Xtream tools, legal streaming, IPTV mission"
      />
      <Breadcrumb />
      <div className="bg-gradient-to-b from-indigo-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Blobs - Keep the same cool look */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-full opacity-30 blur-3xl animate-blob mix-blend-multiply"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-tr from-purple-200 via-pink-200 to-indigo-200 rounded-full opacity-40 blur-2xl animate-blob animation-delay-2000 mix-blend-multiply"></div>

      {/* Hero Section */}
      <section className="relative py-24 text-center px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
          About IPTV Factory
        </h1>
        <p className="text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Your trusted platform for legal IPTV code generation. Seamless access to live TV, movies, sports, and premium content.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 -mt-20 relative">
        <div className="bg-white backdrop-blur-md bg-opacity-80 rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Smarter Streaming</h2>
          <p className="text-xs text-slate-700 mb-3 leading-relaxed">
            IPTV Factory is your destination for legal IPTV services. We provide access codes that unlock live channels, on-demand movies, and premium content seamlessly.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Our mission is to redefine entertainment access by providing seamless integration tools with complete legality and user satisfaction.
          </p>
        </div>
      </section>

      {/* Our Commitment to Legality & Safety */}
      <section className="mt-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-12">Legality & Safety First</h2>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-8 shadow-lg mb-8 lg:mb-0">
              <BookOpenIcon className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-base font-semibold text-slate-900 mb-3">Legal Services Only</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Our tools are designed for legitimate, authorized IPTV services. We do not support illegal streaming or unlicensed content distribution.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              <ShieldCheckIcon className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-base font-semibold text-slate-900 mb-3">Data Security</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                We prioritize privacy. Code generation is stateless and doesn't store sensitive information. Your data stays secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-12">Core Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{feature.title}</h3>
                  <p className="text-slate-700 text-xs leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
      {/* How Our Generators Work (The Technology) - NEW SECTION for value and depth */}
      <section className="mt-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-12">How Our Generators Work</h2>
          <div className="bg-white backdrop-blur-md bg-opacity-80 rounded-3xl shadow-2xl p-14">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600">
                  <BoltIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Understanding Xtream API Logic</h3>
                  <p className="text-sm text-slate-700 mt-1">
                    The <strong>Xtream Code Generator</strong> utilizes known parameters of the Xtream Codes API (used by many legitimate providers) to structure access details. It takes your <strong>valid</strong> provider-issued credentials and formats them into a single, cohesive login string that is compatible with various IPTV client applications, simplifying connection setup.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                  <ComputerDesktopIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Stalker Portal Configuration</h3>
                  <p className="text-sm text-slate-700 mt-1">
                   A working virtual address comes from our Stalker Code Generator, tied closely to Mag and Stalker systems behind the scenes. Built into it are tools that form exact pairs of MAC-style identifiers alongside access links. These combos let devices like set-top boxes or television apps connect properly to an IPTV setup using Stalker tech. Each output makes sure login steps happen without issues. The right format matters - this handles it quietly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our User-Centric Philosophy - NEW SECTION to add more prose/text */}
      <section className="mt-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-10">Our Philosophy</h2>
          <p className="text-sm text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12">
            We believe in providing <strong>powerful, yet simple-to-use</strong> tools that solve real-world problems for digital consumers. We constantly refine our algorithms to align with industry standards for <strong>licensed content delivery systems</strong>.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-indigo-50 rounded-2xl shadow-sm border border-slate-100">
              <Zap className="h-6 w-6 text-purple-600 mb-2 mx-auto" />
              <h4 className="text-sm font-semibold text-slate-900">Simplicity & Speed</h4>
              <p className="text-slate-700 text-xs mt-1 leading-relaxed">
                Generate codes for your paid subscription in seconds with our streamlined interface.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl shadow-sm border border-slate-100">
              <Gem className="h-6 w-6 text-indigo-600 mb-2 mx-auto" />
              <h4 className="text-sm font-semibold text-slate-900">Reliability</h4>
              <p className="text-slate-700 text-xs mt-1 leading-relaxed">
                99.9% uptime ensures our tools are available when you need them.
              </p>
            </div>
            <div className="p-6 bg-pink-50 rounded-2xl shadow-sm border border-slate-100">
              <UsersIcon className="h-6 w-6 text-pink-600 mb-2 mx-auto" />
              <h4 className="text-sm font-semibold text-slate-900">Community Driven</h4>
              <p className="text-slate-700 text-xs mt-1 leading-relaxed">
                Your feedback drives our development and improvements.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="mt-24 px-6 mb-32">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <dd className="text-2xl sm:text-3xl font-bold text-indigo-600">{stat.value}</dd>
              <dt className="text-slate-600 mt-2 text-xs font-medium">{stat.label}</dt>
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
};

export default About;