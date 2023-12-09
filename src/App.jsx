import { useState } from 'react'
import axios from 'axios';
import './App.css'

const placeholderData = [
  { id: 1, title: 'Placeholder Title 1', description: 'Placeholder Description 1' },
  { id: 2, title: 'Placeholder Title 2', description: 'Placeholder Description 2' },
  { id: 3, title: 'Placeholder Title 3', description: 'Placeholder Description 3' },
  { id: 4, title: 'Placeholder Title 4', description: 'Placeholder Description 4' },
  { id: 5, title: 'Placeholder Title 5', description: 'Placeholder Description 5' },
  { id: 6, title: 'Placeholder Title 6', description: 'Placeholder Description 6' },
  { id: 7, title: 'Placeholder Title 7', description: 'Placeholder Description 7' },
  { id: 8, title: 'Placeholder Title 8', description: 'Placeholder Description 8' },
  { id: 9, title: 'Placeholder Title 9', description: 'Placeholder Description 9' },
  // Add more placeholder items to create 3 rows with 3 listings each
];

function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const data = placeholderData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Divide filtered data into chunks of 3 for each row
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 3) {
    chunkedData.push(data.slice(i, i + 3));
  }

  return (
    <div className="listings-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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

