import { Asset, WalletTransaction } from "./wallet.types";

export const assets: Asset[] = [
  { symbol: "BRL", name: "Brazilian Real", balance: 182000, fiatValue: 182000, type: "fiat" },
  { symbol: "USD", name: "US Dollar", balance: 21400, fiatValue: 21400, type: "fiat" },
  { symbol: "BTC", name: "Bitcoin", balance: 1.42, fiatValue: 62100, type: "crypto" },
  { symbol: "ETH", name: "Ethereum", balance: 18.9, fiatValue: 35700, type: "crypto" },
  { symbol: "ZETTA", name: "ZETTA Token", balance: 520000, fiatValue: 12800, type: "crypto" },
];

export const walletHistory: WalletTransaction[] = [
  { id: 1, label: "PIX IN", amount: "+ R$ 50,000", date: "Today", status: "Completed" },
  { id: 2, label: "Swap BTC → USDT", amount: "- $12,400", date: "Yesterday", status: "Completed" },
  { id: 3, label: "Card Payment", amount: "- $1,200", date: "Pending", status: "Pending" },
];