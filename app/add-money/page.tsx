import React from 'react';
import Link from 'next/link';

export default function AddMoneyPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white font-sans relative overflow-hidden pb-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-10 w-64 h-64 bg-[#E2136E]/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-[#F7931E]/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Top Header */}
      <div className="flex items-center px-6 pt-10 pb-6 border-b border-white/5 relative z-10">
        <Link href="/">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors active:scale-95 cursor-pointer">
            <span className="text-xl">←</span>
          </div>
        </Link>
        <h2 className="text-lg font-bold ml-4 tracking-wide">Add Money</h2>
      </div>

      <div className="px-6 mt-6 relative z-10">
        <h3 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-widest">Select Payment Method</h3>
        
        {/* MFS Selection Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          
          {/* bKash Card */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-[#E2136E]/30 hover:border-[#E2136E] hover:bg-[#E2136E]/5 cursor-pointer transition-all group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E2136E] to-[#FF4D94] flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(226,19,110,0.3)] group-hover:scale-110 transition-transform">
              <span className="text-xl font-bold text-white">b</span>
            </div>
            <span className="text-xs font-semibold text-gray-300 group-hover:text-white">bKash</span>
          </div>

          {/* Nagad Card */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-[#F7931E]/30 hover:border-[#F7931E] hover:bg-[#F7931E]/5 cursor-pointer transition-all group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7931E] to-[#FFB75E] flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(247,147,30,0.3)] group-hover:scale-110 transition-transform">
              <span className="text-xl font-bold text-white">ন</span>
            </div>
            <span className="text-xs font-semibold text-gray-300 group-hover:text-white">Nagad</span>
          </div>

          {/* Rocket Card */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-[#8C158B]/30 hover:border-[#8C158B] hover:bg-[#8C158B]/5 cursor-pointer transition-all group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8C158B] to-[#B33BCF] flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(140,21,139,0.3)] group-hover:scale-110 transition-transform">
              <span className="text-xl font-bold text-white">R</span>
            </div>
            <span className="text-xs font-semibold text-gray-300 group-hover:text-white">Rocket</span>
          </div>

        </div>

        {/* Amount Section */}
        <h3 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-widest">Enter Amount</h3>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl mb-6 shadow-2xl">
          <div className="flex items-center justify-center border-b border-white/10 pb-4 mb-4">
            <span className="text-3xl text-gray-400 mr-2">৳</span>
            <input 
              type="number" 
              placeholder="0.00" 
              className="bg-transparent text-5xl font-bold text-white w-full max-w-[200px] text-center focus:outline-none placeholder-gray-600"
            />
          </div>
          
          {/* Quick Amount Pills */}
          <div className="flex justify-center gap-3">
            <AmountPill amount="50" />
            <AmountPill amount="100" />
            <AmountPill amount="500" />
            <AmountPill amount="1000" />
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-[#00F0FF]/10 border border-[#00F0FF]/20 rounded-xl p-4 flex items-start gap-3 mb-8">
          <span className="text-[#00F0FF] text-xl">💡</span>
          <p className="text-xs text-gray-300 leading-relaxed">
            No extra charge will be applied for adding money. Minimum add money amount is <strong className="text-white">৳10</strong>.
          </p>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gradient-to-r from-[#00F0FF] to-[#0080FF] text-black font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95 transition-all">
          Proceed to Pay
        </button>

      </div>
    </div>
  );
}

// Reusable Quick Amount Component
function AmountPill({ amount }: { amount: string }) {
  return (
    <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-semibold cursor-pointer active:scale-95 transition-all">
      ৳{amount}
    </div>
  );
}
