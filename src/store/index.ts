import { create } from 'zustand';
import { Connection, PublicKey } from '@solana/web3.js';
import { initializeDriftClient, getUserSubaccounts } from '@/lib/drift/client';
import { UserAccount } from '@drift-labs/sdk';

interface Subaccount {
  id: number;
  collateral: string;
  positions: number;
  orders: number;
}

interface DriftStore {
  subaccounts: Subaccount[];
  loading: boolean;
  error: string | null;
  fetchSubaccounts: (authority: PublicKey) => Promise<void>;
}

export const useDriftStore = create<DriftStore>((set) => ({
  subaccounts: [],
  loading: false,
  error: null,
  
  fetchSubaccounts: async (authority) => {
    set({ loading: true, error: null });
    try {
      const connection = new Connection('https://api.mainnet-beta.solana.com');
      const driftClient = await initializeDriftClient(connection, { publicKey: authority } as any);
      
      const accounts = await getUserSubaccounts(driftClient, authority);
      
      const transformed = accounts.map(account => ({
        id: account.subAccountId,
        collateral: `$${account.spotPositions[0]?.scaledBalance.toNumber() || 0} USDC`,
        positions: account.perpPositions.length,
        orders: account.orders.length
      }));
      
      set({ subaccounts: transformed });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch subaccounts' });
    } finally {
      set({ loading: false });
    }
  }
}));
