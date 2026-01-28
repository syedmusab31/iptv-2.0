import React, { useEffect } from "react";

const InterAd = () => {
   useEffect(() => {
    try {
      // This is the logic from your <script> tag 
      // It tells Google to fill the <ins> tag below with an ad
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="ad-wrapper" style={{ overflow: 'hidden', textAlign: 'center' }}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-9700554883020818"
           data-ad-slot="7485309558"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}

export default InterAd;
