import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

// Remove the simple preloader added in index.html once React finishes mounting
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) pre.style.transition = 'opacity 300ms ease', pre.style.opacity = '0';
  setTimeout(() => pre && pre.remove(), 350);
});
