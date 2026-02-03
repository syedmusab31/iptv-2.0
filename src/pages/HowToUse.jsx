
import React, { useState } from "react";
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
} from "lucide-react";

import ToolSelector from "../components/HowToUseSections/ToolSelector";
import StepsGrid from "../components/HowToUseSections/StepsGrid";
import LegalCompliance from "../components/HowToUseSections/LegalCompliance";
import TechnicalPrerequisites from "../components/HowToUseSections/TechnicalPrerequisites";
import Troubleshooting from "../components/HowToUseSections/Troubleshooting";

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

const HowToUse = () => {
  const [activeTool, setActiveTool] = useState("Xtream Generator");
  const steps = [globalStep, ...toolsData[activeTool]]; // prepend global step

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-indigo-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <ToolSelector
          activeTool={activeTool}
          setActiveTool={setActiveTool}
          toolsData={toolsData}
        />

        <StepsGrid
          activeTool={activeTool}
          steps={steps}
        />

        <LegalCompliance />

        <TechnicalPrerequisites />

        <Troubleshooting />

      </div>
    </div>
  );
};

export default HowToUse;
