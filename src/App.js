import {Homepage} from "./containers/home-page";
import {Navbar} from "./components/navbar";
import React from "react";
import {AboutPage} from "./containers/about-page";
import {HowToApply} from "./containers/how-to-apply-page";
import { Claimrequirement } from './containers/claim-requirement-page';
import { ShipmentTracking } from "./containers/shipment-tracking-page";
import { Beneficiary } from "./containers/beneficiary-page";
import {WinnersPage} from "./containers/winners-list-page";
import ContactPage from "./containers/contact-page/contactPage";

function App() {
    return (
      <>
            <Navbar />
            <ContactPage/>
            {/* <Beneficiary/> */}
            {/* <ShipmentTracking/> */}
        {/* <Claimrequirement /> */}
        {/* <HowToApply/> */}
        {/* <AboutPage/> */}
        {/* <Homepage /> */}
      </>
    );
}

export default App;
