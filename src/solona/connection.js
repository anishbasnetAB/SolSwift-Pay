import { Connection, Keypair, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';

// Set up a connection to the Solana network
const connection = new Connection('https://api.devnet.solana.com');

// Load the private key associated with the wallet that holds the tokens
const privateKey = new Uint8Array([131,184,52,79,45,22,131,153,72,168,164,219,162,66,93,135,99,98,13,154,175,174,115,255,201,32,34,59,102,69,158,195,167,92,193,36,183,186,177,128,4,0,203,192,194,108,58,238,192,171,52,87,68,20,14,193,241,248,196,205,43,105,150,45]);
const fromKeypair = Keypair.fromSecretKey(privateKey);

// The public key of the wallet that will receive the tokens
const toPublicKey = new PublicKey('GJyzphcbB6X5MeCNcYvD8McKfg5Fh3PKZX4qNqqHvUYQ');

async function sendTokens(amount) {
  try {
    // Get the current blockhash
    const { blockhash } = await connection.getRecentBlockhash();

    // Create a Transfer instruction to send the tokens
    const transferInstruction = SystemProgram.transfer({
      fromPubkey: fromKeypair.publicKey,
      toPubkey: toPublicKey,
      lamports: amount, // The amount of tokens to send, in lamports
    });

    // Create a new Transaction object and add the Transfer instruction to it
    const transaction = new Transaction().add(transferInstruction);

    // Sign the transaction with the private key of the wallet that holds the tokens
    transaction.sign(fromKeypair);

    // Send the transaction to the Solana network and wait for confirmation
    const signature = await sendAndConfirmTransaction(connection, transaction, [fromKeypair]);
    console.log(`Transaction ${signature} sent`);
  } catch (error) {
    console.error(`Error sending tokens: ${error}`);
  }
}

i want to make a website using react.js the webpage should be able to transfer the tokens in solana blockchain to any public wallet address the user inputs. the form has 3 fields, the receiver public address, amount and select token. i completed the frontend part of making static UI, I have payment component with form details. now i have no idea what to do to complete my task please give me right detailed guidance to achieve my task

how to integrate sollet wallet in react app