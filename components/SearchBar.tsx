
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset search term when category changes
  useEffect(() => {
    setSearchTerm('');
    setIsDropdownOpen(false);
  }, [activeCategory]);

  const handleSelectCountry = (country: string) => {
    setSearchTerm(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 mb-32 relative z-10">
      <div className="bg-white p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row items-center transition-all-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]">
        {/* Location Dropdown (Origin) */}
        <div className="flex-1 w-full relative px-8 py-4 flex flex-col items-start md:border-r border-slate-100 group">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-[#1E3A8A] transition-colors">Origin</label>
          <div className="w-full relative">
            <select className="bg-transparent border-none outline-none font-semibold text-slate-800 cursor-pointer w-full appearance-none pr-6">
              {ORIGIN_COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Dynamic Destination Search Input with Autocomplete */}
        <div className="flex-[2] w-full px-10 py-4 flex flex-col items-start relative" ref={dropdownRef}>
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Destination</label>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsDropdownOpen(true);
            }}
            onFocus={() => setIsDropdownOpen(true)}
            placeholder={CATEGORY_CONTENT[activeCategory].placeholder}
            className="w-full bg-transparent border-none outline-none text-slate-800 font-semibold placeholder:text-slate-300 transition-all duration-300"
          />

          {/* Autocomplete Dropdown */}
          {isDropdownOpen && filteredDestinations.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-4 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 overflow-hidden animate-[slide-up_0.3s_ease-out]">
              <div className="max-h-60 overflow-y-auto">
                {filteredDestinations.map((country) => (
                  <button
                    key={country}
                    onClick={() => handleSelectCountry(country)}
                    className="w-full text-left px-8 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between group"
                  >
                    <span className="font-medium text-slate-700 group-hover:text-[#1E3A8A] transition-colors">{country}</span>
                    <span className="text-[10px] text-slate-300 group-hover:text-[#1E3A8A]/50 transition-colors uppercase font-bold tracking-tighter">Select</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Circular Search Button */}
        <button className="bg-[#FF6B00] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-xl shadow-orange-200 hover:bg-[#e66000] hover:scale-110 active:scale-95 transition-all duration-300 m-1 flex-shrink-0 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transform group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
