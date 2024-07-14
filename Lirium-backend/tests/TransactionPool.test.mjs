import { describe, it, expect, beforeEach, vi } from 'vitest';
import TransactionPool from '../models/TransactionPool.mjs';
import Transaction from '../models/Transaction.mjs';

describe('TransactionPool', () => {
    let transactionPool, transaction;

    beforeEach(() => {
        transactionPool = new TransactionPool();
        transaction = new Transaction({
            sender: { publicKey: 'sender-public-key', balance: 1000, sign: vi.fn(() => 'signature') },
            recipient: 'recipient-public-key',
            amount: 50
        });
        transactionPool.addTransaction(transaction);
    });

    it('adds a transaction', () => {
        expect(transactionPool.transactionMap[transaction.id]).toEqual(transaction);
    });

    it('clears block transactions', () => {
        const chain = [
            { data: [] },
            { data: [transaction] }
        ];

        transactionPool.clearBlockTransactions({ chain });
        expect(transactionPool.transactionMap[transaction.id]).toBeUndefined();
    });

    it('clears the transaction pool', () => {
        transactionPool.clearTransactionPool();
        expect(transactionPool.transactionMap).toEqual({});
    });

    it('replaces the transaction map', () => {
        const newTransaction = new Transaction({
            sender: { publicKey: 'new-sender-public-key', balance: 2000, sign: vi.fn(() => 'new-signature') },
            recipient: 'new-recipient-public-key',
            amount: 100
        });
        const newTransactionMap = { [newTransaction.id]: newTransaction };

        transactionPool.replaceTransactionMap(newTransactionMap);
        expect(transactionPool.transactionMap).toEqual(newTransactionMap);
    });

    it('finds an existing transaction by address', () => {
        const foundTransaction = transactionPool.transactionExists({ address: 'sender-public-key' });
        expect(foundTransaction).toEqual(transaction);
    });

    it('validates transactions', () => {
        vi.spyOn(Transaction, 'validate').mockReturnValue(true);

        const validTransactions = transactionPool.validateTransactions();
        expect(validTransactions).toEqual([transaction]);
    });

    it('invalidates transactions', () => {
        vi.spyOn(Transaction, 'validate').mockReturnValue(false);

        const validTransactions = transactionPool.validateTransactions();
        expect(validTransactions).toEqual([]);
    });
});
