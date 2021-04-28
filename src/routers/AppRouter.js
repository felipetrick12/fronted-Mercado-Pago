import React from 'react';
import { BrowserRouter as Router, Switch,Route, Redirect} from "react-router-dom";
import { Celulares } from '../components/Celulares';
import { Detail } from '../components/Detail';
import { Header } from '../components/Header';


export default function AppRouter() {

    return (
     <Router>
      <div>
      <Header/>
        <Switch>
                <Route exact path="/detail/:id" component={Detail}/>
                <Route exact path="/" component={Celulares}/>
                <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
    )
}
