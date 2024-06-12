import React from 'react';
import { Link } from 'react-router-dom';

const UnderMaintenance = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>This Page Is Under Maintenance</h1>
      <p>It should be back shortly. Thank you for your patience.</p>
      <button>
        <Link to='/'>Take Me Home</Link>
      </button>
    </div>
  );
};

export default UnderMaintenance;
