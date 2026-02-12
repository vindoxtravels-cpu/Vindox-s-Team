
import React, { useState, useEffect } from 'react';
import { VisaCategory } from '../types';
import { CATEGORY_CONTENT } from '../constants';

interface HeroProps {
  activeCategory: VisaCategory;
  onCategoryChange: (category: VisaCategory) => void;
}

const Hero: React.FC<HeroProps> = ({ activeCategory, onCategoryChange }) => {
  const [typedText, setTypedText] = useState('');
  const [animationKey, setAnimationKey] = useState(0);
  const fullText = "Fly.";
  const [isTyping, setIsTyping] = useState(true);

  // Trigger animation reset on category change
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [activeCategory]);

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

  const pathD = "M 10 75 Q 40 75 65 55 C 95 15 145 15 145 55 C 145 95 95 95 65 55 Q 140 15 190 35";

  return (
    <section className="pt-40 pb-10 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative overflow-visible">
      
      {/* Dynamic Centered Heading */}
      <h1 className="text-5xl lg:text-7xl font-bold text-[#1E3A8A] leading-tight mb-4 transition-all duration-500 relative z-10">
        Get Your{' '}
        <span className="text-[#FF6B00]">{activeCategory}</span>{' '}
        <span className="relative inline-block ml-1">
          <span className="relative z-10">Visa</span>
          
          {/* Refined Loop-de-loop Flight Animation */}
          <div key={animationKey} className="absolute inset-0 pointer-events-none -m-12 overflow-visible flex items-center justify-center">
            <svg 
              viewBox="0 0 200 100" 
              className="w-[280px] h-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              preserveAspectRatio="xMidYMid meet"
            >
              <path 
                d={pathD}
                fill="none" 
                stroke="#FF6B00" 
                strokeWidth="1.5" 
                strokeDasharray="5 5" 
                strokeLinecap="round"
                className="path-animation"
              />
              
              <g className="plane-animation">
                <path 
                  fill="#1E3A8A" 
                  d="M15 8.7L2 1l-.7.7 5.5 5.5-2.8 3.5-2.8-.8-.7.7L5 14l3.3 4.5.7-.7-.8-2.8 3.5-2.8 5.5 5.5.7-.7z"
                  transform="scale(1.2) rotate(45)"
                />
              </g>
            </svg>
          </div>
        </span>
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
      </div>

      {/* Category Switch Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-30">
        {Object.values(VisaCategory).map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-10 py-3 rounded-full font-bold transition-all duration-300 border-2 text-lg shadow-sm ${
              activeCategory === cat
                ? 'bg-[#FF6B00] border-[#FF6B00] text-white shadow-[#FF6B00]/30 shadow-lg scale-105'
                : 'bg-transparent border-[#1E3A8A] text-[#1E3A8A] hover:bg-blue-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="h-8 overflow-hidden mb-8">
        <p key={activeCategory} className="text-[#1E3A8A] text-xl font-medium animate-[slide-up_0.5s_ease-out]">
          {CATEGORY_CONTENT[activeCategory].tagline}
        </p>
      </div>

      <style>{`
        .path-animation {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw-path 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .plane-animation {
          offset-path: path("${pathD}");
          animation: follow-path 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          offset-rotate: auto 90deg;
          opacity: 0;
        }

        @keyframes draw-path {
          0% { stroke-dashoffset: 400; opacity: 0; }
          10% { opacity: 0.3; }
          85% { opacity: 0.3; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }

        @keyframes follow-path {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }

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