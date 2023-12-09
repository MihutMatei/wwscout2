import { useState } from 'react'
import axios from 'axios';
import './App.css'

const placeholderData = [
  { id: 1, title: 'Placeholder Title 1', description: 'Placeholder Description 1' },
  { id: 2, title: 'Placeholder Title 2', description: 'Placeholder Description 2' },
  { id: 3, title: 'Placeholder Title 4', description: 'Placeholder Description 3' },
  { id: 4, title: 'Placeholder Title 3', description: 'Placeholder Description 4' },
  { id: 5, title: 'Placeholder Title 3', description: 'Placeholder Description 5' },
  { id: 6, title: 'Placeholder Title 3', description: 'Placeholder Description 6' },
  { id: 7, title: 'Placeholder Title 4', description: 'Placeholder Description 7' },
  { id: 8, title: 'Placeholder Title 4', description: 'Placeholder Description 8' },
  { id: 9, title: 'Placeholder Title 4', description: 'Placeholder Description 9' },
  // Add more placeholder items to create 3 rows with 3 listings each
];

function ListingsPage({ filteredData }) {
  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += 3) {
    chunkedData.push(filteredData.slice(i, i + 3));
  }

  return (
    <div className="listings-page">
      <div className="cards-container">
        {chunkedData.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div className="card" key={columnIndex}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = placeholderData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <ListingsPage filteredData={filteredData} />
    </div>
  );
}

export default App;
