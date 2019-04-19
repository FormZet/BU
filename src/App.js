import React from 'react';
import { Route } from "react-router-dom";
import startPage from "./assets/components/Start-Page/start_page.jsx";
import createHero from "./assets/components/Create-Hero/create_hero.jsx";
import createUniverse from "./assets/components/Create-Universe/create_universe.jsx";
/*import Navbar from "./assets/components/navbar/navbar.jsx";*/

export default class App extends React.Component {
    state = {
        appName: "Blank Universe"
    };

    render() {

        return (
            <>
                {/*<Navbar appName={this.state.appName}/>*/}
                <Route path="/startPage" component={startPage}/>

                <Route path="/createHero" component={createHero}/>

                <Route path="/createUniverse" component={createUniverse}/>
                </>

        );
    }
}