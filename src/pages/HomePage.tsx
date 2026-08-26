import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { ServicePanel } from '../components/sections/ServicePanel';
import { Capabilities } from '../components/sections/Capabilities';
import { FeatureSplit } from '../components/sections/FeatureSplit';
import { Applications } from '../components/sections/Applications';
import { VisionMission } from '../components/sections/VisionMission';
import { CTABanner } from '../components/sections/CTABanner';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Editorial Centered Hero with Industrial Visual */}
      <Hero />

      {/* Factual Trust Indicators Strip */}
      <TrustStrip />

      {/* Signature Dark Teal Featured Service Panel */}
      <ServicePanel />

      {/* Capabilities Image-Cards Grid */}
      <Capabilities />

      {/* Split Feature / Why Ajasra Facility & Process Section */}
      <FeatureSplit />

      {/* Industries We Cater (Construction, Engineering, Agriculture, Energy, Hardware, Automotive, Shipping) */}
      <Applications />

      {/* Our Vision & Mission Section (scraped from ajasravervetech.com) */}
      <VisionMission />

      {/* Wide Industrial Call-To-Action Banner */}
      <CTABanner />

      {/* Contact Information & WhatsApp-Integrated Inquiry Form */}
      <ContactSection />
    </>
  );
};
