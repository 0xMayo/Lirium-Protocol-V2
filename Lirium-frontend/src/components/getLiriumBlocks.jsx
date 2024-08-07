import { getLiriumBlocks } from '../services/HttpClient';
import { useState } from 'react';

const RetrieveLiriumBlocks = () => {
  const [liriumBlocks, setLiriumBlocks] = useState([]);

  const handleLoadLiriumBlocks = async () => {
    try {
      const response = await getLiriumBlocks();
      console.log(response);
      
      if (response && response.data && Array.isArray(response.data.chain)) {
        setLiriumBlocks(response.data.chain);
      } else {
        console.error('Unexpected response format:', response);
      }
    } catch (error) {
      console.error('Error fetching Lirium blocks:', error);
    }
  };

  return (
    <div className='theWrapper'>
      <div className='buttonWrapper'>
        <h2 className='insideText'>Are you ready?</h2>
        <h3 className='insideText'>Take a look at Lirium Protocols fully secure and immutable blocks</h3>
        <h4 className='insideText'>Get liriumfied</h4>
        <button className='insideText' onClick={handleLoadLiriumBlocks}>
          {' '}
          Retrieve Blockchain Data
        </button>
      </div>
      <div className='blockchainWrapper'>
        <ul>
          {liriumBlocks.map((block, index) => (
            <li key={index} className='block-Container'>
              Timestamp: {block.timestamp}
              <br />
              Block Index: {block.blockIndex}
              <br />
              Hash: {block.hash}
              <br />
              Last Hash: {block.lastHash}
              <br />
              Nonce: {block.nonce}
              <br />
              Difficulty: {block.difficulty}
              <br />
              Data: {JSON.stringify(block.data)}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default RetrieveLiriumBlocks;
