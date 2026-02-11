
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        <button 
          onClick={() => window.location.hash = '/login'}
          className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg font-medium hover:bg-black hover:scale-105 transition-all-300 active:scale-95 text-sm tracking-wide"
        >
          LOG IN
        </button>
      </div>
    </header>
  );
};

export default Header;
