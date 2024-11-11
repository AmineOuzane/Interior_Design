import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Salon.css'; // Import the CSS file
import MeubleBannerImage from '../../src/images/MeubleBanner2.png'; // Import the banner image

function Meuble() {
    // State to hold a list of products
    const [meubles, setMeubles] = useState([]);

    // Fetch all products when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/meubles')
            .then((response) => {
                setMeubles(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    // Show a loading message until the products data is available
    if (meubles.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-list"> {/* Container for the list of products */}
         <img
        src={MeubleBannerImage}
        alt="Bannière Meuble"
        className="banner-image"
      />
            {meubles.map(meuble => (
                <div key={meuble.id} className="product-card"> {/* Apply the card styling */}
                    <img src={`data:image/jpeg;base64,${meuble.image}`} alt={meuble.title} /> {/* Display the product image */}
                    <h1>{meuble.title}</h1> {/* Display the product title */}
                    <p>{meuble.description}</p> {/* Display the product description */}
                </div>
            ))}
        </div>
    );
}

export default Meuble;
