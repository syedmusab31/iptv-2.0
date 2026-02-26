// import React, { useState } from "react";
// import {
//   Play,
//   Code,
//   Database,
//   Key,
//   Clock,
//   MapPin,
//   Copy,
//   Settings,
//   Download,
// } from "lucide-react";

// const globalStep = {
//   name: "Select Your Tool",
//   description: "Choose the generator to get started.",
//   icon: Settings,
// };

// const toolsData = {
//   "Xtream Generator": [
//     {
//       name: "Connecting to Database",
//       description: "Click on connect button to connect to our secure database.",
//       icon: Database, // database icon for DB connection
//     },
//     {
//       name: "Input Preferences",
//       description: "Optionally, set your preferences like region.",
//       icon: Settings, // settings icon for preferences
//     },
//     {
//       name: "Generate Username",
//       description: "Click generate to create your username.",
//       icon: Play, // play icon to indicate generation
//     },
//     {
//       name: "Generate Password",
//       description: "Click generate to create your password.",
//       icon: Key, // key icon for password
//     },
//     {
//       name: "Generate Expiration Time",
//       description: "View the expiration time for the generated codes.",
//       icon: Clock, // clock icon for expiration
//     },
//     {
//       name: "View Region",
//       description: "Check the region associated with your generated codes.",
//       icon: MapPin, // map pin icon for region/location
//     },
//     {
//       name: "Share / Copy Information",
//       description: "Copy or share the generated information securely in your preferred format.",
//       icon: Copy, // copy icon for sharing
//     },
//   ],
//   "Stalker Code Generator": [
//     {
//       name: "Generate Portal",
//       description: "Input portal information to generate a working Stalker portal code.",
//       icon: Play, // play icon for generation
//     },
//     {
//       name: "Generate MAC Address",
//       description: "Create a valid MAC address for your configuration.",
//       icon: Code, // code icon for MAC
//     },
//     {
//       name: "Download / Share Info",
//       description: "Download or share the generated portal and MAC information securely in your preferred format.",
//       icon: Download, // download icon
//     },
//   ],
// };

// const HowToUse = () => {
//   const [activeTool, setActiveTool] = useState("Xtream Generator");
//   const steps = [globalStep, ...toolsData[activeTool]]; // prepend global step

//   return (
//     <div className="bg-gray-50 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//             How to Use
//           </h2>
//           <p className="mt-2 text-lg leading-8 text-slate-600">
//             Getting started is simple. Follow these steps to generate your content using your preferred tool.
//           </p>

//           {/* Tool Selector */}
//           {/* <div className="mt-8 flex justify-center space-x-4">
//             {Object.keys(toolsData).map((tool) => (
//               <button
//                 key={tool}
//                 onClick={() => setActiveTool(tool)}
//                 className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
//                   activeTool === tool
//                     ? "bg-indigo-600 text-white shadow-lg"
//                     : "bg-white text-slate-900 border border-gray-200 hover:bg-indigo-50"
//                 }`}
//               >
//                 {tool}
//               </button>
//             ))}
//           </div> */}
//           <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
//   {Object.keys(toolsData).map((tool) => (
//     <button
//       key={tool}
//       onClick={() => setActiveTool(tool)}
//       className={`px-4 py-2 sm:px-5 sm:py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
//         activeTool === tool
//           ? "bg-indigo-600 text-white shadow-lg"
//           : "bg-white text-slate-900 border border-gray-200 hover:bg-indigo-50"
//       }`}
//     >
//       {tool}
//     </button>
//   ))}
// </div>

//         </div>

//         {/* Steps Grid */}
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
//             {steps.map((step, index) => {
//               const Icon = step.icon;
//               return (
//                 <div key={index} className="flex flex-col items-center text-center">
//                   <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
//                     <Icon className="h-8 w-8 text-white" aria-hidden="true" />
//                   </div>
//                   <dt className="text-xl font-semibold leading-7 text-slate-900">
//                     {index + 1}. {step.name}
//                   </dt>
//                   <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
//                     <p className="flex-auto">{step.description}</p>
//                   </dd>
//                 </div>
//               );
//             })}
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowToUse;




import React, { useState } from "react";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";
import {
  Play,
  Code,
  Database,
  Key,
  Clock,
  MapPin,
  Copy,
  Settings,
  Download,
  ShieldCheck,
  LifeBuoy,
  Wifi,
} from "lucide-react";

// Existing Data
const globalStep = {
  name: "Select Your Tool",
  description: "Choose the generator to get started.",
  icon: Settings,
};

const toolsData = {
  "Xtream Generator": [
    {
      name: "Connecting to Database",
      description: "Click on connect button to connect to our secure database.",
      icon: Database, // database icon for DB connection
    },
    {
      name: "Input Preferences",
      description: "Optionally, set your preferences like region.",
      icon: Settings, // settings icon for preferences
    },
    {
      name: "Generate Username",
      description: "Click generate to create your username.",
      icon: Play, // play icon to indicate generation
    },
    {
      name: "Generate Password",
      description: "Click generate to create your password.",
      icon: Key, // key icon for password
    },
    {
      name: "Generate Expiration Time",
      description: "View the expiration time for the generated codes.",
      icon: Clock, // clock icon for expiration
    },
    {
      name: "View Region",
      description: "Check the region associated with your generated codes.",
      icon: MapPin, // map pin icon for region/location
    },
    {
      name: "Share / Copy Information",
      description: "Copy or share the generated information securely in your preferred format.",
      icon: Copy, // copy icon for sharing
    },
  ],
  "Stbemu Generator": [
    {
      name: "Generate Portal",
      description: "Input portal information to generate a working Stalker portal code.",
      icon: Play, // play icon for generation
    },
    {
      name: "Generate MAC Address",
      description: "Create a valid MAC address for your configuration.",
      icon: Code, // code icon for MAC
    },
    {
      name: "Download / Share Info",
      description: "Download or share the generated portal and MAC information securely in your preferred format.",
      icon: Download, // download icon
    },
  ],
};

// New Data for Compliance Section
const compliancePoints = [
  {
    title: "100% Legal Use Policy",
    description:
      "Avoiding any actual streams, our tools shape code setups for verified subscription services. Instead of handing out entry points, they build setup lines used by real accounts.",
    icon: ShieldCheck,
  },
  {
    title: "Data Protection Guarantee",
    description:
      "Once created, data disappears - never saved. Privacy matters most, so connections stay locked down by design.",
    icon: Database,
  },
  {
    title: "No Content Hosting",
    description:
      "Not here to hold your files. Instead think of us as handing out wrenches, not keeping movies on shelves. Streaming? Nope. Saving videos? Not happening. Tying together pirated shows? That is off the table too.",
    icon: Code,
  },
];

// New Data for Troubleshooting Section
const troubleshootingTips = [
  {
    title: "Check Subscription Status",
    description: "Your IPTV subscription must be running, so check it is paid up first thing. Before anything else, confirm the access hasn’t lapsed. Payment status matters most - keep that current. Access tools only after verifying your account stands open. Running the generator without valid access causes problems later. Stay clear of glitches by making sure everything’s settled ahead of time.",
    icon: Clock,
  },
  {
    title: "Verify Network Connection",
    description: "Check that your internet works well - either through Wi-Fi or cable - so setup goes smoothly. Connection quality matters when setting things up. A steady signal helps avoid hiccups later on. Slow or spotty links might cause problems during steps. Make sure it is reliable before moving forward.  q",
    icon: Wifi,
  },
  {
    title: "Refer to Your Provider",
    description: "Check with your official IPTV provider whenever you need exact portal links or login details for Xtream API access.",
    icon: LifeBuoy,
  },
];

const HowToUse = () => {
  const [activeTool, setActiveTool] = useState("Xtream Generator");
  const steps = [globalStep, ...toolsData[activeTool]]; // prepend global step

  return (
    <>
      <SEO
        title="How to Use IPTV Factory - Setup Guide & Tutorial"
        description="Complete step-by-step guide to using IPTV Factory code generators. Learn to generate Xtream codes and Stalker configuration in minutes."
        keywords="IPTV setup tutorial, how to use IPTV, code generator guide, Xtream code setup, Stalker MAC setup, IPTV configuration, beginner guide"
      />
      <Breadcrumb />
      <div className="bg-gradient-to-b from-gray-50 via-white to-indigo-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          How to Use
          </h2>
          <p className="mt-4 text-xl leading-8 text-slate-700">
            Getting started is simple. Select your tool below and follow the clear, step-by-step instructions.
          </p>

          {/* Tool Selector */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-4">
            {Object.keys(toolsData).map((tool) => (
              <button
                key={tool}
                onClick={() => setActiveTool(tool)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-lg shadow-md ${
                  activeTool === tool
                    ? "bg-indigo-600 text-white shadow-lg hover:bg-indigo-700"
                    : "bg-white text-slate-900 border-2 border-indigo-200 hover:bg-indigo-50"
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* Steps Grid - Existing Content */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Execution Steps for {activeTool}
          </h3>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02]">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg ring-4 ring-indigo-200">
                    <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-extrabold leading-7 text-slate-900">
                    Step {index + 1}. {step.name}
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{step.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
        
        {/* --- */}

        {/* NEW SECTION: Legal Compliance and Safe Use */}
        <div className="mt-32 pt-16 border-t border-gray-200">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Legal Compliance and Safe Use
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-4xl mx-auto">
              Our commitment is to provide <strong>legally compliant</strong> configuration tools only. These generators are designed to assist users in accessing their <strong>existing, paid, and licensed</strong> IPTV services.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {compliancePoints.map((point, index) => (
              <div key={index} className="p-8 bg-indigo-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <point.icon className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-xl font-bold text-slate-900">{point.title}</h3>
                </div>
                <p className="mt-4 text-slate-700">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- */}

        {/* NEW SECTION: Technical Prerequisites (Before You Start) */}
        <div className="mt-32 pt-16 border-t border-gray-200">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Technical Prerequisites
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-4xl mx-auto">
              To ensure a smooth and successful configuration process, please have the following information ready from your IPTV provider.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-2xl">
            <ul className="space-y-6 text-slate-700">
              <li className="flex items-start">
                <Key className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3 mt-1" />
                <div>
                  <strong className="text-slate-900">API Credentials:</strong> Working with API credentials means having access details provided through your subscription. A login name becomes necessary when setting up the Xtream Generator. The system needs a proper password to operate as intended. Without these entries, functionality fails entirely.
                </div>
              </li>
              <li className="flex items-start">
                <Code className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3 mt-1" />
                <div>
                  <strong className="text-slate-900">Stalker Portal URL:</strong> 
Start here: the Stalker Portal URL must match exactly what your authorized provider gives you. Not just any link will work - it has to be the right one. That address becomes the base for setup details. Without it, nothing configures properly.






                </div>
              </li>
              <li className="flex items-start">
                <Download className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3 mt-1" />
                <div>
                  <strong className="text-slate-900">Target Device/App:</strong> 
Start by checking your device has the right app ready - like Smart IPTV or TiviMate - for entering those codes later. While setting up, make sure it's one made for streaming these channels smoothly. Before anything else, grab that software first so things work when the time comes.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- */}

        {/* NEW SECTION: Troubleshooting & Support */}
        <div className="mt-32 pt-16 border-t border-gray-200 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Troubleshooting & Support
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-4xl mx-auto">
              Encountering issues? Here are a few common checks to perform before seeking further support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {troubleshootingTips.map((tip, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <tip.icon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900">{tip.title}</h3>
                <p className="mt-2 text-slate-700 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HowToUse;