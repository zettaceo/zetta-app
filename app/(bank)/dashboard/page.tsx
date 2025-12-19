import BalanceCard from "@/components/bank/BalanceCard";
import TransactionList from "@/components/bank/TransactionList";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BalanceCard title="Fiat Balance" amount="$ 42,100.00" />
        <BalanceCard title="Crypto Balance" amount="$ 86,330.92" />
        <BalanceCard title="Daily Volume" amount="$ 1,920,450" highlight />
      </div>

      <TransactionList />
    </div>
  );
}