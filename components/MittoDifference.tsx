
import React from 'react';

const MittoDifference: React.FC = () => {
  const features = [
    {
      title: "Tailored Visa Solutions",
      items: [
        "End-to-end visa management",
        "Personalized immigration strategy",
        "Expert relocation documentation"
      ]
    },
    {
      title: "AI + Immigration Experts",
      items: [
        "Real-time case tracking",
        "AI profile evaluation",
        "Dedicated mobility & PR consultants"
      ]
    },
    {
      title: "Global Legal Network",
      items: [
        "Local immigration lawyers",
        "Experts in 12+ countries",
        "On-ground relocation assistance"
      ]
    },
    {
      title: "Total Compliance",
      items: [
        "Clear visa fee structure",
        "100% legal & PR compliance",
        "Secure digital document vault"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            What Makes <span className="text-[#FF6B00]">Mitto</span> Different
          </h2>
          <p className="text-blue-100 text-lg font-light">
            Global <span className="font-semibold text-white">Visa & Immigration</span>. Human-First. Tech-Driven.
          </p>
        </div>

        {/* Feature Grid - SEO Optimized & Punchy */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold mb-6 text-[#FF6B00]">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/30 flex items-center justify-center border border-blue-400/20">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs md:text-sm text-blue-100/90 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Conviction Block - Mirrored from Image with Keyword Enrichment */}
        <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16">
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
