import React from 'react';
import whatsappImage from '../../src/images/whatsapp.jpeg';

const WhatsAppButton = () => {
  const handleClick = () => {
    const url = `https://wa.me/212681504811?text=Bonjour%2C%20puis-je%20avoir%20plus%20d%27information`;
    window.open(url, '_blank'); // Opens in a new tab
  };

  return (
    <div style={styles.iconWrapper} onClick={handleClick}>
      <img src={whatsappImage} alt="WhatsApp icon for contact" style={styles.iconImage} />
    </div>
  );
};

const styles = {
  iconWrapper: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    backgroundColor: '#25D366',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: '70px', 
    height: '70px',
    objectFit: 'cover',
  }
};

export default WhatsAppButton;
