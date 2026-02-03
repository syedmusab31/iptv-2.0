import React from "react";
import AboutHero from "../components/AboutSections/AboutHero";
import MissionStatement from "../components/AboutSections/MissionStatement";
import ExpertTeam from "../components/AboutSections/ExpertTeam";
import LegalCommitment from "../components/AboutSections/LegalCommitment";
import CoreFeatures from "../components/AboutSections/CoreFeatures";
import TechnologyOverview from "../components/AboutSections/TechnologyOverview";
import ContactBanner from "../components/AboutSections/ContactBanner";
import Philosophy from "../components/AboutSections/Philosophy";
import AboutStats from "../components/AboutSections/AboutStats";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Blobs - Keep the same cool look */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-full opacity-30 blur-3xl animate-blob mix-blend-multiply"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-tr from-purple-200 via-pink-200 to-indigo-200 rounded-full opacity-40 blur-2xl animate-blob animation-delay-2000 mix-blend-multiply"></div>

      <AboutHero />
      <MissionStatement />
      <ExpertTeam />
      <LegalCommitment />
      <CoreFeatures />
      <TechnologyOverview />
      <ContactBanner />
      <Philosophy />
      <AboutStats />
    </div>
  );
};

export default About;
