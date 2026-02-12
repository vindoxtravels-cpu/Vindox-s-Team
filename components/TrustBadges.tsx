
import React from 'react';
import { TRUST_FEATURES } from '../constants';

const TrustBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 mb-40 relative z-10">
      {TRUST_FEATURES.map((feature, idx) => (
        <div 
          key={idx}
          className="glass p-8 rounded-[3rem] shadow-xl border border-slate-50 hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center gap-5"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#FF6B00]/10 transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1E3A8A] group-hover:text-[#FF6B00]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-[#1E3A8A] text-xl">
            {feature.text}
          </span>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Optimized processing ensuring a frictionless experience for all users.
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;