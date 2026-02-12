
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import TrustBadges from './components/TrustBadges';
import Marquee from './components/Marquee';
import WorldMap from './components/WorldMap';
import MittoDifference from './components/MittoDifference';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import SuccessStories from './components/SuccessStories';
import LeadForm from './components/LeadForm';
import ExpansionBlock from './components/ExpansionBlock';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import LoginModal from './components/LoginModal';
import { VisaCategory } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<VisaCategory>(VisaCategory.TOURIST);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      
      <main>
        <Hero 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <SearchBar activeCategory={activeCategory} />
        
        <TrustBadges />
        
        <Marquee />

        <WorldMap />

        <LeadForm onAuditClick={() => setIsAuditModalOpen(true)} />

        <MittoDifference />

        <CompetitiveAdvantage />

        <SuccessStories />

        <ExpansionBlock />

        <AboutUs />
      </main>

      <Footer />

      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default App;
