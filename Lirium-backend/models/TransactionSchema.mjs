// models/TransactionSchema.mjs
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  outputMap: {
    type: Map,
    of: Number,
    required: true,
  },
  inputMap: {
    timestamp: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    signature: {
      r: {
        type: String,
        required: true,
      },
      s: {
        type: String,
        required: true,
      },
      recoveryParam: {
        type: Number,
        required: true,
      },
    },
  },
});

export default mongoose.model('TransactionSchema', TransactionSchema);
