import React, { useEffect, useRef, useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feature.css';

import meublecanapeImage from '../../src/images/meublecanape.jpg';
import canapeImage from '../../src/images/canapefeature.jpg';
import chambreImage from '../../src/images/chambre.jpg';
import tableImage from '../../src/images/table.jpg';
import chaiseImage from '../../src/images/chaise.png';
import meubleImage from '../../src/images/meuble.jpg';
import habillageImage from '../../src/images/habillage.jpg';


import sofaUImage from '../../src/images/salonSofaU.png';
import sofaLImage from '../../src/images/salonSofaL.png';
import sofa1Image from '../../src/images/sofa1.png';
import sofa2Image from '../../src/images/sofa2.png';
import bed1Image from '../../src/images/bed1.png';
import bed2Image from '../../src/images/bed2.png';
import table1Image from '../../src/images/table1.png';
import table2Image from '../../src/images/table2.png';
import chaise1Image from '../../src/images/chaise1.png';
import chaise2Image from '../../src/images/chaise2.png';
import furniture1Image from '../../src/images/furniture1.png';
import furniture2Image from '../../src/images/furniture2.png';
/*import habillage1Image from '../../src/images/habillage1.png';
import habillage2Image from '../../src/images/habillage2.png';*/

const Features = () => {
  const [visibleCards, setVisibleCards] = useState(Array(7).fill(false));
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
      if (card) observer.observe(card);
    });

    return () => {
      currentRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      observer.disconnect();
    };
  }, [visibleCards]);

  const featureData = [
    {
      title: "DECOUVREZ NOS OFFRES SALON",
      mainImage: meublecanapeImage,
      carouselImages: [
        { src: sofaLImage, title: "Canapé de Salon" },
        { src: sofaUImage, title: "Canapé Design" },
      ],
    },
    {
      title: "DÉCOUVRIR NOS CANAPÉS",
      mainImage: canapeImage,
      carouselImages: [
        { src: sofa1Image, title: "Canapé Moderne" },
        { src: sofa2Image, title: "Chaise de Luxe" },
      ],
    },
    {
      title: "DECOUVREZ NOS OFFRES CHAMBRES",
      mainImage: chambreImage,
      carouselImages: [
        { src: bed1Image, title: "Chambre Parentale" },
        { src: bed2Image, title: "Habillage en Bois" },
      ],
    },
    {
      title: "DECOUVREZ NOS COLLECTIONS DE TABLE",
      mainImage: tableImage,
      carouselImages: [
        { src: table1Image, title: "Table Moderne" },
        { src: table2Image, title: "Meuble TV" },
      ],
    },
    {
      title: "DECOUVREZ NOS COLLECTIONS DE CHAISES",
      mainImage: chaiseImage,
      carouselImages: [
        { src: chaise1Image, title: "Chaise Confort" },
        { src: chaise2Image, title: "Table en Bois" },
      ],
    },
    {
      title: "INSPIREZ VOUS DE NOS MEUBLES",
      mainImage: meubleImage,
      carouselImages: [
        { src: furniture1Image, title: "Meuble Classique" },
        { src: furniture2Image, title: "Habillage Moderne" },
      ],
    },
    {
      title: "DECOUVREZ NOS HABILLAGE EN BOIS",
      mainImage: habillageImage,
      /*carouselImages: [
        { src: habillage1Image, title: "Meuble Classique" },
        { src: habillage2Image, title: "Habillage Moderne" },
      ], */  
      carouselImages: [],  // Ensure this is an empty array
     },
  ];

  return (
    <div className="container py-5 mt-2">
      <div className="top-border" />
      <h2>Suivez les <span><b>Dernières Tendances</b></span></h2>
      <p>
        Plongez dans un monde de nouveautés et d'innovations qui redéfinissent notre quotidien.
        Explorez les styles émergents et les idées révolutionnaires.
      </p>
      <div className="feature-cards-container">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${visibleCards[index] ? 'spawn' : 'hidden'} ${index % 2 === 1 ? 'reverse' : ''}`}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="card-content">
              {/* Large Image Section */}
              <img className="card-img-large" src={feature.mainImage} alt="Main Large" />
              
              {/* Right Side: Title, Carousel, and Button */}
              <div className="text-content">
                <h5 className="card-title">{feature.title}</h5>
                <Carousel className="card-carousel">
                  {feature.carouselImages && feature.carouselImages.map((image, idx) => (
                    <Carousel.Item key={idx}>
                      <img className="d-block w-100 carousel-img" src={image.src} alt={image.title} />
                      <Carousel.Caption>
                        <h5>{image.title}</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>

                <Button className='voirplus' style={{backgroundColor: '#333'}}>Voir Plus</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;