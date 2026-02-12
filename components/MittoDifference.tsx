
import React from 'react';

const MittoDifference: React.FC = () => {
  const features = [
    {
      title: "Tailored Visa Solutions",
      items: [
        "End-to-end visa management",
        "Personalized immigration strategy",
        "Expert relocation documentation"
      ],
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "AI + Immigration Experts",
      items: [
        "Real-time case tracking",
        "AI profile evaluation",
        "Dedicated mobility & PR consultants"
      ],
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Global Legal Network",
      items: [
        "Local immigration lawyers",
        "Experts in 12+ countries",
        "On-ground relocation assistance"
      ],
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      title: "Total Compliance",
      items: [
        "Clear visa fee structure",
        "100% legal & PR compliance",
        "Secure digital document vault"
      ],
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/40 to-transparent rounded-bl-full"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-tr-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#1E3A8A]">
            What Makes <span className="text-[#FF6B00]">Mitto</span> Different
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
            Global <span className="font-bold text-[#1E3A8A]">Visa & Immigration</span>. Human-First. Tech-Driven.
          </p>
        </div>

        {/* Feature Grid - Clean & Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                 <svg className={`w-7 h-7 ${feature.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-[#1E3A8A]">
                {feature.title}
              </h3>
              
              <ul className="space-y-4">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></div>
                    <span className="text-sm text-slate-500 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Conviction Block - Light Version */}
        <div className="relative overflow-hidden bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 text-center md:text-left shadow-sm">
          {/* Subtle Logo Watermark */}
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden md:block pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 100 100" className="fill-[#1E3A8A]">
              <path d="M10 85V15L50 55L90 15V85H70V35L50 55L30 35V85H10Z" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-xl">
                 <h4 className="text-[#FF6B00] font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-6">
                    OUR PROMISE
                 </h4>
                 <h3 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-6 leading-tight">
                    Global Mobility & Immigration Made Simple.
                 </h3>
                 <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                   We combine cutting-edge tech with human expertise. No hidden fees, no complex paperwork — just clear, efficient <span className="font-bold text-[#1E3A8A]">visa processing</span> from start to finish.
                 </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 shrink-0">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-5xl md:text-6xl font-black text-[#1E3A8A] mb-2">100%</span>
                    <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Transparency</span>
                </div>
                <div className="w-px h-16 bg-slate-200 hidden sm:block"></div>
                 <div className="flex flex-col items-center md:items-start">
                    <span className="text-5xl md:text-6xl font-black text-[#1E3A8A] mb-2">24/7</span>
                    <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Support</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MittoDifference;
