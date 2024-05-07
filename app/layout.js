import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/src/contexts/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notícias Oficina VW",
  description: "Criado pela Oficina Brasil",
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="pt">
        <body className={inter.className}>{children}</body>
      </html>
    </UserProvider>
  );
}