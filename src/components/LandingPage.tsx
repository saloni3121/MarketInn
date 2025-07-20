import React from 'react';
import Header from './Header';
import Hero from './Hero';
import LivePreview from './LivePreview';
import HowItWorks from './HowItWorks';
import WhyMarketInn from './WhyMarketInn';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FinalCTA from './FinalCTA';
import StickyCtaBar from './StickyCtaBar';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyMarketInn />
      <LivePreview />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <StickyCtaBar />
      <Footer />
    </div>
  );
};

export default LandingPage;