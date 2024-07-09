import { describe, it, expect, beforeEach, vi } from 'vitest';
import Transaction from '../models/Transaction.mjs';
import { REWARD_ADDRESS, MINING_REWARD } from '../config/settings.mjs';

describe('Transaction', () => {
    let sender;
    let recipient;
    let amount;
    let transaction;
  
    beforeEach(() => {
      sender = { publicKey: 'sender-public-key', balance: 1000, sign: vi.fn(() => 'signature') };
      recipient = 'recipient-public-key';
      amount = 50;
  
      transaction = new Transaction({ sender, recipient, amount });
    });
  
    it('should create a transaction with a unique id', () => {
      expect(transaction.id).toBeDefined();
    });
  
    it('should create an output map', () => {
      expect(transaction.outputMap).toEqual({
        [recipient]: amount,
        [sender.publicKey]: sender.balance - amount,
      });
    });
  
    it('should create an input map', () => {
      expect(transaction.inputMap).toEqual({
        timestamp: expect.any(Number),
        amount: sender.balance,
        address: sender.publicKey,
        signature: 'signature',
      });
    });
  
    describe('update()', () => {
      let nextRecipient;
      let nextAmount;
  
      beforeEach(() => {
        nextRecipient = 'next-recipient-public-key';
        nextAmount = 10;
        transaction.update({ sender, recipient: nextRecipient, amount: nextAmount });
      });
  
      it('should update the transaction', () => {
        expect(transaction.outputMap[nextRecipient]).toEqual(nextAmount);
        expect(transaction.outputMap[sender.publicKey]).toEqual(sender.balance - amount - nextAmount);
      });
  
      it('should throw an error if the amount exceeds the balance', () => {
        expect(() => {
          transaction.update({ sender, recipient: nextRecipient, amount: 9999 });
        }).toThrow('Amount exceeds balance!');
      });
    });
  
    describe('transactionReward()', () => {
      let miner;
      let rewardTransaction;
  
      beforeEach(() => {
        miner = { publicKey: 'miner-public-key' };
        rewardTransaction = Transaction.transactionReward({ miner });
      });
  
      it('should create a reward transaction', () => {
        expect(rewardTransaction.outputMap[miner.publicKey]).toEqual(MINING_REWARD);
      });
  
      it('should set the input address to the reward address', () => {
        expect(rewardTransaction.inputMap).toEqual(REWARD_ADDRESS);
      });
    });
  });