
import React from 'react';
import { TRUST_FEATURES } from '../constants';

const TrustBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 mb-32">
      {TRUST_FEATURES.map((feature, idx) => (
        <div 
          key={idx}
          className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:-translate-y-2 hover:shadow-2xl transition-all-300 group flex flex-col items-center text-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-all-300 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-slate-800 tracking-tight text-lg">
            {feature.text}
          </span>
          <p className="text-slate-400 text-sm leading-relaxed">
            Optimized processing ensuring a frictionless experience for all users.
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
