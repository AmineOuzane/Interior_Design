import React, { useEffect, useRef, useState } from 'react';
import meublecanapeImage from '../../src/images/meublecanape.jpg';
import dressingImage from '../../src/images/dressing2.0.jpg';
import salledebainImage from '../../src/images/salledebain.jpg';
import chambreacoucherImage from '../../src/images/chambreacoucher.jpg';
import teleImage from '../../src/images/tele.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Feature.css';

const Features = () => {
  const [visibleCards, setVisibleCards] = useState(Array(3).fill(false));
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !visibleCards[index]) {
            setVisibleCards((prev) => {
              const newVisibleCards = [...prev];
              newVisibleCards[index] = true;
              return newVisibleCards;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = cardRefs.current;
    currentRefs.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      currentRefs.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
      observer.disconnect();
    };
  }, [visibleCards]);

  return (
    <div className="container py-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>  
      <div className="top-border" />
      <h2>
        Suivez les <span><b>Dernières Tendances</b></span>
      </h2>
      <br />
      <p>
        Plongez dans un monde de nouveautés et d'innovations qui redéfinissent notre quotidien. Que ce soit dans la mode, la technologie, ou le design, nous vous invitons à explorer les styles émergents et les idées révolutionnaires qui captivent les esprits.
      </p>
      <div className="feature-cards-container">
        {[
          {
            image: meublecanapeImage,
            title: "Meuble Canape",
            description: "Transformez votre salon en un espace de confort et d'élégance avec notre canapé de qualité supérieure"
          },
          {
            image: dressingImage,
            title: "Dressing",
            description: "Optimisez votre espace avec notre dressing élégant et fonctionnel, conçu pour allier style et praticité"
          },
          {
            image: salledebainImage,
            title: "Salle de Bain",
            description: "Transformez votre salle de bain en un espace de détente et de luxe avec notre mobilier de salle de bain élégant et fonctionnel"
          },
          {
            image: chambreacoucherImage,
            title: "Chambre a Coucher",
            description: "Créez une oasis de détente et de sophistication dans votre chambre à coucher avec notre mobilier raffiné et fonctionnel, conçu pour allier confort et esthétisme"
          },
          {
            image: teleImage,
            title: "Meuble Television",
            description: "Donnez à votre salon une allure moderne et raffinée avec notre meuble TV sophistiqué"
          },
        ].map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${visibleCards[index] ? 'spawn' : 'hidden'} ${index % 2 === 1 ? 'reverse' : ''}`}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="card-content">
              <div className="text-content">
                <h5 className="card-title">{feature.title}</h5>
                <br />
                <p className="card-text" style={{ padding: '10px' }}>{feature.description} </p>
              </div>
              <img
                className="card-img-large"
                src={feature.image}
                alt={feature.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
