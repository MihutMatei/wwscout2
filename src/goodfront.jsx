import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobData, setJobData] = useState([]); // State to store fetched data

  useEffect(() => {
    axios.get('http://localhost:8000/api/get_job_applications/')  // Replace with your Django server URL
        .then(response => {
            console.log(response.data.jobApplications)
            setJobData(response.data.job_applications)
            
        })
        .catch(error => console.error(error));
}, []);

  const filteredData = jobData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += 3) {
    chunkedData.push(filteredData.slice(i, i + 3));
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="header-text">Job Listings</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="listings-page">
        <div className="cards-container">
          {chunkedData.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((item, columnIndex) => (
                <div className="card" key={columnIndex}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
