import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, Flex} from 'antd';

export function PeerContacting() {
  const [searchTerm, setSearchTerm] = useState('');
  const [peerData, setPeerData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/get_peers/') // Replace with your Django server URL for fetching peers
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
    <div className="App">
      <div className="header">
        <h1 className="header-text">Peer Talking</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="cauta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="listings-page">
        <div className="cards-container">
          {chunkedData.map((row, rowIndex) => (
            <Flex align='center' justify='center'>
              <Flex vertical gap={20}  align='center' justify='center'>
                {row.map((item, columnIndex) => (
                  <Card className="card" title={(<h2>{item.name}</h2>)} headStyle={{background: '#EE4135'}} bodyStyle={{background: '#F7941D'}} bordered={false} style={{width: '60%'}}>
                    <p>Pozitia: {item.oposition}</p>
                    <p>Descrierea: {item.description}</p>
                    <p>Tara curenta: {item.current_country}</p>
                    <p>Tara natala: {item.natal_country}</p>
                    <p>Domeniu: {item.current_workplace}</p>
                    <p>Numar de tel:{item.phone_number}</p>
                    <p>Email:{item.email}</p>
                    <p style={{fontWeight:'bold'}}>Salariu: {item.salary_per_month} lei</p>
                    <p>{item.facilities}</p>
                  </Card>
                ))}
              </Flex>
            </Flex>
          ))}
        </div>
      </div>
    </div>
  );
}

