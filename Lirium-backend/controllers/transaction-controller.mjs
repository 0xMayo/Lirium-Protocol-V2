import {transactionPool} from "../server.mjs"
import { wallet } from "../server.mjs"
import { lirium } from "../server.mjs"
import Miner from "../models/Miner.mjs";

import { pubnubServer } from "../server.mjs";

export const addTransaction = (req, res, next) => {

    const { amount, recipient} = req.body;

    let transaction = transactionPool.transactionExists({ address: wallet.publicKey});

    try {
        if (transaction) {
            transaction.update({ sender: wallet, recipient, amount});
        } else {
            transaction = wallet.createTransaction({ recipient, amount });
        }
        
    } catch (error) {
        return res.status(400).json({ success: false, statusCode: 400, message: error.message });
    }
    transactionPool.addTransaction(transaction);

    pubnubServer.broadcastTransaction(transaction);

    res.status(201).json({ success: true, statusCode: 201, data: transaction });
};

export const getTransactionPool = (req, res, next) => {
    res.status(200).json({ success: true, statusCode: 200, data: transactionPool.transactionMap });
};

export const mineTransactions = (req, res, next) => {
    const miner = new Miner({ lirium, transactionPool, wallet, pubnubServer });
  
    miner.mineTransaction();
  
    res.status(200).json({ success: true, statusCode: 200, data: "Block has been mined and added to the blockchain" });
  };
  