
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 px-6 border-t border-white/5 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <Logo />
            <p className="max-w-xs text-sm font-medium leading-relaxed">
              Redefining global mobility with AI-driven intelligence and certified immigration expertise. Experience borders without barriers.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-all duration-300">
                  <span className="text-[10px] font-black uppercase tracking-tighter">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Tourist Visa</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Work Permits</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Student Pathway</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">PR & Relocation</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Global Partners</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold uppercase tracking-[0.2em]">
          <p>© 2025 MITTO GLOBAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span>SECURE WITH SSL 256-BIT</span>
            <span>POWERED BY AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;