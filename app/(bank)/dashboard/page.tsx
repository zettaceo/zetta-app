import { BalanceCard, TransactionList } from "@/components/bank";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <BalanceCard />
      <TransactionList />
    </div>
  );
}
