import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Salon.css'; // Import the CSS file
import ChaiseBannerImage from '../../src/images/ChaiseBanner2.png'; // Import the banner image

function Chaise() {
    // State to hold a list of products
    const [chaises, setChaises] = useState([]);

    // Fetch all products when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/chaises')
            .then((response) => {
                setChaises(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    // Show a loading message until the products data is available
    if (chaises.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-list"> {/* Container for the list of products */}
         <img
        src={ChaiseBannerImage}
        alt="Bannière Chaise"
        className="banner-image"
      />
            {chaises.map(chaise => (
                <div key={chaise.id} className="product-card"> {/* Apply the card styling */}
                    <img src={`data:image/jpeg;base64,${chaise.image}`} alt={chaise.title} /> {/* Display the product image */}
                    <h1>{chaise.title}</h1> {/* Display the product title */}
                    <p>{chaise.description}</p> {/* Display the product description */}
                </div>
            ))}
        </div>
    );
}

export default Chaise;
