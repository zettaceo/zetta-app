"use client";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-white/5 bg-zinc-900/60 backdrop-blur-xl flex items-center justify-between px-6">
      <div>
        <p className="text-xs text-zinc-400">Total Balance</p>
        <p className="text-lg font-semibold text-white">
          $ 128,430.92
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30">
          Alerts
        </button>

        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold">
          Z
        </div>
      </div>
    </header>
  );
}