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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-auto overflow-hidden">
                {/* Header with Timer/Close Button */}
                <div className="flex justify-end p-2 bg-gray-100 border-b items-center h-14">
                    {!canClose ? (
                        <span className="text-gray-500 font-medium px-4">
                            Skip in {timeLeft}s
                        </span>
                    ) : (
                        <button
                            onClick={onClose}
                            className="flex items-center gap-1 px-4 py-1.5 bg-red-600 text-white hover:bg-red-700 rounded-full transition-colors font-medium text-sm"
                            aria-label="Close Ad"
                        >
                            <span>Skip Ad</span>
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Ad Container */}
                <div className="p-4 flex justify-center items-center min-h-[300px] bg-gray-50">
                    <ins className="adsbygoogle"
                        style={{ display: 'block', minWidth: '300px', minHeight: '250px' }}
                        data-ad-client="ca-pub-9700554883020818"
                        data-ad-slot="7485309558"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                </div>
            </div>
        </div>
    );
}

export default InterAd;
