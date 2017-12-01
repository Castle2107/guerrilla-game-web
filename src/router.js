import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';
import Profile from './app/pages/profile/index';
import Ranking from './app/pages/ranking/index';
import Assault from './app/pages/assaults/index';

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/ranking" component={Ranking}/>
                <Route path="/assault_report/:targetId" component={Assault}/>
            </Switch>
        </Router>
    );
}

export default Routes;