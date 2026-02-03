import React from 'react';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactBanner = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparency & Connection</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            We are real people building real tools. While we operate globally, we maintain a direct line of communication with our user community. Whether you have a technical question about an M3U8 manifest or need clarification on our terms, our team is reachable.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mr-4">
                                    <MapPinIcon className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Registered Office</p>
                                    <p className="text-slate-600">Tech Hub, San Francisco, CA (Digital Operations)</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mr-4">
                                    <EnvelopeIcon className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Official Support</p>
                                    <a href="mailto:support@iptv-factory.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">support@iptv-factory.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Connect Socially</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-slate-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Box: What We Don't Do */}
                    <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                        <h3 className="text-xl font-bold text-red-800 mb-4">Compliance Notice: What We DON'T Do</h3>
                        <p className="text-red-700 text-sm mb-4">
                            To ensure full compliance with international copyright laws and AdSense policies, it is important to clarify the limitations of our platform:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start text-red-700 text-sm">
                                <span className="mr-2 mt-0.5 text-red-500">✕</span>
                                <div>
                                    <strong>No Content Hosting:</strong> We do not host, store, or distribute any media files, video streams, or copyrighted content.
                                </div>
                            </li>
                            <li className="flex items-start text-red-700 text-sm">
                                <span className="mr-2 mt-0.5 text-red-500">✕</span>
                                <div>
                                    <strong>No Selling of Streams:</strong> We do not sell IPTV subscriptions, "loaded" boxes, or access to unauthorized servers.
                                </div>
                            </li>
                            <li className="flex items-start text-red-700 text-sm">
                                <span className="mr-2 mt-0.5 text-red-500">✕</span>
                                <div>
                                    <strong>No Piracy Tools:</strong> Our configuration tools are strictly for formatting standard API credentials for legitimate, authorized services.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;
