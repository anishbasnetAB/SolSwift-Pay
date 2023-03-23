import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import React, { useState, useMemo } from 'react';

import '@solana/wallet-adapter-react-ui/styles.css';
import { GlowWalletAdapter, LedgerWalletAdapter, SolletExtensionWalletAdapter, SolletWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';

function ConnectWallet({ onConnect }) {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new GlowWalletAdapter(), new SolletExtensionWalletAdapter(), new SolletWalletAdapter(), new LedgerWalletAdapter(), new TorusWalletAdapter()], [network]);
  
  const handleConnect = (wallet) => {
    if (wallet) {
      console.log(wallet);
      onConnect(wallet);
    }
  };
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>
          <WalletMultiButton onConnect={handleConnect} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    
  );
}

export default ConnectWallet;
