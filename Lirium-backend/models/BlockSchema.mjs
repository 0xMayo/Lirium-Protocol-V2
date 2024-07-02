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

const Block = mongoose.model('Block', BlockSchema);

export default Block;
