import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Salon.css';
import SalonBannerImage from '../../src/images/ChaiseBanner2.png';

function Salon() {
    const [products, setProducts] = useState([]);
    const productRefs = useRef([]); // Store references to product elements

    // Fetch product data
    useEffect(() => {
        axios.get('http://localhost:8080/chaises')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching the products:', error);
            });
    }, []);

    // Observe when products enter the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the card is visible
            }
        );

        productRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // Clean up observer
        return () => {
            productRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [products]);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-list">
            <img
                src={SalonBannerImage}
                alt="Bannière Salon"
                className="banner-image"
            />
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className="product-card"
                    ref={(el) => (productRefs.current[index] = el)} // Attach ref for observing
                >
                    <img
                        src={`data:image/jpeg;base64,${product.image}`}
                        alt={product.title}
                    />
                    <h1>{product.title}</h1>
                </div>
            ))}
        </div>
    );
}

export default Salon;
