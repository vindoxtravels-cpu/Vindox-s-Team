
import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<'login' | 'signup'>('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with intensified blur matching Audit Modal */}
      <div className="absolute inset-0 bg-[#1E3A8A]/40 backdrop-blur-xl animate-[fade-in_0.3s_ease-out]" onClick={onClose}></div>
      
      {/* Modal Content - Compact max-w-md with tighter padding */}
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden animate-[zoom-in_0.3s_ease-out] transition-all duration-500">
        
        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#FF6B00] rounded-xl flex items-center justify-center mx-auto shadow-xl mb-4 rotate-3">
               <svg viewBox="0 0 100 100" className="w-7 h-7 fill-white">
                  <path d="M10 85V15L50 55L90 15V85H70V35L50 55L30 35V85H10Z" />
               </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1E3A8A] tracking-tight mb-1">
              {view === 'login' ? 'Welcome Back' : 'Join Mitto'}
            </h2>
            <p className="text-slate-500 text-xs font-semibold px-2">
              {view === 'login' 
                ? 'Login to track your visa in real-time.' 
                : 'Start your seamless mobility journey.'}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {view === 'signup' && (
              <div className="space-y-1.5 animate-[slide-up_0.3s_ease-out]">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 font-bold text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#1E3A8A]/5 transition-all text-sm"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Email Address</label>
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 font-bold text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#1E3A8A]/5 transition-all text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 font-bold text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#1E3A8A]/5 transition-all text-sm"
              />
            </div>

            <div className="flex items-center justify-between px-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-200 text-[#1E3A8A] focus:ring-[#1E3A8A]/20 transition-all" />
                <span className="text-[11px] text-slate-500 font-bold group-hover:text-slate-700 transition-colors">Remember me</span>
              </label>
              {view === 'login' && (
                <a href="#" className="text-[11px] font-black text-[#FF6B00] hover:text-[#e66000] transition-colors">Forgot?</a>
              )}
            </div>

            <button 
              className="w-full bg-[#1E3A8A] hover:bg-[#FF6B00] text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:shadow-orange-100 transition-all duration-500 transform active:scale-[0.98]"
            >
              {view === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
              {view === 'login' ? "New here?" : "Already member?"} 
              <button 
                onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                className="text-[#1E3A8A] font-black hover:underline ml-1.5 transition-all"
              >
                {view === 'login' ? 'Create Account' : 'Log In'}
              </button>
            </p>
          </div>

          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-300 hover:text-slate-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
      
      <style>{`
        @keyframes zoom-in {
          from { transform: scale(0.97); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoginModal;
