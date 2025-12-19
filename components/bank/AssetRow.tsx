import { Asset } from "@/modules/wallet/wallet.types";

export default function AssetRow({ asset }: { asset: Asset }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/70 hover:bg-zinc-900 transition">
      <div>
        <p className="font-semibold tracking-wide">{asset.symbol}</p>
        <p className="text-xs text-zinc-400">{asset.name}</p>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          {asset.balance.toLocaleString()}
        </p>
        <p className="text-xs text-zinc-400">
          ≈ ${asset.fiatValue.toLocaleString()}
        </p>
      </div>
    </div>
  );
}