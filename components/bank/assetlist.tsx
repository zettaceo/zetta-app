import { Asset } from "@/modules/wallet/wallet.types";
import AssetRow from "./AssetRow";

export default function AssetList({
  title,
  assets,
}: {
  title: string;
  assets: Asset[];
}) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
      <h3 className="text-sm font-semibold tracking-widest text-zinc-300 mb-4">
        {title}
      </h3>

      <div className="space-y-3">
        {assets.map((asset) => (
          <AssetRow key={asset.symbol} asset={asset} />
        ))}
      </div>
    </div>
  );
}