import React from 'react';

const stats = [
    { label: "Users Worldwide", value: "10k+" },
    { label: "Generations Daily", value: "50k+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Support", value: "24/7" },
];

const AboutStats = () => {
    return (
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
    );
};

export default AboutStats;
