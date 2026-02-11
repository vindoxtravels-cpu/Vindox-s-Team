
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
import { VisaCategory } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<VisaCategory>(VisaCategory.TOURIST);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <main>
        <Hero 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <SearchBar activeCategory={activeCategory} />
        
        <TrustBadges />
        
        <Marquee />

        <WorldMap />

        <MittoDifference />

        <SuccessStories />

        <LeadForm />

        <AboutUs />
      </main>

      <footer className="py-16 text-center text-slate-400 text-sm border-t border-slate-100">
        <div className="container mx-auto px-6">
          <p className="font-semibold text-slate-500 mb-6 tracking-[0.3em] uppercase">MITTO GLOBAL</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="hover:text-[#1E3A8A] transition-all-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#1E3A8A] transition-all-300">Terms of Service</a>
            <a href="#" className="hover:text-[#1E3A8A] transition-all-300">Contact Us</a>
          </div>
          <p className="font-medium">© 2025 MITTO GLOBAL. Designed for the future of mobility.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
