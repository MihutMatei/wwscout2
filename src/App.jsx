// frontend/src/App.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
    const [jobApplications, setJobApplications] = useState([]);
    const navigate = useNavigate();

    const handleNabigationToPage = () => {
        navigate("/frontend")
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/get_job_applications/')  // Replace with your Django server URL
            .then(response => {
                console.log(response.data.jobApplications)
                setJobApplications(response.data.job_applications)
                
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Job Applications</h1>
            <ul>
                {jobApplications.map(application => (
                    <li key={application.id}>
                        <strong>{application.name}</strong>
                        <p>{application.description}</p>
                    </li>
                ))}
            </ul>
            <button onClick={handleNabigationToPage}>
                Go to Frontend
            </button>
        </div>
    );
}

export default App;
