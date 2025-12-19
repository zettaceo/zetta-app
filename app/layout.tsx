import "./globals.css";

export const metadata = {
  title: "Z-BANCK | ZETTA",
  description: "Banco híbrido crypto/fiat do ecossistema ZETTA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
