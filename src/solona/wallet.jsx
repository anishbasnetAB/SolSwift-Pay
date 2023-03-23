import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { clusterApiUrl } from '@solana/web3.js';
import React, { useMemo } from 'react';


import '@solana/wallet-adapter-react-ui/styles.css';
import { GlowWalletAdapter, LedgerWalletAdapter, SolletExtensionWalletAdapter, SolletWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';

function ConectWallet() {
  return (
    <Context>
      <ConnectPhantom />
    </Context>
  );
}

function Context({ children }) {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter(), new LedgerWalletAdapter(), new GlowWalletAdapter(), new SolletExtensionWalletAdapter(), new SolletWalletAdapter(), new TorusWalletAdapter()], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

function ConnectPhantom() {
  return (
    <div className="App">
      <WalletMultiButton />
    </div>
  );
}

export default ConectWallet;
