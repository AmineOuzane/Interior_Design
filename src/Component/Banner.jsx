import React, { useEffect, useState } from 'react';
import bannerImage from '../../src/images/banner2.jpg'; // Import the banner image
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'; // Import the CSS file for additional styling

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true); // Set mounted to true after a short delay
    }, 100); // You can adjust this delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="banner-container">
      <img
        src={bannerImage}
        alt="Bannière principale"
        className="banner-image"
      />
      <div className={`banner-text ${isMounted ? 'spawn' : ''}`}>
        Découvrez nos dernières offres et promotions 
      </div>
    </div>
  );
};

export default Banner;
