import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Mounaim</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse" // For Bootstrap 5
        data-bs-target="#navbarNav" // For Bootstrap 5
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Acceuil</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Salon</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Canapés</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Chambre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Table</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Chaises</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Meubles</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Habillage</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

