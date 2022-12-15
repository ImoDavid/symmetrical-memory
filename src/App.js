import {Homepage} from "./containers/home-page";
import {Navbar} from "./components/navbar";
import React from "react";
import {AboutPage} from "./containers/about-page";

function App() {
    return (
        <>
            <Navbar/>
            <AboutPage/>
        </>
    );
}

export default App;
