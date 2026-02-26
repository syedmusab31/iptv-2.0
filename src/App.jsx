import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AdBlockDetector from './components/Features/AdBlockDetector';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Layout/Loader';

// Lazy-loaded pages for better initial bundle size
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const HowToUse = lazy(() => import('./pages/HowToUse'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/Legal/TermsConditions'));
const TermsService = lazy(() => import('./pages/Legal/TermsService'));
const DataSecurity = lazy(() => import('./pages/Legal/DataSecurity'));

function App() {

  return (
    <>
      {/* This appears on top of everything if adblock is detected */}
      <AdBlockDetector />

      {/* Your site layout and pages */}
      <Layout>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms" element={<TermsConditions />} />
            <Route path="/legal/service" element={<TermsService />} />
            <Route path="/legal/security" element={<DataSecurity />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
