
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#FF6B00] rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-all-300">
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white">
          <path d="M10 85V15L50 55L90 15V85H70V35L50 55L30 35V85H10Z" />
        </svg>
      </div>
      <span className="font-bold text-xl tracking-tight text-[#1E3A8A] font-['Poppins']">
        MITTO global
      </span>
    </div>
  );
};

export default Logo;
