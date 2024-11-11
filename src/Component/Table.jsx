import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Salon.css'; // Import the CSS file

import TableBannerImage from '../../src/images/TableBanner2.png'; // Import the banner image

function Table() {
    // State to hold a list of products
    const [tables, setTables] = useState([]);

    // Fetch all products when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/tables')
            .then((response) => {
                setTables(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    // Show a loading message until the products data is available
    if (tables.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-list"> {/* Container for the list of products */}
         <img
        src={TableBannerImage}
        alt="Bannière Table"
        className="banner-image"
      />
            {tables.map(table => (
                <div key={table.id} className="product-card"> {/* Apply the card styling */}
                    <img src={`data:image/jpeg;base64,${table.image}`} alt={table.title} /> {/* Display the product image */}
                    <h1>{table.title}</h1> {/* Display the product title */}
                    <p>{table.description}</p> {/* Display the product description */}
                </div>
            ))}
        </div>
    );
}

export default Table;
