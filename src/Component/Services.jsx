import React, { useEffect, useRef, useState } from 'react';
import ammenagemetImage from '../../src/images/interior.jpg';
import menuiserieImage from '../../src/images/menuiserie2.0.jpg';
import textileImage from '../../src/images/textile2.0.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css'; // Ensure to import your CSS file

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(Array(3).fill(false)); // Assuming 3 cards
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && !visibleCards[index]) {
          setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true; // Mark the card as visible
            return newVisibleCards;
          });
          observer.unobserve(entry.target); // Stop observing once the card is visible
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the card is in view

    const currentRefs = cardRefs.current;
    currentRefs.forEach((card) => {
      if (card) {
        observer.observe(card); // Observe each card
      }
    });

    return () => {
      currentRefs.forEach((card) => {
        if (card) {
          observer.unobserve(card); // Cleanup observer on unmount
        }
      });
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [visibleCards]); // Added visibleCards as a dependency

  return (
    <div className="container py-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="top-border" /> {/* Top border */}
      <h2 className="text-center mb-4" style={{ fontSize: "2.5rem", color: "black" }}>
        Nos Services
      </h2>
      <div className="card-group flex-column flex-md-row">
        {[
          {
            image: ammenagemetImage,
            title: "Aménagement d'intérieur"
          },
          {
            image: menuiserieImage,
            title: "Menuiserie des meubles sur mesure"
          },
          {
            image: textileImage,
            title: "Confection des revêtements textiles"
          }
        ].map((service, index) => (
          <div
            key={index}
            className={`card service-card ${visibleCards[index] ? 'spawn' : 'hidden'}`}
            ref={(el) => (cardRefs.current[index] = el)} // Assign reference to the card
          >
            <img
              className="card-img-top"
              src={service.image}
              alt={service.title }
              style={{ width: '400px', height: '350px', objectFit: 'cover', border: 'none' }} // Ensure no border on image
            />
            <div className="read-more">Read More</div>
            <div className="card-body text-center">
              <h5 className="card-title" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.1em' }}>
                {service.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
