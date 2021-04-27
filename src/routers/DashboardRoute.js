import React from 'react';
import { Switch,Route, Redirect} from "react-router-dom";
import dcScreen from '../components/dc/dcScreen';
import HeroeScreen from '../components/heroes/HeroeScreen';
import marvelScreen from '../components/marvel/marvelScreen';
import SearchScreen from '../components/search/SearchScreen';

import NavBar from '../components/ui/NavBar';



export default function DashboardRoute() {
    return (
        <>
        {/* Este Es el hijo de rutas,para que muestre un template diferente al que quiero */}
          <NavBar/>
          <div>
          <Switch>
            <Route exact path="/marvel" component={marvelScreen}/>
            <Route exact path="/heroe/:heroeId" component={HeroeScreen}/>
            <Route exact path="/dc" component={dcScreen}/>
            <Route exact path="/search" component={SearchScreen}/>

            <Redirect to='/marvel'/>
          </Switch>
        </div>
      </>
    )
}
