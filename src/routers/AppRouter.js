import React from 'react';
import { BrowserRouter as Router, Switch,Route, Redirect} from "react-router-dom";
import DashboardRoute from './DashboardRoute';


export default function AppRouter() {

    return (
     <Router>
      <div>
        <Switch>
                <Route path="/" component={DashboardRoute}/>

                <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
    )
}
