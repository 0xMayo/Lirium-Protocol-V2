// LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../services/HttpClient';

const LoginPage = ({ setToken }) => {
  const handleLogin = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      if (response && response.success && response.token) {
        setToken(response.token);
        localStorage.setItem('token', response.token); // Store token in local storage
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;
