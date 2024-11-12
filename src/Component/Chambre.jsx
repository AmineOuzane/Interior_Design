import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Salon.css'; // Import the CSS file

import ChambreBannerImage from '../../src/images/ChambreBanner2.png'; // Import the banner image

function Chambre() {
    // State to hold a list of products
    const [products, setProducts] = useState([]);

    // Fetch all products when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/chambres')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    // Show a loading message until the products data is available
    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-list"> {/* Container for the list of products */}
        <img
        src={ChambreBannerImage}
        alt="Bannière Chambre"
        className="banner-image"
      />
            {products.map(product => (
                <div key={product.id} className="product-card"> {/* Apply the card styling */}
                    <img src={`data:image/jpeg;base64,${product.image}`} alt={product.title} /> {/* Display the product image */}
                    <h1>{product.title}</h1> {/* Display the product title */}
                    <p>{product.description}</p> {/* Display the product description */}
                </div>
            ))}
        </div>
    );
}

export default Chambre;
