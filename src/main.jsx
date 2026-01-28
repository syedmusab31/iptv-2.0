import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { useEffect } from 'react'

// function adBlockDetector(){
//   setTimeout(()=>{
//     checkAdBlock();
//   },1000);
// }

// function checkAdBlock(){
//   document.body.innerHTML +=`<div class="ad" id="testad" style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.9); color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000; padding: 20px; text-align: center;">`;
//   const testAd = document.getElementById('testad');
//   const testAdStyles=window.getComputedStyle(testAd);

//   if(testAdStyles.display==='none' || testAdStyles.visibility==='hidden'){
//     console.log("Ad Blocker Detected");
//     document.body.innerHTML +=`
//     <div class="adblock-message" style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.9); color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000; padding: 20px; text-align: center;">
//       <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem;">🚫 Ad Blocker Detected!</h1>
//       <p style="font-size: 1.25rem; margin-bottom: 1rem; line-height: 1.5;">
//         We've detected that you're using an ad blocker. To continue using our services, please disable it.
//       </p>
//       <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.5;">
//         We rely on advertisements to provide you with free access to our tools and content.
//       </p>
//       <div style="border: 2px solid white; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; background-color: #1e293b;">
//         <p style="font-size: 1.125rem; font-weight: 600;">
//           ✓ After disabling your ad blocker, please refresh the page to continue.
//         </p>
//       </div>
//       <p style="font-size: 0.875rem; color: #d1d5db;">
//         If you continue to see this message, try clearing your browser cache.
//       </p>
//     </div>
//     `;
//   }
//   else{
//     console.log("No Ad Blocker Detected");
//   }

//   document.body.removeChild(testAd);
// }

// adBlockDetector();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// Remove the simple preloader added in index.html once React finishes mounting
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) pre.style.transition = 'opacity 300ms ease', pre.style.opacity = '0';
  setTimeout(() => pre && pre.remove(), 350);
});
