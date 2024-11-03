import React from 'react';
import Navbar from './Component/navbar'; // Make sure the path is correct
import Banner from './Component/Banner';
import Services from './Component/Services'; // Import the Services component
import Footer from './Component/footer';
import Produits from './Component/Produits';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services /> {/* Add the Services component here */}
      <Produits />
      <Footer />

    </>
  );
}

export default App;
