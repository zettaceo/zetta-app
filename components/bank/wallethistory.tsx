import { walletHistory } from "@/modules/wallet/wallet.mock";

export default function WalletHistory() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
      <h3 className="text-sm font-semibold tracking-widest mb-4">
        UNIFIED HISTORY
      </h3>

      <div className="space-y-3">
        {walletHistory.map((tx) => (
          <div
            key={tx.id}
            className="flex justify-between items-center p-4 rounded-xl bg-zinc-900/60"
          >
            <div>
              <p className="text-sm">{tx.label}</p>
              <p className="text-xs text-zinc-400">{tx.date}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold">{tx.amount}</p>
              <p className="text-xs text-zinc-400">{tx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}