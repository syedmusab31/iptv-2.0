import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-xl font-bold text-slate-900">IPTV Factory</span>
                        <p className="mt-4 text-slate-500 text-sm max-w-md">
                            Professional IPTV code generation tools for Xtream and Stalker middleware. Secure, fast, and reliable services for legitimate IPTV subscriptions.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Resources</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="/blog" className="text-base text-slate-500 hover:text-slate-900">
                                    Blog & Guides
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-base text-slate-500 hover:text-slate-900">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/how-to-use" className="text-base text-slate-500 hover:text-slate-900">
                                    How to Use
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-base text-slate-500 hover:text-slate-900">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="/legal/privacy" className="text-base text-slate-500 hover:text-slate-900">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/legal/terms" className="text-base text-slate-500 hover:text-slate-900">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/legal/security" className="text-base text-slate-500 hover:text-slate-900">
                                    Data Security
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-4">
                    <p className="text-base text-slate-400 text-center">
                        &copy; {currentYear} IPTV Factory. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
