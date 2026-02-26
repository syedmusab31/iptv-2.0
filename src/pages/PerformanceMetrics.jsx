import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
    RocketLaunchIcon,
    ShieldCheckIcon,
    BoltIcon,
    GlobeAltIcon,
    ChartBarIcon,
    CpuChipIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        title: 'Lightning Fast Performance',
        description: 'Optimized code splitting and lazy loading ensure your site loads in under 2 seconds, providing an exceptional user experience.',
        icon: BoltIcon,
    },
    {
        title: 'SEO Optimized',
        description: 'Comprehensive meta tags, structured data, and semantic HTML ensure maximum visibility in search engine results.',
        icon: ChartBarIcon,
    },
    {
        title: 'Mobile Responsive',
        description: 'Fully responsive design that works flawlessly on all devices - smartphones, tablets, and desktops.',
        icon: GlobeAltIcon,
    },
    {
        title: 'Secure & Reliable',
        description: 'Industry-standard security headers, HTTPS support, and robust error handling for peace of mind.',
        icon: ShieldCheckIcon,
    },
    {
        title: 'Optimized Caching',
        description: 'Smart browser caching and GZIP compression reduce bandwidth usage by up to 80%.',
        icon: CpuChipIcon,
    },
    {
        title: 'AdSense Ready',
        description: 'Built with Google AdSense best practices, meeting all technical and content requirements.',
        icon: RocketLaunchIcon,
    },
];

const PerformanceMetrics = () => {
    return (
        <>
            <SEO
                title="Performance Metrics - IPTV Factory's Technical Standards"
                description="IPTV Factory performance metrics, SEO optimization, and technical specifications. Lightning-fast load times and mobile-optimized for best user experience."
                keywords="IPTV performance, website speed, SEO optimization, Core Web Vitals, page speed, mobile optimization, technical standards"
            />

            <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
                            Performance & SEO Excellence
                        </h1>
                        <p className="text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                            Built for speed, optimized for search engines, designed for success.
                        </p>
                    </div>
                </div>

                {/* Performance Features */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Technical Excellence
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Every aspect of IPTV Factory is optimized for maximum performance and search engine visibility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Core Web Vitals */}
                    <div className="mt-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Core Web Vitals Performance
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-5xl font-extrabold text-green-600 mb-2">
                                    &lt; 2.5s
                                </div>
                                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                                    Largest Contentful Paint
                                </div>
                                <p className="text-slate-500 text-sm">
                                    Main content loads in under 2.5 seconds
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-extrabold text-green-600 mb-2">
                                    &lt; 100ms
                                </div>
                                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                                    First Input Delay
                                </div>
                                <p className="text-slate-500 text-sm">
                                    Instant response to user interactions
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-extrabold text-green-600 mb-2">
                                    &lt; 0.1
                                </div>
                                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                                    Cumulative Layout Shift
                                </div>
                                <p className="text-slate-500 text-sm">
                                    Stable layout with minimal shifting
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SEO Features */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Search Engine Optimization
                        </h2>
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                                        On-Page SEO
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Optimized meta titles and descriptions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Semantic HTML5 structure</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Proper heading hierarchy (H1-H6)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Image alt text optimization</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Internal linking strategy</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Mobile-first indexing ready</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                                        Technical SEO
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">XML sitemap generated</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Robots.txt configured</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Structured data (JSON-LD)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Canonical URLs implemented</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">Open Graph & Twitter Cards</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">✓</span>
                                            <span className="text-slate-700">HTTPS ready (SSL support)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Target Keywords */}
                    <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Target Keywords & Rankings
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                'IPTV Generator',
                                'Xtream Code Generator',
                                'Stalker Code Generator',
                                'M3U Generator',
                                'IPTV Tools',
                                'STB Emulator Setup',
                                'IPTV Configuration',
                                'Free IPTV Tools',
                                'MAG Code Generator',
                                'IPTV Smarters Setup',
                                'TiviMate Configuration',
                                'IPTV Middleware',
                            ].map((keyword, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 text-center"
                                >
                                    <span className="text-slate-800 font-semibold">{keyword}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center text-slate-600">
                            Optimized for high-intent search queries related to IPTV code generation and configuration
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
                        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Try our lightning-fast IPTV code generators and see why thousands trust IPTV Factory.
                        </p>
                        <Link
                            to="/"
                            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PerformanceMetrics;
