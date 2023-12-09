// src/YourComponent.js
import React, { useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  useEffect(() => {
    axios.get('/api/data') // Assuming you set up a proxy for '/api' in vite.config.js
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default YourComponent;
