import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
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
import sofa2Image from '../../src/images/sofaLMarron.png';
import bed1Image from '../../src/images/bed1.png';
import bed2Image from '../../src/images/bed2.png';
import table1Image from '../../src/images/table1.png';
import table2Image from '../../src/images/table2.png';
import chaise1Image from '../../src/images/chaise1.png';
import chaise2Image from '../../src/images/chaise2.png';
import furniture1Image from '../../src/images/furniture1.png';
import furniture2Image from '../../src/images/furniture2.png';
import habillage1Image from '../../src/images/habillage7.png';
import habillage2Image from '../../src/images/habillage8.png';
const Features = () => {
  const featureData = [
    { title: "DÉCOUVREZ NOS OFFRES SALON", mainImage: meublecanapeImage, carouselImages: [{ src: sofaLImage}, { src: sofaUImage}] },
    { title: "DÉCOUVREZ NOS CANAPÉS", mainImage: canapeImage, carouselImages: [{ src: sofa1Image}, { src: sofa2Image}] },
    { title: "DÉCOUVREZ NOS OFFRES CHAMBRES", mainImage: chambreImage, carouselImages: [{ src: bed1Image}, { src: bed2Image}] },
    { title: "DÉCOUVREZ NOS COLLECTIONS DE TABLE", mainImage: tableImage, carouselImages: [{ src: table1Image}, { src: table2Image}] },
    { title: "DÉCOUVREZ NOS COLLECTIONS DE CHAISES", mainImage: chaiseImage, carouselImages: [{ src: chaise1Image}, { src: chaise2Image}] },
    { title: "INSPIREZ-VOUS DE NOS MEUBLES", mainImage: meubleImage, carouselImages: [{ src: furniture1Image}, { src: furniture2Image}] },
    { title: "DÉCOUVREZ NOS HABILLAGES EN BOIS", mainImage: habillageImage, carouselImages: [{ src: habillage1Image }, { src: habillage2Image}] },
  ];

  const [visibleCards, setVisibleCards] = useState(new Array(featureData.length).fill(false));
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      observer.disconnect();
    };
  }, [featureData.length]);

  return (
    <div className="container py-5 mt-2">
      <div className="top-border" />
      <h2 className="section-title" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}>Suivez les <span><b>Dernières Tendances</b></span></h2>
      <p className="section-description" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }} >
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
              <img className="card-img-large" src={feature.mainImage} alt={feature.title} />
              <div className="text-content">
                <h5 className="card-title" style={{ fontFamily: 'Montserrat, sans-serif' }}>{feature.title}</h5>
                <Carousel className="card-carousel">
                  {feature.carouselImages.map((image, idx) => (
                    <Carousel.Item key={idx}>
                      <img className="d-block w-100 carousel-img" src={image.src} alt={image.title} />
                      <Carousel.Caption>
                        <h5>{image.title}</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
                <button className="more" style={{ fontFamily: 'Montserrat, sans-serif' }}>Découvrir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
