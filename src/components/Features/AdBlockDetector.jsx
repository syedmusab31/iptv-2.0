import { useEffect, useState } from "react";

export default function AdBlockDetector() {
  const [blocked, setBlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let detectionCount = 0;
    const requiredDetections = 2; // Require 2+ signals to reduce false positives

    // Helper: Generate randomized bait class names to evade known blocklists
    const generateRandomBaitClasses = () => {
      const prefixes = ['sponsored', 'partner', 'promo', 'featured', 'recommended'];
      const suffixes = ['content', 'post', 'wrapper', 'container', 'section', 'block'];
      const random = () => Math.random().toString(36).substring(2, 7);

      return [
        // Mix of known patterns and randomized ones
        { className: "adsbygoogle ad-banner ad-unit ad-slot", id: `bait-${random()}` },
        { className: "ad ads adsbox doubleclick ad-placement", id: `bait-${random()}` },
        { className: "advertisement ad-container", id: `bait-${random()}` },
        { className: `${prefixes[Math.floor(Math.random() * prefixes.length)]}-${suffixes[Math.floor(Math.random() * suffixes.length)]}`, id: `bait-${random()}` },
        { className: "f-ad pub_300x250 pub_300x250m pub_728x90", id: `bait-${random()}` },
        { className: "text-ad textAd text_ad text_ads text-ads text-ad-links", id: `bait-${random()}` },
        { className: `${prefixes[Math.floor(Math.random() * prefixes.length)]}-wrapper ad-zone`, id: `bait-${random()}` }
      ];
    };

    // Method 1: Bait Element Detection with Timing Trap (MutationObserver + Dual Check)
    const detectWithBait = () => {
      return new Promise((resolve) => {
        const baits = generateRandomBaitClasses();
        let isBlocked = false;
        let mutationDetected = false;

        const baitElements = baits.map(bait => {
          const el = document.createElement("div");
          el.className = bait.className;
          el.id = bait.id;
          el.style.cssText = "height: 1px !important; width: 1px !important; position: absolute; left: -999px; top: -999px;";
          el.setAttribute('data-bait', 'true');
          document.body.appendChild(el);
          return el;
        });

        // Check if element is blocked (using explicit CSS checks to avoid false positives)
        const checkBaitStatus = (bait) => {
          if (!document.body.contains(bait)) return true; // Removed from DOM

          const styles = window.getComputedStyle(bait);
          // Only check explicit CSS properties, not offsetHeight (which can be 0 during rendering)
          const isHidden = styles.getPropertyValue('display') === 'none' ||
            styles.getPropertyValue('visibility') === 'hidden';

          return isHidden;
        };

        // MutationObserver to catch delayed blocking
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' || mutation.type === 'childList') {
              mutation.removedNodes.forEach((node) => {
                if (node.getAttribute && node.getAttribute('data-bait') === 'true') {
                  mutationDetected = true;
                  isBlocked = true;
                }
              });

              // Check if attributes changed on bait elements
              if (mutation.target.getAttribute && mutation.target.getAttribute('data-bait') === 'true') {
                if (checkBaitStatus(mutation.target)) {
                  mutationDetected = true;
                  isBlocked = true;
                }
              }
            }
          });
        });

        // Observe the body for changes to bait elements
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['style', 'class']
        });

        // First check at 300ms
        setTimeout(() => {
          baitElements.forEach(bait => {
            if (checkBaitStatus(bait)) {
              isBlocked = true;
            }
          });
        }, 300);

        // Second check at 2000ms (catches delayed blockers)
        setTimeout(() => {
          if (!isBlocked) {
            baitElements.forEach(bait => {
              if (checkBaitStatus(bait)) {
                isBlocked = true;
              }
            });
          }

          // Cleanup
          observer.disconnect();
          baitElements.forEach(el => {
            if (document.body.contains(el)) {
              el.remove();
            }
          });

          resolve(isBlocked || mutationDetected);
        }, 2000);
      });
    };

    // Method 2: Speed of Light Test - Detect instant local interception
    const detectWithFetch = () => {
      return new Promise((resolve) => {
        const adUrls = [
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          "https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        ];

        // const testUrl = async (url) => {
        //   const start = performance.now();
        //   try {
        //     await fetch(url, { method: "HEAD", mode: "no-cors", cache: "no-store" });
        //     const elapsed = performance.now() - start;

        //     // If response is too fast (< 10ms), it's likely a local blocker intercepting
        //     if (elapsed < 10) {
        //       return true; // Blocked (too fast to be real network)
        //     }
        //     return false; // Likely not blocked
        //   } catch (e) {
        //     const elapsed = performance.now() - start;

        //     // If it fails instantly, it's blocked locally
        //     if (elapsed < 10) {
        //       return true;
        //     }
        //     // If it fails after some time, could be network issue or blocker
        //     return true;
        //   }
        // };

        // Test all URLs and resolve if any are blocked
       const testUrl = async (url) => {
  const start = performance.now();
  try {
    await fetch(url, { method: "HEAD", mode: "no-cors", cache: "no-store" });
    const elapsed = performance.now() - start;
    // If it succeeds but is impossibly fast, it's a local proxy/blocker
    return elapsed < 15; 
  } catch (e) {
    const elapsed = performance.now() - start;
    // If it fails in less than 20ms, it's a local block. 
    // If it takes 500ms+ to fail, it's just a bad internet connection.
    return elapsed < 50; 
  }
};
        Promise.all(adUrls.map(url => testUrl(url)))
          .then(results => {
            // If any URL is blocked, consider it detected
            resolve(results.some(blocked => blocked));
          })
          .catch(() => resolve(true));
      });
    };

    // Method 3: Script Loading & Global Object Test
    const detectWithScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;

        script.onerror = () => {
          script.remove();
          resolve(true); // Script failed to load
        };

        script.onload = () => {
          script.remove();
          // Check if the global object was created or stubbed
          setTimeout(() => {
            if (!window.adsbygoogle || (Array.isArray(window.adsbygoogle) && window.adsbygoogle.loaded === false)) {
              // Some advanced blockers load the script but prevent it from executing or stub the object
              // Note: Standard adsbygoogle is an array until initialized. 
              // This check is a bit heuristic.
            }
            resolve(false);
          }, 100);
        };

        document.head.appendChild(script);

        // Timeout fallback
        setTimeout(() => {
          if (document.head.contains(script)) {
            script.remove();
          }
          // If it hasn't loaded by now, assume blocked or slow connection (treat as blocked for safety if aggressive)
          // But strict timeout might cause false positives on slow networks. 
          // We rely on onerror usually.
        }, 5000);
      });
    };

    // Method 4: Iframe Trap
    const detectWithIframe = () => {
      return new Promise((resolve) => {
        const iframe = document.createElement('iframe');
        // Use a known ad-related URL
        iframe.src = "https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-1234567890123456";

        // REMOVED 'visibility: hidden' from here
        iframe.style.cssText = "height: 1px !important; width: 1px !important; position: absolute; left: -1000px; top: -1000px;";
        iframe.id = "ads-iframe-trap";
        document.body.appendChild(iframe);

        setTimeout(() => {
          const style = window.getComputedStyle(iframe);
          // Only check if the BROWSWER or BLOCKER set it to 'none'
          const isBlocked = style.display === 'none' || iframe.offsetParent === null;

          if (document.body.contains(iframe)) {
            iframe.remove();
          }
          resolve(isBlocked);
        }, 500);
      });
    };

    // Run all detection methods with score-based confidence
    const runDetection = async () => {
      try {
        const [baitResult, fetchResult, scriptResult, iframeResult] = await Promise.all([
          detectWithBait(),
          detectWithFetch(),
          detectWithScript(),
          detectWithIframe()
        ]);

        // Calculate confidence score
        let score = 0;
        if (baitResult) score += 1;
        if (fetchResult) score += 1;
        if (scriptResult) score += 1;
        if (iframeResult) score += 1;

        console.log('Detection Results:', {
          bait: baitResult,
          fetch: fetchResult,
          script: scriptResult,
          iframe: iframeResult,
          score: score,
          threshold: requiredDetections
        });

        // Only block if we have 2 or more signals (reduces false positives)
        if (score >= requiredDetections) {
          setBlocked(true);
          setTimeout(() => setShowModal(true), 500);
        }
      } catch (error) {
        console.error("Ad-blocker detection error:", error);
      }
    };

    // Add delay to avoid React Strict Mode double-mount issues and ensure DOM is settled
    const timer = setTimeout(() => {
      runDetection();
    }, 1000);

    return () => clearTimeout(timer);
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
              { text: "Disable your ad blocker for this website" },
              { text: "Click the button below to refresh the page" }
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
