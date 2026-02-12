
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import TrustBadges from './components/TrustBadges';
import Marquee from './components/Marquee';
import WorldMap from './components/WorldMap';
import MittoDifference from './components/MittoDifference';
import SuccessStories from './components/SuccessStories';
import LeadForm from './components/LeadForm';
import AboutUs from './components/AboutUs';
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

        <SuccessStories />

        <AboutUs />
      </main>

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
