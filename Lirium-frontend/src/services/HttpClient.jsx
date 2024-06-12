import axios from 'axios';

export const getLiriumBlocks = async () => {
  const response = await axios.get('http://localhost:5001/api/v1/lirium');
  return response.data;
};

export const sendTransaction = async (sender, recipient, amount) => {
  const transactionData = {
    sender: sender,
    recipient: recipient,
    amount: amount
  };

  const response = await axios.post('http://localhost:5001/api/v1/transaction', transactionData);
  return response.data;
};

export const getTransactionPool = async () => {
  const response = await axios.get('http://localhost:5001/api/v1/transaction/transactions');
  return response.data;
};

export const mineBlock = async () => {
  const response = await axios.get('http://localhost:5001/api/v1/transaction/mine');
  return response.data;
};