import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Meus Estudos",
  description: "Organizador de estudos pessoal",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}