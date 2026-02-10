import Navigation from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import DisciplinesSection from './components/sections/DisciplinesSection';
import PricingSection from './components/sections/PricingSection';
import FacilitiesSection from './components/sections/FacilitiesSection';
import Footer from './components/layout/Footer';
import ContactSection from './components/sections/ContactSection';

function App() {
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

      {/* FOOTER AL FINAL DE TODO */}
      <Footer />
    </>
  );
}

export default App;