import React, { useEffect, useRef, useState } from 'react';
import meublecanapeImage from '../../src/images/meublecanape.jpg';
import canapeImage from '../../src/images/canapefeature.jpg';
import chambreImage from '../../src/images/chambre.jpg';
import tableImage from '../../src/images/table.jpg';
import chaiseImage from '../../src/images/chaise.png';
import meubleImage from '../../src/images/meuble.jpg';
import habillageImage from '../../src/images/habillage.jpg';

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
      <p style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Plongez dans un monde de nouveautés et d'innovations qui redéfinissent notre quotidien. Que ce soit dans la mode, la technologie, ou le design, nous vous invitons à explorer les styles émergents et les idées révolutionnaires qui captivent les esprits.
      </p>
      <br />
      <div className="feature-cards-container">
        {[
          {
            image: meublecanapeImage,
            title: "DECOUVREZ NOS OFFRES SALON",
            description: "Transformez votre salon en un espace de confort et d'élégance avec notre canapé de qualité supérieure.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dignissimos fugiat enim nulla? Maxime expedita exercitationem hic velit animi dolores sapiente consequuntur, deserunt, illo, voluptatem quidem necessitatibus quo tempore?"
          },
          {
            image: canapeImage,
            title: "DÉCOUVRIR NOS CANAPÉS",
            description: "Optimisez votre espace avec notre dressing élégant et fonctionnel, conçu pour allier style et praticité.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dignissimos fugiat enim nulla? Maxime expedita exercitationem hic velit animi dolores sapiente consequuntur, deserunt, illo, voluptatem quidem necessitatibus quo tempore?"
          },
          {
            image: chambreImage,
            title: "DECOUVREZ NOS OFFRES CHAMBRES",
            description: "Transformez votre salle de bain en un espace de détente et de luxe avec notre mobilier de salle de bain élégant et fonctionnel.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dignissimos fugiat enim nulla? Maxime expedita exercitationem hic velit animi dolores sapiente consequuntur, deserunt, illo, voluptatem quidem necessitatibus quo tempore?"
          },
          {
            image: tableImage,
            title: "DECOUVREZ NOS COLLECTIONS DE TABLE",
            description: "Créez une oasis de détente et de sophistication dans votre chambre à coucher avec notre mobilier raffiné et fonctionnel, conçu pour allier confort et esthétisme.    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dignissimos fugiat enim nulla? Maxime expedita exercitationem hic velit animi dolores sapiente consequuntur, deserunt, illo, voluptatem quidem necessitatibus quo tempore?"
          },
          {
            image: chaiseImage,
            title: "DECOUVREZ NOS COLLECTIONS DE CHAISES",
            description: "Donnez à votre salon une allure moderne et raffinée avec notre meuble TV sophistiqué.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dignissimos fugiat enim nulla? Maxime expedita exercitationem hic velit animi dolores sapiente consequuntur, deserunt, illo, voluptatem quidem necessitatibus quo tempore?"
          },
          {
            image: meubleImage,
            title: "INSPIREZ VOUS DE NOS MEUBLES",
            description: "Donnez à votre salon une allure moderne et raffinée avec notre meuble TV sophistiqué.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dignissimos fugiat enim nulla? Maxime expedita exercitationem hic velit animi dolores sapiente consequuntur, deserunt, illo, voluptatem quidem necessitatibus quo tempore?"
          },
          {
            image: habillageImage,
            title: "DECOUVREZ NOS HABILLAGE EN BOIS",
            description: "Donnez à votre salon une allure moderne et raffinée avec notre meuble TV sophistiqué.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dignissimos fugiat enim nulla? Maxime expedita exercitationem hic velit animi dolores sapiente consequuntur, deserunt, illo, voluptatem quidem necessitatibus quo tempore?"
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
