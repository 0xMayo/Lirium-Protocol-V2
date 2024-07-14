import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import { registerUser } from '../services/HttpClient';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignup = async (formData) => {
    try {
      const response = await registerUser(formData);
      console.log('User registered successfully.');

      if (response.token) {
        localStorage.setItem('token', response.token);
        navigate('/login');
      } else {
        setError('Registration successful, but no token received. Please log in.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setError(error.response?.data?.message || 'An error occurred during signup. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <SignUpForm onSignup={handleSignup} />
    </div>
  );
};

export default SignUpPage;