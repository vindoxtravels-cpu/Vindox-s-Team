
import React from 'react';

const ADVANTAGES = [
  {
    title: "Real-time Tracking",
    description: "Verified visa status updates instantly pushed to your dashboard.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Transparent Pricing",
    description: "Flat fees with no hidden charges. What you see is exactly what you pay.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Certified Consultants",
    description: "Speak only to MARA and ICCRC registered experts, never sales agents.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-indigo-500 to-purple-400"
  },
  {
    title: "AI Eligibility Prediction",
    description: "Get accurate success probability scores before you even start.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-orange-500 to-yellow-400"
  },
  {
    title: "Zero Spam Policy",
    description: "We protect your data. No marketing calls, just pure assistance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "from-rose-500 to-pink-400"
  }
];

const CompetitiveAdvantage: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-sm mb-4">Why Mitto Global</h4>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why We’re <span className="text-[#FF6B00]">Different</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Traditional agencies rely on sales teams. We rely on transparency, technology, and certified expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <div 
              key={idx}
              className="glass p-8 rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 group border border-white/5"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${adv.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF6B00] transition-colors">
                {adv.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {adv.description}
              </p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] p-8 rounded-[2.5rem] flex flex-col justify-center border border-white/10 relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10 leading-tight">
              Ready to experience the future of mobility?
            </h3>
            <button className="flex items-center gap-2 text-[#FF6B00] font-bold text-lg hover:gap-4 transition-all duration-300 relative z-10">
              Get Started Now 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;