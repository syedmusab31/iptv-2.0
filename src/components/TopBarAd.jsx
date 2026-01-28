import React, { useEffect } from "react";

const TopBarAd = () => {
    useEffect(() => {
        try {
            // Push the ad to Google AdSense
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <div className="w-full bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-center items-center min-h-[90px] sm:min-h-[100px]">
                    <ins
                        className="adsbygoogle"
                        style={{ display: 'block' }}
                        data-ad-client="ca-pub-9700554883020818"
                        data-ad-slot="1217041105"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    ></ins>
                </div>
            </div>
        </div>
    );
};

export default TopBarAd;
