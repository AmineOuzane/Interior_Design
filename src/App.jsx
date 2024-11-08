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
/*import Canapes from './Pages/Canapes';
import Chambre from './Pages/Chambre';
import Table from './Pages/Table';
import Chaises from './Pages/Chaises';
import Meubles from './Pages/Meubles';
import Habillage from './Pages/Habillage';*/


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
    </Routes>
    <MainContent />
    <Footer />
  </Router>
  );
}

export default App;