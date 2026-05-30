import React from 'react';
import Link from 'next/link';

export default function RechargePage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white font-sans relative overflow-hidden pb-20">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-[60px] pointer-events-none"></div>
      
      {/* Top Header */}
      <div className="flex items-center px-6 pt-10 pb-6 border-b border-white/5 relative z-10">
        <Link href="/">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors active:scale-95 cursor-pointer">
            <span className="text-xl">←</span>
          </div>
        </Link>
        <h2 className="text-lg font-bold ml-4 tracking-wide">Recharge & Packages</h2>
      </div>

      {/* Number Input Section */}
      <div className="px-6 py-6 relative z-10">
        <div className="relative">
          <input 
            type="tel" 
            placeholder="01X XXXX XXXX" 
            className="w-full bg-white/[0.03] border border-white/20 rounded-2xl px-5 py-4 text-xl font-semibold text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
          />
          {/* Default Operator Icon Placeholder */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="text-xs">📱</span>
          </div>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="px-6 pb-4">
        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          <TabButton label="Amount" active />
          <TabButton label="Internet" />
          <TabButton label="Minutes" />
          <TabButton label="Bundles" />
        </div>
      </div>

      {/* Packages List (Internet Example) */}
      <div className="px-6 space-y-4 relative z-10">
        
        {/* Package Card 1 */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-between hover:border-[#00F0FF]/50 transition-colors">
          <div>
            <h3 className="text-3xl font-bold text-[#00F0FF] mb-1">50 GB</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="bg-white/10 px-2 py-0.5 rounded text-xs">30 Days</span>
              <span>• Regular Data</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xl font-bold mb-2">৳ 399</span>
            <button className="bg-gradient-to-r from-[#00F0FF] to-[#0080FF] text-black font-bold px-5 py-2 rounded-lg text-sm shadow-[0_0_15px_rgba(0,240,255,0.3)] active:scale-95 transition-transform">
              Buy Now
            </button>
          </div>
        </div>

        {/* Package Card 2 */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-between hover:border-[#8A2BE2]/50 transition-colors">
          <div>
            <h3 className="text-3xl font-bold text-[#8A2BE2] mb-1">20 GB</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="bg-white/10 px-2 py-0.5 rounded text-xs">7 Days</span>
              <span>• Max Speed</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xl font-bold mb-2">৳ 149</span>
            <button className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold px-5 py-2 rounded-lg text-sm active:scale-95 transition-all">
              Buy Now
            </button>
          </div>
        </div>

        {/* Package Card 3 (Combo) */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-between hover:border-[#00E676]/50 transition-colors">
          <div>
            <h3 className="text-2xl font-bold text-[#00E676] mb-1">10 GB + 200 Min</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="bg-white/10 px-2 py-0.5 rounded text-xs">30 Days</span>
              <span>• Best Value</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xl font-bold mb-2">৳ 298</span>
            <button className="bg-gradient-to-r from-[#00E676] to-green-600 text-black font-bold px-5 py-2 rounded-lg text-sm shadow-[0_0_15px_rgba(0,230,118,0.3)] active:scale-95 transition-transform">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Reusable Tab Button
function TabButton({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <div className={`px-6 py-2.5 rounded-full whitespace-nowrap cursor-pointer transition-all ${
      active 
      ? 'bg-[#00F0FF] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
      : 'bg-white/[0.05] border border-white/10 text-white hover:bg-white/10'
    }`}>
      {label}
    </div>
  );
}
