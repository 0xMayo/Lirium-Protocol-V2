import React from 'react';
import SignupForm from '../components/SignupForm';
import { registerUser } from '../services/HttpClient';

const SignUpPage = ({ setToken }) => {
  const handleSignup = async (credentials) => {
    try {
      const response = await registerUser(credentials);
      if (response && response.success && response.token) {
        setToken(response.token);
        localStorage.setItem('token', response.token);
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed');
    }
  };

  return <SignupForm onSignup={handleSignup} />;
};

export default SignUpPage;
