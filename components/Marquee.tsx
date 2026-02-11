
import React from 'react';
import { TRUSTED_BRANDS } from '../constants';

const Marquee: React.FC = () => {
  // Triple the list to ensure smooth continuous loop
  const brands = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <div className="py-12 border-t border-slate-200 overflow-hidden">
      <h3 className="text-center text-slate-500 font-medium mb-10 tracking-wide uppercase text-sm">
        Trusted by Professionals Worldwide
      </h3>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-scroll whitespace-nowrap flex items-center">
          {brands.map((brand, idx) => (
            <div 
              key={`${brand}-${idx}`} 
              className="mx-12 text-3xl font-bold text-slate-300 hover:text-[#1E3A8A] cursor-default transition-all-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
