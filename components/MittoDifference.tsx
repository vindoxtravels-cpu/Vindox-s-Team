
import React from 'react';

const MittoDifference: React.FC = () => {
  const features = [
    {
      title: "Transparent Process",
      items: [
        "No hidden fees",
        "Clear timeline commitment",
        "Step-by-step case visibility"
      ]
    },
    {
      title: "Real Expert Support",
      items: [
        "MARA & ICCRC certified consultants",
        "No sales agents",
        "1:1 dedicated advisor"
      ]
    },
    {
      title: "Smart Technology",
      items: [
        "AI eligibility prediction",
        "Real-time case tracking",
        "Secure digital vault"
      ]
    },
    {
      title: "Verified Global Network",
      items: [
        "Local legal partners",
        "On-ground relocation support",
        "Multi-country expertise"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#1E3A8A]">
            What Makes <span className="text-[#FF6B00]">Mitto</span> Different
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Global <span className="font-semibold text-[#1E3A8A]">Visa & Immigration</span>. Human-First. Tech-Driven.
          </p>
        </div>

        {/* Feature Grid - SEO Optimized & Punchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <h3 className="text-lg md:text-xl font-bold mb-6 text-[#1E3A8A] group-hover:text-[#FF6B00] transition-colors">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100/50 flex items-center justify-center border border-blue-200 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-600 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Conviction Block - Mirrored from Image with Keyword Enrichment */}
        <div className="relative overflow-hidden bg-[#1E3A8A] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl shadow-blue-900/20">
          {/* Subtle Logo Watermark */}
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
            <svg width="180" height="180" viewBox="0 0 100 100" className="fill-white">
              <path d="M10 85V15L50 55L90 15V85H70V35L50 55L30 35V85H10Z" />
            </svg>
          </div>

          <h4 className="text-[#FF6B00] font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-12">
            OUR CONVICTION: GLOBAL MOBILITY & IMMIGRATION MADE SIMPLE
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="flex flex-col">
              <span className="text-5xl md:text-7xl font-bold mb-1">100%</span>
              <span className="text-blue-200 uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold">Transparent Visa Process</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl md:text-7xl font-bold mb-1">24/7</span>
              <span className="text-blue-200 uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold">Expert Immigration Support</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl md:text-7xl font-bold mb-1">12+</span>
              <span className="text-blue-200 uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold">Relocation Regions Covered</span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10">
            <p className="text-blue-50/90 text-base md:text-lg leading-relaxed max-w-4xl">
              <span className="text-white font-bold">Why choose us?</span> We combine cutting-edge tech with human expertise to deliver seamless <span className="text-white font-semibold">global relocation and immigration</span> services. No hidden fees, no complex paperwork — just clear, efficient <span className="text-white font-semibold">visa processing</span> from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MittoDifference;
