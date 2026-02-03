import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay to make it feel more natural/less intrusive on load
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        // Here you would typically initialize analytics/ads
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
        // Ensure analytic scripts are disabled
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-slate-900 border-t border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-slide-up">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                <div className="text-slate-300 text-sm md:text-base leading-relaxed text-center sm:text-left">
                    <p>
                        We use cookies to enhance your experience, analyze site traffic, and serve personalized content.
                        By clicking "Accept", you agree to our use of cookies according to our{' '}
                        <Link to="/legal/privacy" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
                            Privacy Policy
                        </Link>.
                    </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 text-sm font-semibold text-slate-300 bg-transparent border border-slate-600 rounded-lg hover:bg-slate-800 hover:text-white transition-colors duration-200"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 shadow-lg shadow-indigo-900/20 transition-all duration-200"
                    >
                        Accept
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CookieConsent;
