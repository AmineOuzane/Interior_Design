import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import your custom CSS file

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Mounaim</Link>
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
          <ul className="navbar-nav ms-auto justify-content-center text-center">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                Acceuil
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/salon' ? 'active' : ''}`} 
                to="/salon"
              >
                Salon
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/canape">Canapés</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chambre">Chambre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">Table</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chaise">Chaises</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/meuble">Meubles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/habillage">Habillage</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
