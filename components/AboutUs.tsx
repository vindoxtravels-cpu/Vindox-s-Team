
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-12 tracking-tight">
          About Us
        </h2>
        
        <div className="space-y-10 text-slate-600 text-lg leading-relaxed">
          <p className="text-[#FF6B00] font-bold text-xl md:text-3xl italic leading-tight max-w-3xl">
            Our 99.3% approval rate isn't an accident—it's the result of being the only agency that cares more about your visa than your deposit.
          </p>

          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-[#1E3A8A] text-lg">We don't accept every file.</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-[#1E3A8A] text-lg">No "surprise" fees later.</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-[#1E3A8A] text-lg">No chatbots or ghosting.</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-[#1E3A8A] text-lg">24/7 visibility.</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-500 max-w-2xl font-medium">
            Moving across borders shouldn't feel like a gamble. It should feel like progress. No jargon, no spam, just the truth.
          </p>
        </div>
        
        <div className="mt-16 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#FF6B00] flex items-center justify-center text-white font-bold shadow-lg">M</div>
          <div>
            <p className="text-[#1E3A8A] font-bold text-lg leading-none">The Mitto Team</p>
            <p className="text-slate-400 text-sm mt-1">Founded on Transparency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
