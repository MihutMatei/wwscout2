// frontend/src/App.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [jobApplications, setJobApplications] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/get_job_applications/')  // Replace with your Django server URL
            .then(response => setJobApplications(response.data.job_applications))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Job Applications</h1>
            <ul>
                {jobApplications.map(application => (
                    <li key={application.id}>
                        <strong>{application.title}</strong>
                        <p>{application.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
