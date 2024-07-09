import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/HttpClient';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <button onClick={handleLogout} className='logout-button'>
      Logout
    </button>
  );
};

export default Logout;
