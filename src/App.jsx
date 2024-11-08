import React from 'react';
import Navbar from './Component/navbar';
import Banner from './Component/Banner';
import Footer from './Component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Features from './Component/Features';
import WhatsAppButton from './Component/WhatsAppButton';

// Import the pages
import Salon from './Component/Salon';
import Canape from './Component/Canape';
import Chambre from './Component/Chambre';
import Table from './Component/Table';
import Chaise from './Component/Chaise';
import Meuble from './Component/Meuble';
import Habillage from './Component/Habillage';


function MainContent() {
  const location = useLocation();
  
  return (
    <>
      {/* Conditionally render these components only on the home page */}
      {location.pathname === '/' && (
        <>
          <Banner />
          <Features />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/salon" element={<Salon />} />
      <Route path="/canape" element={<Canape />} />
      <Route path="/chambre" element={<Chambre />} />
      <Route path="/table" element={<Table />} />
      <Route path="/chaise" element={<Chaise />} />
      <Route path="/meuble" element={<Meuble />} />
      <Route path="/habillage" element={<Habillage />} />

    </Routes>
    <MainContent />
    <Footer />
  </Router>
  );
}

export default App;