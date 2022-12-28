import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import { Homepage } from './containers/home-page';
import { Navbar } from './components/navbar';
import { AboutPage } from './containers/about-page';
import { HowToApply } from './containers/how-to-apply-page';
import { ClaimRequirement } from './containers/claim-requirement-page';
import { ShipmentTracking } from './containers/shipment-tracking-page';
import { Beneficiary } from './containers/beneficiary-page';
import { WinnersPage } from './containers/winners-list-page';
import { ContactPage } from './containers/contact-page';
import { Footer } from './components/footer';
import {Topbar} from './components/topbar';
import {TickingNotification} from "./components/ticking-notification";
function App() {
    const [winners, setWinners] = useState([]);

    const GetWinners = async () => {
        const response = await axios.get(
            `https://raw.pchofficials.com/api/get-winners`
        );
        setWinners(response.data?.winners);
    };

    useEffect(() => {
        GetWinners();
        return () => {
            axios.CancelToken.source().cancel();
        };
    }, []);


  return (
    <>
      <Topbar/>
      <Navbar />
        <TickingNotification data={winners} />
      <Routes>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/winners' element={<WinnersPage />} />
        <Route path='/beneficiary' element={<Beneficiary />} />
        <Route path='/shipment' element={<ShipmentTracking />} />
        <Route path='/claim' element={<ClaimRequirement />} />
        <Route path='/apply' element={<HowToApply />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
