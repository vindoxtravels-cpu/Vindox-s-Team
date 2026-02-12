
import React from 'react';
import { TRUSTED_BRANDS } from '../constants';

const Marquee: React.FC = () => {
  const brands = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <div className="py-20 border-t border-slate-100 overflow-hidden bg-white">
      <h3 className="text-center text-slate-300 font-bold mb-12 tracking-[0.4em] uppercase text-[10px]">
        Trusted by Professionals Worldwide
      </h3>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-scroll whitespace-nowrap flex items-center">
          {brands.map((brand, idx) => (
            <div 
              key={`${brand}-${idx}`} 
              className="mx-16 text-3xl md:text-4xl font-black text-slate-100 hover:text-slate-400 transition-all duration-500 cursor-default"
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