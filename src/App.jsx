import { useState } from 'react'
import axios from 'axios';
import './App.css'

const placeholderData = [
  { id: 1, title: 'Placeholder Title 1', description: 'Placeholder Description 1' },
  { id: 2, title: 'Placeholder Title 2', description: 'Placeholder Description 2' },
  { id: 3, title: 'Placeholder Title 3', description: 'Placeholder Description 3' },
  // Add more placeholder items as needed
];

function ListingsPage() {
  // Simulating fetching data from the API (replace with Axios or actual fetch logic)
  // For now, using placeholder data
  const data = placeholderData;

  // Divide data into chunks of 3 for each row
  const chunkedData = data.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // Start a new row
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div className="listings-page">
      {chunkedData.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((item, columnIndex) => (
            <div className="card" key={columnIndex}>
              {/* Customize the card layout based on your data */}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>My Listings</h1>
      <ListingsPage />
    </div>
  );
}

export default App;