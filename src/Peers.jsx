import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Peers.css'
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
        <h1 className="header-text text-white font-arial">Peer Talking</h1>
        <div className="search-bar">
          <input
            className='search-bar-input font-arial'
            type="text"
            placeholder="Searching for peer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='container-box'>
        <button className="button-menu">Job Listing</button>
        <button className="button-menu">Helpful Info</button>
      </div>
      <div className="listings-page">
        <div className="cards-container text-white">
          {chunkedData.map((row, rowIndex) => (
            <Flex align='center' justify='center'>
              <Flex vertical gap={20}  align='center' justify='center'>
                {row.map((item, columnIndex) => (
                  <Card className="card text-white" title={(<h2 className='font-28 text-white font-arial'>{item.name}</h2>)} headStyle={{background: '#EC018B'}} bodyStyle={{background: '#F7941D'}} bordered={false} style={{width: '60%'}}>
                    <p className='text-orange font-21'>Pozitia: {item.oposition}</p>
                    <p className='text-orange font-21'>Descrierea: {item.description}</p>
                    <p className='text-orange font-21'>Tara curenta: {item.current_country}</p>
                    <p className='text-orange font-21'>Tara natala: {item.natal_country}</p>
                    <p className='text-orange font-21'>Domeniu: {item.current_workplace}</p>
                    <p className='text-orange font-21'>Numar de tel:{item.phone_number}</p>
                    <p className='text-orange font-21'>Email:{item.email}</p>
                    <p className='text-orange font-21' style={{fontWeight:'bold'}}>Salariu: {item.salary_per_month} lei</p>
                    <p className='text-orange font-21'>{item.facilities}</p>
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

