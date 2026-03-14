import React from 'react';
import { Hero } from '../components/Hero';
import { ModernWhoWeAre } from '../components/ModernWhoWeAre';
import { BentoStats } from '../components/BentoStats';
import { TrustGuarantee } from '../components/TrustGuarantee';
import { FleetSection } from '../components/FleetSection';
import { DetailedWhyUs } from '../components/DetailedWhyUs';
import { SafetyReliability } from '../components/SafetyReliability';
import { PricingInfo } from '../components/PricingInfo';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <ModernWhoWeAre />
      <BentoStats />
      <TrustGuarantee />
      <FleetSection />
      <DetailedWhyUs />
      <SafetyReliability />
      <Services />
      <PricingInfo />
      <Process />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
