const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('6a3cf541f4134967a56bae608827b8a2f767ce1e0a27e2f3ac5fdbdffc40f47f');
const myWalletAddress = myKey.getPublic('hex');

let turtleCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'testing', 10);
tx1.signTransaction(myKey);
turtleCoin.addTransaction(tx1)

console.log('\nStarting miner');
turtleCoin.minePendingTransactions(myWalletAddress);

console.log(turtleCoin.getBalanceOfAddress(myWalletAddress));
