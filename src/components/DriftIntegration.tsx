'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import { initializeDriftClient, getUserSubaccounts } from '@/lib/drift/client';
import { createDummyWallet } from '@/lib/drift/wallet';

export default function DriftIntegration() {
  const { publicKey, connected } = useWallet();
  const [subaccounts, setSubaccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      
      try {
        const connection = new Connection('https://api.mainnet-beta.solana.com');
        const wallet = connected && publicKey 
          ? { publicKey } as any
          : createDummyWallet();

        const driftClient = await initializeDriftClient(connection, wallet);
        
        const authority = wallet.publicKey;
        const accounts = await getUserSubaccounts(driftClient, authority);
        
        setSubaccounts(accounts);
      } catch (error) {
        console.error('Error initializing Drift:', error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [connected, publicKey]);

  if (loading) return <div>Loading Drift data...</div>;

  return (
    <div>
      <h2>Subaccounts ({subaccounts.length})</h2>
      {subaccounts.map((account, index) => (
        <div key={index}>
          Subaccount ID: {account.subAccountId}
        </div>
      ))}
    </div>
  );
}
