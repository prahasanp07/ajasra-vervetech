import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { WhatsAppFloatingButton } from './components/ui/WhatsAppFloatingButton';

// Helper component to handle hash scrolling on route transitions
const ScrollToHashElement: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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
            <Route path="*" element={<HomePage />} />
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
