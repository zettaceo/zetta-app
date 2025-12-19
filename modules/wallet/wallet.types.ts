export type Asset = {
  symbol: string;
  name: string;
  balance: number;
  fiatValue: number;
  type: "fiat" | "crypto";
};

export type WalletTransaction = {
  id: number;
  label: string;
  amount: string;
  date: string;
  status: "Completed" | "Pending";
};