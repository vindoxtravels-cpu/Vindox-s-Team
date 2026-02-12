
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
  { id: 'in', name: 'India', flag: '🇮🇳', top: '48%', left: '68%', pulseDelay: '0s' },
  { id: 'sg', name: 'Singapore', flag: '🇸🇬', top: '60%', left: '76%', pulseDelay: '0.8s' },
  { id: 'au', name: 'Australia', flag: '🇦🇺', top: '75%', left: '85%', pulseDelay: '1.2s' },
];

const WorldMap: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
            A Global Network for <span className="text-[#FF6B00]">Seamless Mobility</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Supporting thousands of users across 50+ countries with localized AI intelligence.
          </p>
        </div>

        <div className="relative aspect-[21/9] w-full max-w-5xl mx-auto rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
          <div className="absolute inset-0 z-0 flex items-center justify-center p-12">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
              alt="World Map" 
              className="w-full h-full object-contain opacity-20 grayscale"
            />
          </div>

          {MARKERS.map((marker) => (
            <div 
              key={marker.id}
              className="absolute group z-20 cursor-pointer"
              style={{ top: marker.top, left: marker.left }}
            >
              <div 
                className={`absolute -inset-4 rounded-full animate-ping opacity-40 ${marker.id === 'in' ? 'bg-[#FF6B00]/60' : 'bg-blue-400/40'}`}
                style={{ animationDelay: marker.pulseDelay }}
              ></div>
              <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg ${marker.id === 'in' ? 'bg-[#FF6B00] scale-125' : 'bg-[#1E3A8A]'}`}></div>
              
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-white px-3 py-1.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2 whitespace-nowrap">
                  <span>{marker.flag}</span>
                  <span className="text-xs font-bold text-[#1E3A8A]">{marker.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;