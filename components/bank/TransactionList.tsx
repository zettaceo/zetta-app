const txs = [
  { id: 1, type: "PIX IN", amount: "+$5,000", status: "Completed" },
  { id: 2, type: "Swap BTC", amount: "-$2,300", status: "Completed" },
  { id: 3, type: "Card Payment", amount: "-$420", status: "Pending" },
];

export default function TransactionList() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
      <h2 className="text-lg font-semibold mb-4 tracking-wide">
        Recent Activity
      </h2>

      <div className="space-y-3">
        {txs.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900/60"
          >
            <p className="text-sm">{tx.type}</p>
            <p className="text-sm font-semibold">{tx.amount}</p>
            <p className="text-xs text-zinc-400">{tx.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}