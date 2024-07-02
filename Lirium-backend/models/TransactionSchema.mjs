import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  inputMap: {
    type: Map,
    of: {
      timestamp: Number,
      amount: Number,
      address: String,
      signature: String,
    },
    required: true
  },
  outputMap: {
    type: Map,
    of: Number,
    required: true
  }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
