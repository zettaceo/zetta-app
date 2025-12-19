"use client";

const nav = [
  "Dashboard",
  "Wallet",
  "PIX",
  "Swap",
  "Cards",
  "Security",
  "Identity",
  "Zion AI",
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900/80 backdrop-blur-xl border-r border-white/5 p-6 flex flex-col justify-between">
      <div>
        <div className="mb-10">
          <h1 className="text-xl font-bold tracking-widest text-blue-500">
            Z-BANCK
          </h1>
          <p className="text-xs text-zinc-400 tracking-wider">
            Hybrid Crypto Bank
          </p>
        </div>

        <nav className="space-y-3">
          {nav.map((item) => (
            <button
              key={item}
              className="w-full text-left px-4 py-3 rounded-xl
              text-zinc-300 hover:text-white
              hover:bg-white/5 transition
              tracking-wide"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-10 p-4 rounded-xl bg-white/5 border border-yellow-500/30">
        <p className="text-xs text-zinc-400">Account Status</p>
        <p className="text-sm font-semibold text-yellow-400 tracking-wide">
          ELITE VERIFIED
        </p>
      </div>
    </aside>
  );
}