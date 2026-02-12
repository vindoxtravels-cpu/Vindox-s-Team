
import React from 'react';
import { EXPANSION_COUNTRIES } from '../constants';

const ExpansionBlock: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#020617] relative overflow-hidden">
      {/* Decorative gradient beam */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1E3A8A_0%,transparent_50%)] opacity-30"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Your Global <br />
            <span className="text-[#FF6B00]">Mobility Partner</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
            We are rapidly expanding our infrastructure to provide localized immigration support in every major global hub.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">25+</span>
              <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">Countries Soon</span>
            </div>
            <div className="w-px h-12 bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">99%</span>
              <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">Data Accuracy</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {EXPANSION_COUNTRIES.map((country, idx) => (
            <div 
              key={idx}
              className="glass p-4 rounded-2xl flex items-center gap-3 border border-white/5 hover:border-[#FF6B00]/30 hover:bg-white/5 transition-all duration-300 group cursor-default"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{country.flag}</span>
              <span className="text-white font-semibold text-sm tracking-tight">{country.name}</span>
            </div>
          ))}
          <div className="glass p-4 rounded-2xl flex items-center justify-center border border-dashed border-slate-700 bg-slate-900/50">
            <span className="text-slate-500 font-bold text-sm">+ many more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpansionBlock;