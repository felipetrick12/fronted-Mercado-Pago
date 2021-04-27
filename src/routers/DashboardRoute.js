import React from 'react';
import { Switch,Route, Redirect} from "react-router-dom";
import { Header } from '../components/Header';
import { Detail } from '../components/Detail';
import { Celulares } from '../components/Celulares';

export default function DashboardRoute() {
    return (
        <>
        {/* Este Es el hijo de rutas,para que muestre un template diferente al que quiero */}
          <Header/>
          <div>
          <Switch>
            <Route exact path="/detail/:id" component={Detail}/>
            <Route exact path="/" component={Celulares}/>
            <Redirect to='/'/>
          </Switch>
        </div>
      </>
    )
}
