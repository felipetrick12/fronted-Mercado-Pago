import React from 'react';
import { BrowserRouter as Router, Switch,Route, Redirect} from "react-router-dom";
import { Header } from '../components/Header';
import { Detail } from '../components/Detail';


export default function AppRouter() {

    return (
     <Router>
      <div>
        <Switch>
                <Route exact path="/detail/:id" component={Detail}/>
                <Route path="/" component={Header}/>

                <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
    )
}
