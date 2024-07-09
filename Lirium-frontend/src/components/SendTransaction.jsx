import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendTransaction, mineBlock } from '../services/HttpClient';

const SendTransaction = () => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    try {
      const response = await sendTransaction(sender, recipient, parseFloat(amount));
      console.log(response);
      setMessage('Successfully added transaction. Please mine the block to confirm.');
      setSender('');
      setRecipient('');
      setAmount('');
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        setMessage('You are not authorized. Please log in again.');
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        setMessage(error.response?.data?.message || 'Transaction failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleMineBlock = async () => {
    setIsLoading(true);
    setMessage('');
    try {
      const response = await mineBlock();
      setMessage('Block mined successfully and added to the blockchain.');
    } catch (error) {
      console.error('Error mining transactions:', error);
      if (error.response && error.response.status === 401) {
        setMessage('You are not authorized. Please log in again.');
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        setMessage(error.response?.data?.message || 'Error mining block. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='sendTransactionWrapper'>
      <h1>Send a Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div className='gap'>
          <label>Sender:</label>
          <input 
            type="text" 
            value={sender} 
            onChange={(e) => setSender(e.target.value)} 
            required 
          />
        </div>
        <div className='gap'>
          <label>Recipient:</label>
          <input 
            type="text" 
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)} 
            required 
          />
        </div>
        <div className='gap'>
          <label>Amount:</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
            step="0.01" 
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Add Transaction'}
        </button>
        <button onClick={handleMineBlock} type="button" disabled={isLoading}>
          {isLoading ? 'Mining...' : 'Mine Block'}
        </button>
      </form>
      {message && <p className={message.includes('Successfully') ? 'success' : 'error'}>{message}</p>}
    </div>
  );
};

export default SendTransaction;