
import React from 'react';
import Logo from './Logo';

interface LeadFormProps {
  onAuditClick: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onAuditClick }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <div className="relative">
            {/* Step Badge */}
            <div className="w-12 h-12 bg-[#D1E9FF] rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-white/20"></div>
               <span className="text-[#1E3A8A] font-black text-lg">01</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] leading-tight mb-6">
              Consult Our <span className="text-[#FF6B00]">Visa Auditors</span>
            </h2>
            
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-md font-medium">
              Talk to MARA & ICCRC certified consultants instead of pushy salesmen, with a guaranteed <span className="text-[#1E3A8A] font-bold">no-spam policy</span>.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-sm">
            {/* Primary Action Button */}
            <button 
              onClick={onAuditClick}
              className="bg-[#0070E0] hover:bg-[#005bb8] text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-between transition-all duration-300 shadow-lg shadow-blue-100 group"
            >
              <span>Start My Profile Audit</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Feature Card */}
        <div className="flex-1 w-full max-w-md">
           <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(30,58,138,0.1)] border border-slate-100 space-y-8 relative group hover:shadow-2xl transition-all duration-500">
              
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-all duration-500">
                <Logo />
              </div>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 flex items-center justify-center text-blue-500 bg-blue-50 rounded-full">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-slate-700 font-bold text-lg tracking-tight">30-Min consultation</span>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 flex items-center justify-center text-emerald-500 bg-emerald-50 rounded-full">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-700 font-bold text-lg tracking-tight">Zero Cost</span>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 flex items-center justify-center text-orange-500 bg-orange-50 rounded-full">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-slate-700 font-bold text-lg tracking-tight">Zero Spam</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default LeadForm;
