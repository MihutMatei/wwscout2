import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    // Use axios to fetch job applications from the Django endpoint
    axios.get('http://localhost:8000/api/get_job_applications/')
      .then(response => setJobApplications(response.data.data))
      .catch(error => console.error('Error fetching job applications:', error));
  }, []);

  // Filter job applications based on the search term
  const filteredData = jobApplications.filter(item =>
    item.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Divide filtered data into chunks of 3 for each row
  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += 3) {
    chunkedData.push(filteredData.slice(i, i + 3));
  }

  return (
    <div className="listings-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="cards-container">
        {chunkedData.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div className="card" key={columnIndex}>
                <h2>{item.position}</h2>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="header-text">Job Listings</h1>
      </div>
      <ListingsPage />
    </div>
  );
}

export default App;
