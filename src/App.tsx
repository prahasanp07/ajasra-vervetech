import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { WhatsAppFloatingButton } from './components/ui/WhatsAppFloatingButton';

// Helper component to handle hash scrolling on route transitions
const ScrollToHashElement: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth';

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    // The target section may not be mounted yet right after a route change,
    // so retry for up to ~1.5s before giving up.
    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer: number;
    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior });
      } else if (attempts++ < 15) {
        timer = window.setTimeout(tryScroll, 100);
      }
    };
    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <div className="app-root">
        {/* WCAG 2.1 AA Accessibility: Skip to main content link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Sticky Header with Navigation and Quote CTA */}
        <Header />

        {/* Main Routed Page Content */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Multi-column Industrial Footer */}
        <Footer />

        {/* Floating Fast-Access WhatsApp Launcher */}
        <WhatsAppFloatingButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
