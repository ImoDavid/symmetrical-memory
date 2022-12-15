import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Homepage } from './containers/home-page';
import { Navbar } from './components/navbar';
import { AboutPage } from './containers/about-page';
import { HowToApply } from './containers/how-to-apply-page';
import { Claimrequirement } from './containers/claim-requirement-page';
import { ShipmentTracking } from './containers/shipment-tracking-page';
import { Beneficiary } from './containers/beneficiary-page';
import { WinnersPage } from './containers/winners-list-page';
import { ContactPage } from './containers/contact-page';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/winners' element={<WinnersPage />} />
        <Route path='/beneficiary' element={<Beneficiary />} />
        <Route path='/shipment' element={<ShipmentTracking />} />
        <Route path='/claim' element={<Claimrequirement />} />
        <Route path='/apply' element={<HowToApply />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<Navigate to='/homepage' />} />
        <Route path='/home' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
