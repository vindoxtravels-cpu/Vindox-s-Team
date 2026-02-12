
import React, { useState, useEffect } from 'react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 'success'>(1);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [visaType, setVisaType] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const today = new Date().toDateString();
    setSelectedDate(today);
  }, []);

  if (!isOpen) return null;

  const dates = [
    { label: 'Today', value: new Date().toDateString() },
    { label: 'Tomorrow', value: new Date(Date.now() + 86400000).toDateString() },
    { label: 'Day After Tomorrow', value: new Date(Date.now() + 172800000).toDateString() },
  ];

  const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const hours = Math.floor(i / 2).toString().padStart(2, '0');
    const minutes = (i % 2 === 0 ? '00' : '30');
    return `${hours}:${minutes}`;
  });

  const handleConfirm = () => {
    if (selectedDate && selectedTime && visaType) {
      setStep('success');
    } else {
      alert('Please complete all fields.');
    }
  };

  const resetModal = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with intensified blur */}
      <div className="absolute inset-0 bg-[#1E3A8A]/40 backdrop-blur-xl animate-[fade-in_0.3s_ease-out]" onClick={resetModal}></div>
      
      {/* Modal Content - Compact max-w-sm or md depending on state */}
      <div className={`relative w-full ${step === 'success' ? 'max-w-[320px]' : 'max-w-md'} bg-white/95 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden animate-[zoom-in_0.3s_ease-out] transition-all duration-500`}>
        
        {step !== 'success' ? (
          <div className="p-6 md:p-8">
            {/* Tighter Progress Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1 items-center">
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s} 
                    className={`h-1 rounded-full transition-all duration-500 ${step >= s ? 'w-6 bg-[#FF6B00]' : 'w-3 bg-slate-200'}`}
                  />
                ))}
                <span className="ml-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Step {step}/3</span>
              </div>
              <button onClick={resetModal} className="text-slate-400 hover:text-slate-600 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="transition-all duration-300 transform">
              {/* Step 1: Select Date */}
              {step === 1 && (
                <div className="space-y-6 animate-[slide-left_0.3s_ease-out]">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1E3A8A] tracking-tight">Select a Day</h2>
                    <p className="text-slate-500 text-sm font-medium">Quick 30-min audit call.</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {dates.map((date) => (
                      <button
                        key={date.value}
                        onClick={() => {
                          setSelectedDate(date.value);
                          setStep(2);
                        }}
                        className="group flex items-center justify-between px-6 py-4 rounded-2xl bg-white border border-slate-100 hover:border-[#1E3A8A] hover:shadow-lg transition-all duration-300"
                      >
                        <span className="text-base font-bold text-slate-700 group-hover:text-[#1E3A8A]">{date.label}</span>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#1E3A8A] transition-colors">
                          <svg className="w-4 h-4 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Time */}
              {step === 2 && (
                <div className="space-y-6 animate-[slide-left_0.3s_ease-out]">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setStep(1)} className="text-[#1E3A8A] font-bold text-xs hover:underline flex items-center gap-1 shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <h2 className="text-2xl font-bold text-[#1E3A8A] tracking-tight">Pick a Time</h2>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 max-h-[240px] overflow-y-auto p-1 custom-scrollbar">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => {
                          setSelectedTime(time);
                          setStep(3);
                        }}
                        className={`py-2.5 rounded-xl text-[11px] font-bold transition-all duration-300 border ${
                          selectedTime === time
                            ? 'bg-[#FF6B00] border-[#FF6B00] text-white shadow-md'
                            : 'bg-slate-50 border-slate-100 text-slate-500 hover:bg-white hover:border-[#1E3A8A]/30'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center italic">{timezone}</p>
                </div>
              )}

              {/* Step 3: Requirements */}
              {step === 3 && (
                <div className="space-y-6 animate-[slide-left_0.3s_ease-out]">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setStep(2)} className="text-[#1E3A8A] font-bold text-xs hover:underline flex items-center gap-1 shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <h2 className="text-2xl font-bold text-[#1E3A8A] tracking-tight">Final Details</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Visa Type</label>
                      <select 
                        value={visaType}
                        onChange={(e) => setVisaType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 font-bold text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#1E3A8A]/5 appearance-none cursor-pointer text-sm"
                      >
                        <option value="" disabled>Choose category...</option>
                        <option value="Tourist Visa">Tourist Visa</option>
                        <option value="Work Visa">Work Visa</option>
                        <option value="Study Visa">Study Visa</option>
                        <option value="PR Visa">PR Visa</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Requirements</label>
                      <textarea 
                        placeholder="Describe your goal..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#1E3A8A]/5 min-h-[90px] resize-none text-sm"
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    onClick={handleConfirm}
                    className="w-full bg-[#FF6B00] hover:bg-[#e66000] text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-100 transition-all duration-500 transform active:scale-[0.98]"
                  >
                    Confirm
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Ultra-compact Success State */
          <div className="p-8 text-center space-y-4 animate-[fade-in_0.5s_ease-out]">
            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100">
              <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1E3A8A] tracking-tight">Audit Scheduled!</h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Our expert will contact you shortly.
              </p>
            </div>
            <button 
              onClick={resetModal}
              className="mt-2 px-8 py-3 bg-[#1E3A8A] text-white rounded-xl font-bold transition-all duration-300 w-full shadow-lg shadow-blue-100 hover:bg-black"
            >
              Done
            </button>
          </div>
        )}
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
        @keyframes slide-left {
          from { transform: translateX(10px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F8FAFC;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default AuditModal;
