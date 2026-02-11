
import React, { useState, useEffect } from 'react';
import { VisaCategory } from '../types';
import { CATEGORY_CONTENT } from '../constants';

interface HeroProps {
  activeCategory: VisaCategory;
  onCategoryChange: (category: VisaCategory) => void;
}

const Hero: React.FC<HeroProps> = ({ activeCategory, onCategoryChange }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Fly.";
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect for "Fly."
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isTyping) {
      if (typedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length - 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(true), 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedText, isTyping]);

  return (
    <section className="pt-40 pb-10 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Dynamic Centered Heading */}
      <h1 className="text-5xl lg:text-7xl font-bold text-[#1E3A8A] leading-tight mb-4 transition-all duration-500">
        Get Your <span className="text-[#FF6B00]">{activeCategory} Visa</span>
      </h1>
      
      <p className="text-xl text-slate-400 font-medium mb-12">
        at the blink of an eye!
      </p>

      {/* Animated Rolling Tagline */}
      <div className="flex flex-col gap-2 mb-10 h-16 items-center">
        <div className="text-2xl font-light text-slate-500 flex gap-x-3">
          <span className="animate-[fade-in_1s_ease-out]">Upload.</span>
          <span className="animate-[slide-up_1s_ease-out]">Relax.</span>
          <span className="text-[#FF6B00] font-bold border-r-2 border-[#FF6B00] pr-1">
            {typedText}
          </span>
        </div>
        <p className="text-lg text-slate-400 font-medium">
          Your visa is just a few clicks away.
        </p>
      </div>

      {/* Category Switch Buttons - Pill Shape */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.values(VisaCategory).map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-10 py-3 rounded-full font-bold transition-all-300 border-2 text-lg shadow-sm ${
              activeCategory === cat
                ? 'bg-[#FF6B00] border-[#FF6B00] text-white shadow-orange-200 shadow-lg scale-105'
                : 'bg-transparent border-[#1E3A8A] text-[#1E3A8A] hover:bg-blue-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Description Text */}
      <div className="h-8 overflow-hidden mb-8">
        <p key={activeCategory} className="text-[#1E3A8A] text-xl font-medium animate-[slide-up_0.5s_ease-out]">
          {CATEGORY_CONTENT[activeCategory].tagline}
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
