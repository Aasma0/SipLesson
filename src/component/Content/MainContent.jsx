// component/Content/MainContent.js
import React from 'react';
import HeroSection from './HeroSection';
import RecipesSection from './RecipesSection';
import OfferingsSection from './OfferingsSection';
import BenefitsSection from './BenefitsSection';
import Footer from './FooterSection.js';

const MainContent = () => {
  return (
    <div>
      <HeroSection />
      <RecipesSection />
      <OfferingsSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default MainContent;
