import React from 'react';
import Navigation from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import DisciplinesSection from '../components/sections/DisciplinesSection';
import PricingSection from '../components/sections/PricingSection';
import FacilitiesSection from '../components/sections/FacilitiesSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <DisciplinesSection />
        <PricingSection />
        <FacilitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;