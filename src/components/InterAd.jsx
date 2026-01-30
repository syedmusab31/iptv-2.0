import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const InterAd = ({ onClose }) => {
    const [timeLeft, setTimeLeft] = useState(5);
    const [canClose, setCanClose] = useState(false);

    useEffect(() => {
        try {
            // This is the logic from your <script> tag 
            // It tells Google to fill the <ins> tag below with an ad
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    // Timer logic
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            setCanClose(true);
        }
    }, [timeLeft]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            {/* Top Right Timer/Skip Button */}
            <div className="absolute top-8 right-8">
                {!canClose ? (
                    <span className="text-white/70 font-medium px-4 py-2 bg-black/40 rounded-full backdrop-blur-md border border-white/10">
                        Skip in {timeLeft}s
                    </span>
                ) : (
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 px-6 py-2.5 bg-white text-black hover:bg-gray-100 rounded-full transition-transform hover:scale-105 shadow-xl font-bold"
                        aria-label="Close Ad"
                    >
                        <span>Skip Ad</span>
                        <XMarkIcon className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Ad Container */}
            <div className="flex justify-center items-center w-full">
                <ins className="adsbygoogle"
                    style={{ display: 'block', minWidth: '300px', minHeight: '250px' }}
                    data-ad-client="ca-pub-9700554883020818"
                    data-ad-slot="7485309558"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        </div>
    );
}

export default InterAd;
