import mongoose from 'mongoose';

const BlockSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  lastHash: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  nonce: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  blockIndex: {
    type: Number,
    required: true,
  }
});

const chainSchema = new mongoose.Schema({
  chain: [BlockSchema]
});

const BlockDb = mongoose.model('BlockDb', chainSchema);

export default BlockDb;
