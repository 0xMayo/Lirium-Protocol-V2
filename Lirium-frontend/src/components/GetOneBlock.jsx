import { getLiriumBlocks } from '../services/HttpClient';
import { useState } from 'react';

const GetOneBlock = () => {
  const [liriumBlocks, setLiriumBlocks] = useState([]);
  const [blockIndex, setBlockIndex] = useState('');
  const [filteredBlock, setFilteredBlock] = useState(null);

  const handleLoadLiriumBlocks = async () => {
    try {
      const response = await getLiriumBlocks();
      console.log('Fetched blocks:', response);
      if (response && response.success && Array.isArray(response.data)) {
        setLiriumBlocks(response.data);
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error fetching blocks:', error);
    }
  };

  const handleBlockIndexChange = (event) => {
    setBlockIndex(event.target.value);
  };

  const handleSearch = () => {
    const block = liriumBlocks.find(
      (block) => block.blockIndex === parseInt(blockIndex, 10)
    );
    setFilteredBlock(block);
  };

  return (
    <div>
      <button onClick={handleLoadLiriumBlocks}>Load Blocks</button>
      <label>
        <input
          placeholder='Block Number?'
          type='number'
          value={blockIndex}
          onChange={handleBlockIndexChange}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
      <div>
        {filteredBlock ? (
          <div>
            <p>Timestamp: {filteredBlock.timestamp}</p>
            <p>Block Index: {filteredBlock.blockIndex}</p>
            <p>Last Hash: {filteredBlock.lastHash}</p>
            <p>Hash: {filteredBlock.hash}</p>
            <p>Nonce: {filteredBlock.nonce}</p>
            <p>Difficulty: {filteredBlock.difficulty}</p>
            <p>Data: {JSON.stringify(filteredBlock.data)}</p>
          </div>
        ) : (
          <p>No block found for the given index</p>
        )}
      </div>
    </div>
  );
};

export default GetOneBlock;
