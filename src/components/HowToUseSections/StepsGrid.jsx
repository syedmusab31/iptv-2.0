import React from 'react';

const StepsGrid = ({ activeTool, steps }) => {
    return (
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
    );
};

export default StepsGrid;
