import { Connection, PublicKey } from '@solana/web3.js';
import { DriftClient, UserAccount } from '@drift-labs/sdk';
import { type IWallet } from '@drift-labs/sdk';

export async function initializeDriftClient(
  connection: Connection,
  wallet: IWallet
): Promise<DriftClient> {
  const driftClient = new DriftClient({
    connection,
    wallet,
    env: 'devnet',
    programID: new PublicKey('dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH'),
    accountSubscription: {
      type: 'websocket',
      resubTimeoutMs: 30_000,
    },
  });

  await driftClient.subscribe();
  return driftClient;
}

export async function getUserSubaccounts(
  driftClient: DriftClient,
  authority: PublicKey
): Promise<UserAccount[]> {
  return driftClient.getUserAccountsForAuthority(authority);
}
