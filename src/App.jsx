import React from 'react';
import Navbar from './Component/navbar'; // Make sure the path is correct
import Banner from './Component/Banner';
import Footer from './Component/footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './App.css';
import Features from './Component/Features';
import WhatsAppButton from './Component/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <WhatsAppButton />
      <Footer />

    </>
  );
}

export default App;
