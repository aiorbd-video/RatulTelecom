import React from 'react';

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white font-sans pb-28 relative overflow-hidden">
      
      {/* Top Profile Bar */}
      <div className="flex justify-between items-center px-6 pt-8 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#8A2BE2] to-[#00F0FF] p-[2px] shadow-[0_0_10px_rgba(138,43,226,0.5)]">
            <div className="w-full h-full bg-[#0B0E14] rounded-full flex items-center justify-center">
              <span className="font-bold text-sm text-white">RH</span>
            </div>
          </div>
          <div>
            <h3 className="text-xs text-gray-400 uppercase tracking-wider">Welcome back,</h3>
            <h2 className="text-lg font-bold text-white/90 tracking-wide">Ratul Hasan</h2>
          </div>
        </div>
        <div className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <span className="text-lg">🔔</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#00F0FF] rounded-full shadow-[0_0_8px_#00F0FF]"></span>
        </div>
      </div>

      {/* Main Glassmorphism Wallet Card */}
      <div className="px-6 py-2 flex justify-center">
        <div className="w-full max-w-md relative p-7 rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00F0FF]/20 rounded-full blur-[40px] pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8A2BE2]/20 rounded-full blur-[40px] pointer-events-none"></div>

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
            
            <div className="flex gap-4 mt-2">
              <button className="flex-1 bg-gradient-to-r from-[#00F0FF] to-[#0080FF] hover:from-[#33F3FF] hover:to-[#1A8CFF] text-black font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] active:scale-95">
                Add Money
              </button>
              <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95">
                Transfer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Services Grid */}
      <div className="px-6 py-6 mt-2">
        <h3 className="text-sm font-semibold mb-5 text-gray-300 uppercase tracking-widest">Quick Services</h3>
        <div className="grid grid-cols-4 gap-4">
          
          <ServiceItem icon="📱" label="Recharge" />
          <ServiceItem icon="🌐" label="Internet" />
          <ServiceItem icon="💸" label="MFS Transfer" />
          <ServiceItem icon="📜" label="History" />
          <ServiceItem icon="🎁" label="Offers" />
          <ServiceItem icon="👑" label="VIP" />
          <ServiceItem icon="📞" label="Support" />
          <ServiceItem icon="⚙️" label="More" />

        </div>
      </div>

      {/* Floating Bottom Navigation Bar */}
      <div className="fixed bottom-6 left-6 right-6">
        <div className="bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-3xl p-2 px-6 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <NavItem icon="🏠" label="Home" active />
          <NavItem icon="📊" label="History" />
          
          {/* Center Scan FAB */}
          <div className="relative -top-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#00F0FF] to-[#0080FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer hover:scale-105 transition-transform border-4 border-[#0B0E14]">
              <span className="text-2xl">📷</span>
            </div>
          </div>

          <NavItem icon="💬" label="Support" />
          <NavItem icon="👤" label="Profile" />
        </div>
      </div>

    </div>
  );
}

// Reusable Service Icon Component
function ServiceItem({ icon, label }: { icon: string, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-2xl group-hover:bg-white/10 transition-colors group-active:scale-95">
        {icon}
      </div>
      <span className="text-[11px] text-gray-400 group-hover:text-[#00F0FF] transition-colors">{label}</span>
    </div>
  );
}

// Reusable Bottom Nav Icon Component
function NavItem({ icon, label, active = false }: { icon: string, label: string, active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer p-2">
      <span className={`text-xl ${active ? 'drop-shadow-[0_0_8px_#00F0FF]' : 'opacity-60'}`}>
        {icon}
      </span>
      <span className={`text-[10px] ${active ? 'text-[#00F0FF] font-semibold' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
}
