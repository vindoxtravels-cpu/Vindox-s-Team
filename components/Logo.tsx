
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-500">
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white">
          <path d="M10 85V15L50 55L90 15V85H70V35L50 55L30 35V85H10Z" />
        </svg>
      </div>
      <span className="font-bold text-xl tracking-tight text-[#1E3A8A] font-['Poppins']">
        MITTO <span className="text-[#FF6B00]">global</span>
      </span>
    </div>
  );
};

export default Logo;