import React from 'react';
import whatsappImage from '../../src/images/whatsapp.jpeg';


const WhatsAppButton = () => {

  const handleClick = () => {
    const url = `https://wa.me/212681504811?text=Bonjour%2C%20puis-je%20avoir%20plus%20d%27information`;
    window.open(url, '_blank'); // Ouvre dans un nouvel onglet
  };

  return (
    <div style={styles.iconWrapper}>
    <button onClick={handleClick} style={{ padding: '10px 20px', backgroundColor: '#25D366', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        <img src={whatsappImage} alt="whatsapp icon" style={styles.iconImage} />
    </button>
    </div>
  );
};


const styles = {
    iconWrapper: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '70px',                // Increased the width for better visibility
      height: '70px',               // Increased the height for better visibility
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
      zIndex: 1000,
    },
    iconImage: {
        position: 'absolute',       // Allows for precise positioning
        top: '50%',
        left: '50%',
        width: '80px',              // Make the image slightly larger than the container
        height: '80px',
        transform: 'translate(-50%, -50%)', // Centers the image within the wrapper
        objectFit: 'cover',         // Ensures the image fills the container
    }

    
  };


export default WhatsAppButton;
