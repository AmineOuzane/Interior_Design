import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='text-center text-lg-left' style={{ backgroundColor: '#343a40' }}>
      <MDBContainer className='p-4 text-white'> {/* Change text color to white */}
        <MDBRow>
         <p>
         © 2024 Tissier El Alia – Spécialiste en ameublement et aménagement intérieur.
Commandez vos canapés, chambres, tables, chaises, meubles et habillages directement via WhatsApp.
Qualité, confort et élégance pour votre maison.
         </p>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'white'}}>
        &copy; {new Date().getFullYear()} Copyright
      </div>
    </MDBFooter>
  );
}

export default Footer;
