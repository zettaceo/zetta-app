import VaultBalance from "@/components/bank/VaultBalance";
import AssetList from "@/components/bank/AssetList";
import WalletHistory from "@/components/bank/WalletHistory";
import { assets } from "@/modules/wallet/wallet.mock";

export default function WalletPage() {
  const fiat = assets.filter(a => a.type === "fiat");
  const crypto = assets.filter(a => a.type === "crypto");

  return (
    <div className="space-y-6">
      <VaultBalance />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AssetList title="FIAT ASSETS" assets={fiat} />
        <AssetList title="CRYPTO ASSETS" assets={crypto} />
      </div>

      <WalletHistory />
    </div>
  );
}