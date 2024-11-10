import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Canape.css'; // Import the CSS file

function Canape() {
    // State to hold a list of canapes
    const [canapes, setCanapes] = useState([]);

    // Fetch all canapes when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/canapes')
            .then((response) => {
                setCanapes(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the canapes!', error);
            });
    }, []);

    // Show a loading message until the canapes data is available
    if (canapes.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="canape-list"> {/* Container for the list of canapes */}
            {canapes.map(canape => (
                <div key={canape.id} className="canape-card"> {/* Apply the card styling */}
                    <img src={`data:image/jpeg;base64,${canape.image}`} alt={canape.title} /> {/* Display the canape image */}
                    <h1>{canape.title}</h1> {/* Display the canape title */}
                    <p>{canape.description}</p> {/* Display the canape description */}
                </div>
            ))}
        </div>
    );
}

export default Canape;
