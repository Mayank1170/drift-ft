import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SolanaWalletProvider } from '@/providers/WalletProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Drift Protocol Dashboard',
  description: 'Manage your Drift subaccounts, positions, and orders',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SolanaWalletProvider>
          {children}
        </SolanaWalletProvider>
      </body>
    </html>
  );
}
