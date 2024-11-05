import React from 'react';
import Navbar from './Component/navbar'; // Make sure the path is correct
import Banner from './Component/Banner';
import Services from './Component/Services'; // Import the Services component
import Footer from './Component/footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './App.css';
import Features from './Component/Features';
import Contact from './Component/Contact';
import WhatsAppButton from './Component/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
       {/*<Services />*/}
      <Features />
      {/*<Contact/>*/}
      <WhatsAppButton />
      <Footer />

    </>
  );
}

export default App;
