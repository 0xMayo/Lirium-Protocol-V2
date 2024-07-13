import { describe, it, expect, beforeEach, vi } from 'vitest';
import Lirium from '../models/Lirium.mjs';
import Block from '../models/Block.mjs';
import BlockDb from '../models/BlockSchema.mjs';

vi.mock('../models/BlockSchema.mjs');

describe('Lirium', () => {
  let lirium;

  beforeEach(() => {
    lirium = new Lirium();
    BlockDb.deleteMany.mockClear();
    BlockDb.prototype.save.mockClear();
  });

  it('initializes the chain with the genesis block', () => {
    expect(lirium.chain[0]).toEqual(Block.genesis);
  });

  it('adds a new block to the chain', () => {
    const data = 'test-data';
    lirium.addBlock({ data });

    expect(lirium.chain.length).toEqual(2);
    expect(lirium.chain[1].data).toEqual(data);
  });

  it('replaces the chain with a valid chain', () => {
    const newChain = new Lirium();
    newChain.addBlock({ data: 'block-1' });
    newChain.addBlock({ data: 'block-2' });

    lirium.replaceChain(newChain.chain);

    expect(lirium.chain).toEqual(newChain.chain);
  });

  it('validates a valid chain', () => {
    const newChain = new Lirium();
    newChain.addBlock({ data: 'block-1' });
    newChain.addBlock({ data: 'block-2' });

    expect(Lirium.isValidChain(newChain.chain)).toBe(true);
  });

  it('invalidates a chain with a corrupt genesis block', () => {
    const newChain = new Lirium();
    newChain.chain[0].data = 'corrupt-data';

    expect(Lirium.isValidChain(newChain.chain)).toBe(false);
  });

  it('invalidates a chain with a corrupt block', () => {
    const newChain = new Lirium();
    newChain.addBlock({ data: 'block-1' });
    newChain.chain[1].data = 'corrupt-data';

    expect(Lirium.isValidChain(newChain.chain)).toBe(false);
  });

  it('validates the genesis block correctly', () => {
    expect(Lirium.isValidGenesis(Block.genesis)).toBe(true);

    const invalidGenesis = { ...Block.genesis, data: 'invalid-data' };
    expect(Lirium.isValidGenesis(invalidGenesis)).toBe(false);
  });

  it('validates block difficulty correctly', () => {
    const previousBlock = lirium.getLastBlock();
    const validBlock = {
      ...previousBlock,
      difficulty: previousBlock.difficulty,
    };

    expect(Lirium.isValidDifficulty(validBlock, previousBlock)).toBe(true);

    const invalidBlock = {
      ...previousBlock,
      difficulty: previousBlock.difficulty + 2,
    };

    expect(Lirium.isValidDifficulty(invalidBlock, previousBlock)).toBe(false);
  });
});
