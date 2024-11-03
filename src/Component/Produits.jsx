import React from 'react';
import canapeImage from '../../src/images/canape.jpg';
import dressingImage from '../../src/images/dressing.jpg';
import toiletImage from '../../src/images/toilet.jpg';
import litImage from '../../src/images/lit.jpg';
import meubleTeleImage from '../../src/images/meubleTele.jpg';


import 'bootstrap/dist/css/bootstrap.min.css';

const Produits = () => {
  return (
    <div className="container my-5">
      <h2>
        Suivez les <span><b>Dernières Tendances</b></span>
      </h2>
      <br />
      <p>
        Plongez dans un monde de nouveautés et d'innovations qui redéfinissent notre quotidien. Que ce soit dans la mode, la technologie, ou le design, nous vous invitons à explorer les styles émergents et les idées révolutionnaires qui captivent les esprits.
      </p>

      <div className="card text-white">
        <img 
          src={canapeImage} 
          className="card-img" 
          alt="Canapé" 
          style={{ height: '400px', width: '100%', objectFit: 'cover' }} // Increased height and set to cover
        />
        <div className="card-img-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <h5 className="card-title mt-5">Meuble Canape</h5>
          <p className="card-text">Transformez votre salon en un espace de confort et d'élégance avec notre canapé de qualité supérieure</p>
        </div>
      </div>
<br /><br />
      <div className="card text-white">
        <img 
          src={dressingImage} 
          className="card-img" 
          alt="Canapé" 
          style={{ height: '400px', width: '100%', objectFit: 'cover' }} // Increased height and set to cover
        />
        <div className="card-img-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <h5 className="card-title mt-5">Dressing</h5>
          <p className="card-text">Optimisez votre espace avec notre dressing élégant et fonctionnel, conçu pour allier style et praticité</p>
        </div>
      </div>
      <br /><br />
      <div className="card text-white">
        <img 
          src={toiletImage} 
          className="card-img" 
          alt="Canapé" 
          style={{ height: '400px', width: '100%', objectFit: 'cover' }} // Increased height and set to cover
        />
        <div className="card-img-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <h5 className="card-title mt-5">Salle de Bain</h5>
          <p className="card-text">Transformez votre salle de bain en un espace de détente et de luxe avec notre mobilier de salle de bain élégant et fonctionnel</p>
        </div>
      </div>
      <br /><br />
      <div className="card text-white">
        <img 
          src={litImage} 
          className="card-img" 
          alt="Canapé" 
          style={{ height: '400px', width: '100%', objectFit: 'cover' }} // Increased height and set to cover
        />
        <div className="card-img-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <h5 className="card-title mt-5">Chambre a Coucher</h5>
          <p className="card-text">Créez une oasis de détente et de sophistication dans votre chambre à coucher avec notre mobilier raffiné et fonctionnel, conçu pour allier confort et esthétisme</p>
        </div>
      </div>
      <br /><br />
      <div className="card text-white">
        <img 
          src={meubleTeleImage} 
          className="card-img" 
          alt="Canapé" 
          style={{ height: '400px', width: '100%', objectFit: 'cover' }} // Increased height and set to cover
        />
        <div className="card-img-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <h5 className="card-title mt-5">Meuble Tele</h5>
          <p className="card-text">Donnez à votre salon une allure moderne et raffinée avec notre meuble TV sophistiqué</p>
        </div>
      </div>
    </div>
  );
}

export default Produits;
