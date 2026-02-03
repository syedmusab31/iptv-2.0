import React from 'react';
import { Key, Code, Download } from "lucide-react";

const TechnicalPrerequisites = () => {
    return (
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
                            <strong className="text-slate-900">API Credentials:</strong> You must possess a valid username and password supplied by your paid IPTV service for the Xtream Generator to function correctly.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Code className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3 mt-1" />
                        <div>
                            <strong className="text-slate-900">Stalker Portal URL:</strong> For the Stalker Generator, you need the exact portal URL provided by your licensed service. This is the endpoint for configuration.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Download className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3 mt-1" />
                        <div>
                            <strong className="text-slate-900">Target Device/App:</strong> Ensure you have the correct IPTV client application installed (e.g., Smart IPTV, TiviMate, etc.) where you will input the generated codes.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TechnicalPrerequisites;
