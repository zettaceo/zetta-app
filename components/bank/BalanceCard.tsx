export default function BalanceCard({
  title,
  amount,
  highlight,
}: {
  title: string;
  amount: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-2xl border backdrop-blur-xl
      ${highlight
        ? "bg-gradient-to-br from-blue-500/20 to-blue-900/20 border-blue-500/30"
        : "bg-white/5 border-white/5"}`}
    >
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="text-2xl font-bold tracking-wide mt-2">
        {amount}
      </p>
    </div>
  );
}