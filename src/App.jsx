import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const telegramLink = "https://t.me/+Od3Z-DkRQgo4NzA9";

  const handleJoinClick = () => {
    // Fire Subscribe Event
    if (window.fbq) {
      window.fbq('track', 'Subscribe', {
        content_name: 'FreelanceWave Onboarding',
        content_category: 'Administrative Support'
      });
    }

    // Delay for tracking
    setTimeout(() => {
      window.location.href = telegramLink;
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] flex justify-center items-center py-10 px-4 font-sans">
      <div className="w-full max-w-[400px] flex flex-col items-center">
        
        {/* Minimalist Professional Card */}
        <header className="w-full bg-white flex flex-col items-center rounded-[32px] shadow-sm border border-slate-100 p-10 text-center">
          
          {/* Circular Clean Logo */}
          <div className="w-28 h-28 mb-8 rounded-full border border-slate-100 shadow-sm overflow-hidden bg-slate-50">
            <img src="/logo.jpeg" alt="Portal" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
              Associate Onboarding <br/>
              <span className="text-[#0088cc]">FreelanceWave Portal</span>
            </h1>

            <p className="text-[12px] font-bold text-slate-400 tracking-widest uppercase">
              Digital Support Services
            </p>

            <div className="py-4 px-2 rounded-2xl bg-slate-50/50 border border-slate-100">
              <p className="text-[14px] font-semibold text-slate-600 leading-relaxed">
                Connect with our team to start your <br/>
                <span className="text-blue-600">Information Management tasks</span>
              </p>
            </div>
          </div>

          <motion.button 
            onClick={handleJoinClick}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 mt-10 bg-[#0088cc] text-white rounded-xl font-bold text-[16px] shadow-lg shadow-blue-100 transition-colors hover:bg-[#0077bb]"
          >
            Continue to Enrollment
          </motion.button>
          
          <p className="text-[10px] text-slate-400 mt-5 font-bold uppercase tracking-widest opacity-50">
            Verified Community Link
          </p>
        </header>

        {/* Essential Compliance Footer (Crucial for Ads) */}
        <footer className="mt-12 flex flex-col items-center gap-4 w-full">
          <div className="flex gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Contact</span>
          </div>
          
          <p className="text-[9px] text-slate-300 text-center leading-relaxed max-w-[280px]">
            © 2026 FreelanceWave. This site is not a part of the Meta website or Meta Platforms, Inc. 
            We follow standard digital recruitment and data privacy guidelines.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;