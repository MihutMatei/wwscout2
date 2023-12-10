import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Flex } from 'antd';

export function PeerContacting() {
  const [searchTerm, setSearchTerm] = useState('');
  const [peerData, setPeerData] = useState([]); // State to store fetched data

  useEffect(() => {
    axios.get('http://localhost:8000/api/get_peers/') // Replace with your Django server URL for peers
      .then(response => {
        console.log(response.data.peers);
        setPeerData(response.data.peers);
      })
      .catch(error => console.error(error));
  }, []);

  const filteredData = peerData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += 3) {
    chunkedData.push(filteredData.slice(i, i + 3));
  }

  return (
    <div>
      {/* Render your data here */}
      {chunkedData.map((row, rowIndex) => (
        <Flex key={rowIndex}>
          {row.map((item, columnIndex) => (
            <Card key={columnIndex} style={{ width: 300, margin: '10px' }}>
              <h2>{item.name}</h2>
              {/* Add other fields as needed */}
            </Card>
          ))}
        </Flex>
      ))}
    </div>
  );
}
