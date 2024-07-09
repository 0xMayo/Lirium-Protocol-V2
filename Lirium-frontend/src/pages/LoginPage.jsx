import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../services/HttpClient';

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (formData) => {
    try {
      const response = await loginUser(formData);
      console.log('User logged in:', response);
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        navigate('/');
      } else {
        setError('Login successful, but no token received. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.response?.data?.message || 'An error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
