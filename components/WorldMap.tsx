
import React from 'react';

interface MapMarker {
  id: string;
  name: string;
  flag: string;
  top: string;
  left: string;
  pulseDelay: string;
}

const MARKERS: MapMarker[] = [
  { id: 'ca', name: 'Canada', flag: '🇨🇦', top: '25%', left: '15%', pulseDelay: '0s' },
  { id: 'us', name: 'USA', flag: '🇺🇸', top: '35%', left: '18%', pulseDelay: '0.5s' },
  { id: 'uk', name: 'UK', flag: '🇬🇧', top: '22%', left: '46%', pulseDelay: '1s' },
  { id: 'fr', name: 'France', flag: '🇫🇷', top: '28%', left: '48%', pulseDelay: '1.5s' },
  { id: 'uae', name: 'UAE', flag: '🇦🇪', top: '45%', left: '60%', pulseDelay: '0.2s' },
  { id: 'in', name: 'India', flag: '🇮🇳', top: '48%', left: '68%', pulseDelay: '0s' }, // Primary
  { id: 'sg', name: 'Singapore', flag: '🇸🇬', top: '60%', left: '76%', pulseDelay: '0.8s' },
  { id: 'au', name: 'Australia', flag: '🇦🇺', top: '75%', left: '85%', pulseDelay: '1.2s' },
];

const WorldMap: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            A Global Network for <span className="text-[#FF6B00]">Seamless Mobility</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Supporting thousands of users across 50+ countries with localized AI intelligence and 24/7 assistance.
          </p>
        </div>

        <div className="relative aspect-[21/9] w-full max-w-5xl mx-auto rounded-[3rem] overflow-hidden bg-sky-50 shadow-2xl border border-slate-100">
          {/* Oceanic background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200 opacity-60"></div>
          
          {/* Dynamic soft light glow */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-white/40 blur-[120px] rounded-full"></div>

          {/* Realistic Vector World Map with Land Mass focus */}
          <div className="absolute inset-0 z-0 flex items-center justify-center p-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
              alt="Real World Map" 
              className="w-full h-full object-contain transition-all duration-1000"
              style={{ 
                /* Filter for professional solid navy/slate landmass appearance */
                filter: 'invert(15%) sepia(20%) saturate(1500%) hue-rotate(190deg) brightness(95%) contrast(100%)',
                opacity: 0.85
              }}
            />
          </div>

          {/* Modern Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none"></div>
          
          {/* Highlighted Country Markers */}
          {MARKERS.map((marker) => (
            <div 
              key={marker.id}
              className="absolute group z-20 cursor-pointer"
              style={{ top: marker.top, left: marker.left }}
            >
              {/* Pulsing Effect */}
              <div 
                className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${marker.id === 'in' ? 'bg-[#FF6B00]/40' : 'bg-[#1E3A8A]/30'}`}
                style={{ animationDelay: marker.pulseDelay, animationDuration: '3s' }}
              ></div>
              
              {/* Marker Dot */}
              <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-2xl transition-all duration-300 group-hover:scale-150 group-hover:rotate-12 ${marker.id === 'in' ? 'bg-[#FF6B00] scale-125' : 'bg-[#1E3A8A]'}`}></div>
              
              {/* Flag & Label Popover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 pointer-events-none z-50">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-white flex items-center gap-3 whitespace-nowrap">
                  <span className="text-xl leading-none filter drop-shadow-sm">{marker.flag}</span>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-0.5">Destination</span>
                    <span className="text-sm font-bold text-[#1E3A8A] tracking-tight">{marker.name}</span>
                  </div>
                </div>
                {/* Connector Triangle */}
                <div className="w-2.5 h-2.5 bg-white border-r border-b border-slate-100 rotate-45 mx-auto -mt-1.5"></div>
              </div>

              {/* Permanent Label for Primary Hub (India) */}
              {marker.id === 'in' && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap animate-float">
                  <span className="text-[9px] font-black text-[#FF6B00] bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-100 uppercase tracking-widest shadow-lg">MITTO HUB</span>
                </div>
              )}
            </div>
          ))}

          {/* Technological Data Transmission Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-50" preserveAspectRatio="none">
            <defs>
              <linearGradient id="transmissionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M180,140 Q400,100 680,195" fill="none" stroke="url(#transmissionGrad)" strokeWidth="2" strokeDasharray="8,12" className="animate-dash" />
            <path d="M460,100 Q550,150 680,195" fill="none" stroke="url(#transmissionGrad)" strokeWidth="2" strokeDasharray="8,12" className="animate-dash" style={{animationDelay: '1.5s'}} />
            <path d="M850,310 Q750,250 680,195" fill="none" stroke="url(#transmissionGrad)" strokeWidth="2" strokeDasharray="8,12" className="animate-dash" style={{animationDelay: '0.7s'}} />
          </svg>
        </div>
      </div>
      
      <style>{`
        .animate-dash {
          stroke-dashoffset: 200;
          animation: dash-transmission 12s linear infinite;
        }
        @keyframes dash-transmission {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default WorldMap;
