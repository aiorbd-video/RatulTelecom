import React from 'react';

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-[#0B0E14] p-6 flex flex-col items-center justify-center font-sans">
      
      {/* গ্লাসমরফিজম ওয়ালেট কার্ড (Glassmorphism Wallet Card) */}
      <div className="w-full max-w-md relative p-8 rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl overflow-hidden">
        
        {/* পেছনের নিয়ন গ্লোয়িং ইফেক্ট (Background Glowing Effects) */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00F0FF]/20 rounded-full blur-[40px] pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8A2BE2]/20 rounded-full blur-[40px] pointer-events-none"></div>

        {/* কার্ডের ভেতরের কন্টেন্ট (Card Content) */}
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
              Wallet Balance
            </h2>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <span className="text-white text-sm">👁️</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-[#00F0FF] tracking-tight mb-8 drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            ৳ 25,450.00
          </h1>
          
          {/* অ্যাকশন বাটন (Action Buttons) */}
          <div className="flex gap-4 mt-2">
            <button className="flex-1 bg-gradient-to-r from-[#00F0FF] to-[#0080FF] hover:from-[#33F3FF] hover:to-[#1A8CFF] text-black font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] active:scale-95">
              Add Money
            </button>
            <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95">
              Send Money
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
