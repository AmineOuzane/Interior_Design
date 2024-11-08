import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mounaim</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link">Acceuil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/salon">Salon</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" >Canapés</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Chambre</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" >Table</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Chaises</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" >Meubles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" >Habillage</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
