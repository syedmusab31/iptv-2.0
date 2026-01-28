import { useEffect, useState } from "react";

export default function AdBlockDetector() {
  const [blocked, setBlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let detectionCount = 0;
    const requiredDetections = 1; // At least 1 method must detect ad-blocker

    // Method 1: Bait Element Detection (Multiple bait elements)
    const detectWithBait = () => {
      return new Promise((resolve) => {
        const baits = [
          { className: "adsbygoogle ad-banner ad-unit ad-slot", id: "ad-bait-1" },
          { className: "ad ads adsbox doubleclick ad-placement", id: "ad-bait-2" },
          { className: "advertisement ad-container", id: "ad-bait-3" }
        ];

        const baitElements = baits.map(bait => {
          const el = document.createElement("div");
          el.className = bait.className;
          el.id = bait.id;
          el.style.cssText = "height: 1px !important; width: 1px !important; position: absolute; left: -999px;";
          document.body.appendChild(el);
          return el;
        });

        setTimeout(() => {
          let isBlocked = false;

          baitElements.forEach(bait => {
            const styles = window.getComputedStyle(bait);
            if (
              styles.display === "none" ||
              styles.visibility === "hidden" ||
              bait.offsetHeight === 0 ||
              bait.offsetWidth === 0 ||
              styles.opacity === "0"
            ) {
              isBlocked = true;
            }
          });

          // Cleanup
          baitElements.forEach(el => el.remove());
          resolve(isBlocked);
        }, 100);
      });
    };

    // Method 2: Fetch Request to Ad Domains
    const detectWithFetch = () => {
      return new Promise((resolve) => {
        const adUrls = [
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          "https://www.googletagservices.com/tag/js/gpt.js"
        ];

        Promise.race([
          fetch(adUrls[0], { method: "HEAD", mode: "no-cors", cache: "no-store" })
            .then(() => false)
            .catch(() => true),
          new Promise(resolve => setTimeout(() => resolve(false), 1000))
        ]).then(resolve);
      });
    };

    // Method 3: Script Loading Test
    const detectWithScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.onerror = () => {
          script.remove();
          resolve(true);
        };
        script.onload = () => {
          script.remove();
          resolve(false);
        };

        document.head.appendChild(script);

        // Timeout fallback
        setTimeout(() => {
          script.remove();
          resolve(false);
        }, 2000);
      });
    };

    // Run all detection methods
    const runDetection = async () => {
      try {
        const [baitResult, fetchResult, scriptResult] = await Promise.all([
          detectWithBait(),
          detectWithFetch(),
          detectWithScript()
        ]);

        if (baitResult) detectionCount++;
        if (fetchResult) detectionCount++;
        if (scriptResult) detectionCount++;

        if (detectionCount >= requiredDetections) {
          setBlocked(true);
          setTimeout(() => setShowModal(true), 300);
        }
      } catch (error) {
        console.error("Ad-blocker detection error:", error);
      }
    };

    runDetection();
  }, []);

  if (!blocked || !showModal) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black/95 to-slate-900/98 backdrop-blur-lg flex flex-col items-center justify-center p-5 text-center z-[99999] font-sans animate-fadeIn">
      <div className="max-w-[800px] w-full bg-gradient-to-br from-slate-800/90 to-slate-900/95 rounded-3xl p-12 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] border border-white/10 animate-slideDown">
        {/* Icon */}
        <div className="text-[3rem] mb-2 animate-pulse-custom drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
          🚫
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-br from-red-500 to-red-600 bg-clip-text text-transparent tracking-tight">
          Ad Blocker Detected
        </h1>

        {/* Description */}
        <p className="text-md text-slate-200 mb-4 leading-relaxed">
          We've detected that you're using an ad blocker.
        </p>

        <p className="text-base text-slate-400 mb-8 leading-relaxed">
          We rely on advertisements to provide <strong className="text-blue-500">free access</strong> to our premium tools and services.
        </p>

        {/* Instructions */}
        <div className="mb-8">
          <h3 className="text-lg text-slate-100 mb-4 font-semibold">
            To continue, please:
          </h3>

          <div className="flex flex-col gap-3">
            {[
              {text: "Disable your ad blocker for this website" }, 
              {text: "Click the button below to refresh the page" }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-blue-500/10 border border-blue-500/30 rounded-xl px-5 py-4 flex items-center gap-4 text-left transition-all duration-300 hover:translate-x-1 hover:bg-blue-500/15"
              >
        
                <span className="text-slate-200 text-base">{step.text}</span>
              </div>
            ))}
          </div>
         <div className="mt-6"> {/* Increased margin for better separation */}
  <button 
  onClick={() => window.location.reload()}
    className="
      px-4 py-4 
      bg-gradient-to-r from-indigo-600 to-purple-600 
      rounded-xl 
      text-sm font-extrabold text-white 
      shadow-lg shadow-indigo-500/50 
      transition-all duration-300 
      transform focus:outline-none 
      uppercase 
    "
  >
    Click Here to Access the Codes
  </button>
</div>
        </div>
        {/* Footer Note */}
       <p className="mt-8 text-sm text-slate-600 max-w-[500px] mx-auto text-center">
    Thank you for supporting us! Your support helps us maintain and improve our services.
</p>
      </div>

      
     
    </div>
  );
}
