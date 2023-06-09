

import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import ConnectWallet from '../solona/wallet';
import { Connection, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction } from '@solana/web3.js';

const Payment = () => {
  const wallet = useWallet();
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(`Sending ${amount} ${selectedToken} to ${receiverAddress} using wallet ${wallet.publicKey}`);
  
    const connection = new Connection("https://api.devnet.solana.com");
    const publicKey = new PublicKey(receiverAddress);
    const lamports = parseFloat(amount) * 10 ** 9; // Convert SOL to lamports
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: publicKey,
        lamports,
      })
    );
  
    // Sign and send the transaction
    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [wallet.publicKey]
    );
  
    console.log(`Transaction ${signature} confirmed`);
  };

  return (
    <div className='bg-main pt-5 p-md-0' style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
      <div className='p-3 mx-auto text-form' style={{ maxWidth: "800px" }}>
        <div className='pb-5 mt-5'>
          <h1>Make Your Transaction</h1>
        </div>
        <ConnectWallet />
        <form className='mt-5' onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="walletAddress" className="form-label">
              Receiver Wallet Address
            </label>
            <input
              type="text"
              className="form-control"
              id="walletAddress"
              placeholder="Enter wallet address"
              value={receiverAddress}
              onChange={(event) => setReceiverAddress(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tokenSelect" className="form-label">
              Select Token
            </label>
            <select className="form-select" id="tokenSelect" value={selectedToken} onChange={(event) => setSelectedToken(event.target.value)}>
              <option value="">--Please choose an option--</option>
              <option value="SOL">SOL</option>
              <option value="USDC">USDC</option>
              <option value="BTC">BTC</option>
              {/* Add additional token options here */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</div>
);
};

export default Payment;