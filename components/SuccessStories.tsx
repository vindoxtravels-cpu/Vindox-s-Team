
import React from 'react';

const STORIES = [
  {
    tag: "Visa Success",
    type: "Individual",
    content: "Chennai to Canada in 6 weeks. Mitto's optimized resume and job tracking helped me land a role. Canada PR approved in record time.",
    name: "Vikram S.",
    transition: "Engineer → Permanent Resident",
    tagColor: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    tag: "Student Visa",
    type: "Individual",
    content: "Seamless study-to-work pathway. From university selection to Australia student visa, the immigration team handled everything.",
    name: "Rahul M.",
    transition: "Student → Professional",
    tagColor: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    tag: "Global Mobility",
    type: "Enterprise",
    content: "Deployed 20 staff to UAE with full immigration compliance. Transfers completed in record time with zero legal issues.",
    name: "TechCorp Solutions",
    transition: "Enterprise Client",
    tagColor: "bg-indigo-50 text-indigo-600 border-indigo-100"
  },
  {
    tag: "Skilled Worker",
    type: "Professional",
    content: "UK Skilled Worker Visa processed flawlessly. Complete support for immigration registration and NHS placement.",
    name: "Sarah K.",
    transition: "Healthcare Professional",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100"
  }
];

const SuccessStories: React.FC = () => {
  // Triple the items to create a seamless infinite scroll effect
  const displayStories = [...STORIES, ...STORIES, ...STORIES];

  return (
    <section className="py-24 bg-[#F0F9FF]/50 overflow-hidden group/section">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-4 tracking-tight">
            Trust the <span className="text-[#FF6B00]">Success Stories</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            Real results from real customers securing <span className="text-[#1E3A8A]">visas & global PR status</span>.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-4 px-6 hover:[animation-play-state:paused]">
          {displayStories.map((story, idx) => (
            <div 
              key={idx}
              className="inline-block w-[320px] md:w-[380px] bg-white rounded-[2.5rem] p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:border-[#FF6B00]/30 hover:scale-[1.02] group"
            >
              <div className="flex justify-between items-center mb-6">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-colors group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00] ${story.tagColor}`}>
                  {story.tag}
                </span>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-tighter">
                  {story.type}
                </span>
              </div>
              
              <blockquote className="mb-8 text-slate-700 leading-relaxed italic text-base md:text-lg whitespace-normal group-hover:text-black transition-colors">
                "{story.content}"
              </blockquote>
              
              <div className="flex flex-col border-t border-slate-50 pt-6">
                <span className="font-bold text-[#1E3A8A] text-lg group-hover:text-[#FF6B00] transition-colors">{story.name}</span>
                <span className="text-sm text-slate-400 font-medium">{story.transition}</span>
              </div>
              
              {/* Unique Interactive Decoration */}
              <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                 <svg width="40" height="40" viewBox="0 0 100 100" className="fill-[#1E3A8A]">
                   <path d="M10 85V15L50 55L90 15V85H70V35L50 55L30 35V85H10Z" />
                 </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* Mobile speed adjustment */
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
