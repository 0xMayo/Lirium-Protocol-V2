import axios from 'axios';

const API_URL = 'http://localhost:5002/api/v1';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const getLiriumBlocks = async () => {
  const response = await api.get('/lirium');
  return response.data;
};

export const sendTransaction = async (sender, recipient, amount) => {
  const transactionData = {
    sender,
    recipient,
    amount,
  };

  const response = await api.post('/transaction', transactionData);
  return response.data;
};

export const getTransactionPool = async () => {
  const response = await api.get('/transaction/transactions');
  return response.data;
};

export const mineBlock = async () => {
  const response = await api.get('/transaction/mine');
  return response.data;
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};
