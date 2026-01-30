import React from "react";
import { ShieldCheckIcon, UsersIcon, BookOpenIcon, BoltIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { Code, Play, Zap, Gem } from "lucide-react";


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
    <div className="bg-gradient-to-b from-indigo-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Blobs - Keep the same cool look */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-full opacity-30 blur-3xl animate-blob mix-blend-multiply"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-tr from-purple-200 via-pink-200 to-indigo-200 rounded-full opacity-40 blur-2xl animate-blob animation-delay-2000 mix-blend-multiply"></div>

      {/* Hero Section */}
      <section className="relative py-32 text-center px-6">
        <h1 className="text-6xl font-extrabold text-slate-900 mb-6 leading-tight sm:text-7xl">
          About IPTV Factory
        </h1>
        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
          Your trusted platform for legal IPTV code generation. Seamless access to live TV, movies, sports, and premium content with absolute ease.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 -mt-24 relative">
        <div className="bg-white backdrop-blur-md bg-opacity-80 rounded-3xl shadow-2xl p-14 text-center transform hover:scale-[1.01] transition-transform duration-500">
          <h2 className="text-4xl font-bold text-indigo-600 mb-6">Smarter Streaming, Limitless Entertainment</h2>
          <p className="text-lg text-slate-700 mb-4">
            IPTV Factory is your ultimate destination for high-quality legal IPTV services. Whether you are a casual viewer or a hardcore enthusiast, we provide access codes that unlock a vast world of live channels, on-demand movies, international sports, and premium content.
          </p>
          <p className="text-lg text-slate-700">
            Our mission is to redefine entertainment access by providing seamless integration tools. Our focus is on delivering top-quality content configuration, zero hassle, and complete user satisfaction through legitimate service connection.
          </p>
        </div>
      </section>

      {/* Our Commitment to Legality & Safety - NEW SECTION for AdSense Compliance */}
      <section className="mt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Our Commitment to Legality & Safety</h2>
          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/2 bg-white bg-opacity-70 backdrop-blur-md rounded-3xl p-10 shadow-xl mb-10 lg:mb-0">
              <BookOpenIcon className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Strictly for Authorized Services</h3>
              <p className="text-slate-700">
                IPTV Factory's tools are designed to facilitate legitimate access to paid or authorized subscription-based IPTV services. We do not support, endorse, or provide codes for illegal streaming or circumventing content protection measures. Our platform helps users manage and connect to their existing, legally purchased subscriptions efficiently.
              </p>
            </div>
            <div className="lg:w-1/2 bg-white bg-opacity-70 backdrop-blur-md rounded-3xl p-10 shadow-xl">
              <ShieldCheckIcon className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Data Security & Privacy Focus</h3>
              <p className="text-slate-700">
                We prioritize your <strong>privacy and security</strong>. Our code generation process is stateless and does not store sensitive personal information or proprietary subscription details. All generated codes are based on public-domain configuration formats (like Xtream and Stalker protocols) and are intended for use with your <strong>own licensed IPTV provider</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Existing Content */}
      <section className="mt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16"> Core Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`relative bg-white bg-opacity-70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-4 hover:scale-105 ${
                    idx % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <div className="flex items-center justify-center h-20 w-20 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white mb-6 animate-float">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-700 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
      {/* How Our Generators Work (The Technology) - NEW SECTION for value and depth */}
      <section className="mt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16"> How Our Generators Work (The Technology)</h2>
          <div className="bg-white backdrop-blur-md bg-opacity-80 rounded-3xl shadow-2xl p-14">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600">
                  <BoltIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Understanding Xtream API Logic</h3>
                  <p className="text-slate-700 mt-1">
                    The <strong>Xtream Code Generator</strong> utilizes known parameters of the Xtream Codes API (used by many legitimate providers) to structure access details. It takes your <strong>valid</strong> provider-issued credentials and formats them into a single, cohesive login string that is compatible with various IPTV client applications, simplifying connection setup.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                  <ComputerDesktopIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Stalker Portal Configuration</h3>
                  <p className="text-slate-700 mt-1">
                    Our <strong>Stalker Code Generator</strong> is built around the Mag and Stalker middleware platforms. This tool generates the correctly formatted <strong>virtual MAC addresses</strong> and portal URL combinations needed for a subscriber's device (e.g., set-top box or smart TV app) to interface with a Stalker-based IPTV service, ensuring proper authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our User-Centric Philosophy - NEW SECTION to add more prose/text */}
      <section className="mt-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-10">Our User-Centric Philosophy</h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            At IPTV Factory, the user experience is paramount. We believe in providing <strong>powerful, yet simple-to-use</strong> tools that solve real-world problems for digital consumers. We constantly refine our algorithms and update our platform to align with the latest industry standards for <strong>licensed content delivery systems</strong>.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-indigo-50 rounded-2xl shadow-md">
              <Zap className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="text-xl font-semibold text-slate-900">Simplicity & Speed</h4>
              <p className="text-slate-700 text-sm mt-1">
                Our interface is designed for maximum speed. Generate the necessary codes for your *paid subscription* in seconds, not minutes.
              </p>
            </div>
            <div className="p-8 bg-purple-50 rounded-2xl shadow-md">
              <Gem className="h-8 w-8 text-indigo-600 mb-3" />
              <h4 className="text-xl font-semibold text-slate-900">Quality of Service</h4>
              <p className="text-slate-700 text-sm mt-1">
                We maintain a 99.9% uptime and constantly monitor our systems to ensure reliability, guaranteeing the tools are available when you need to connect to your service.
              </p>
            </div>
            <div className="p-8 bg-pink-50 rounded-2xl shadow-md">
              <UsersIcon className="h-8 w-8 text-pink-600 mb-3" />
              <h4 className="text-xl font-semibold text-slate-900">Community Driven</h4>
              <p className="text-slate-700 text-sm mt-1">
                We listen to our users. Feedback drives our development, ensuring our tools meet the evolving needs of the legitimate IPTV subscriber base.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section - Existing Content */}
      <section className="mt-32 px-6 mb-32">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              <dd className="text-4xl sm:text-5xl font-extrabold text-indigo-600 animate-pulse">{stat.value}</dd>
              <dt className="text-slate-700 mt-2 text-lg">{stat.label}</dt>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;