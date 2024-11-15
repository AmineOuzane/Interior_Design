import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Canape.css'; // Import the CSS file
import CanapeBannerImage from '../../src/images/CanapeBanner2.png'; // Import the banner image

function Canape() {
    const [canapes, setCanapes] = useState([]);
    const canapeRefs = useRef([]); // Refs to track each canape card

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

    // Intersection Observer to add 'visible' class
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // Add 'visible' class
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        canapeRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            canapeRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [canapes]);

    if (canapes.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="canape-list">
            <img
                src={CanapeBannerImage}
                alt="Bannière Canape"
                className="banner-image"
            />
            {canapes.map((canape, index) => (
                <div
                    key={canape.id}
                    className="canape-card"
                    ref={(el) => (canapeRefs.current[index] = el)} // Assign ref
                >
                    <img src={`data:image/jpeg;base64,${canape.image}`} alt={canape.title} />
                    <h1>{canape.title}</h1>
                    <p>{canape.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Canape;
