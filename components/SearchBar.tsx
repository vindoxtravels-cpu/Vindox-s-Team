
import React, { useState, useEffect, useRef } from 'react';
import { VisaCategory } from '../types';
import { CATEGORY_CONTENT, ORIGIN_COUNTRIES, DESTINATIONS_BY_CATEGORY } from '../constants';

interface SearchBarProps {
  activeCategory: VisaCategory;
}

const SearchBar: React.FC<SearchBarProps> = ({ activeCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredDestinations = DESTINATIONS_BY_CATEGORY[activeCategory].filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setSearchTerm('');
    setIsDropdownOpen(false);
  }, [activeCategory]);

  const handleSelectCountry = (country: string) => {
    setSearchTerm(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 mb-32 relative z-50">
      <div className="glass-premium p-2 rounded-full shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center transition-all duration-500">
        {/* Origin */}
        <div className="flex-1 w-full relative px-8 py-5 flex flex-col items-start md:border-r border-slate-100 group">
          <label className="text-[10px] font-black text-[#1E3A8A] uppercase tracking-[0.3em] mb-1">Origin</label>
          <div className="w-full relative">
            <select className="bg-transparent border-none outline-none font-bold text-slate-800 cursor-pointer w-full appearance-none pr-6 text-lg">
              {ORIGIN_COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Destination */}
        <div className="flex-[2] w-full px-10 py-5 flex flex-col items-start relative" ref={dropdownRef}>
          <label className="text-[10px] font-black text-[#1E3A8A] uppercase tracking-[0.3em] mb-1">Destination</label>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsDropdownOpen(true);
            }}
            onFocus={() => setIsDropdownOpen(true)}
            placeholder={CATEGORY_CONTENT[activeCategory].placeholder}
            className="w-full bg-transparent border-none outline-none text-slate-800 font-bold text-lg placeholder:text-slate-300"
          />

          {/* Autocomplete Dropdown */}
          {isDropdownOpen && filteredDestinations.length > 0 && (
            <div className="absolute top-[110%] left-0 right-0 mt-2 bg-white border border-slate-100 rounded-3xl shadow-2xl z-50 overflow-hidden animate-[slide-up_0.3s_ease-out]">
              <div className="max-h-60 overflow-y-auto custom-scrollbar">
                {filteredDestinations.map((country) => (
                  <button
                    key={country}
                    onClick={() => handleSelectCountry(country)}
                    className="w-full text-left px-8 py-4 hover:bg-slate-50 transition-colors flex items-center justify-between group"
                  >
                    <span className="font-bold text-slate-700">{country}</span>
                    <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Select</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button className="bg-[#1E3A8A] w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-black transition-all duration-500 m-1 flex-shrink-0 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(15px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
