import React, { useState } from 'react';

const ToolSelector = ({ activeTool, setActiveTool, toolsData }) => {
    return (
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
                        className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-lg shadow-md ${activeTool === tool
                                ? "bg-indigo-600 text-white shadow-lg hover:bg-indigo-700"
                                : "bg-white text-slate-900 border-2 border-indigo-200 hover:bg-indigo-50"
                            }`}
                    >
                        {tool}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ToolSelector;
