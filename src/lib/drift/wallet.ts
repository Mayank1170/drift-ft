import { Keypair } from '@solana/web3.js';
import type { Wallet } from '@solana/wallet-adapter-base';

export function createDummyWallet(): Wallet {
  const keypair = Keypair.generate();
  
  return {
    publicKey: keypair.publicKey,
    signTransaction: async (tx: { sign: (arg0: Keypair) => void; }) => {
      tx.sign(keypair);
      return tx;
    },
    signAllTransactions: async (txs: any[]) => {
      return txs.map(tx => {
        tx.sign(keypair);
        return tx;
      });
    },
  } as Wallet;
}
