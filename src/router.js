import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './app/pages/home/index';
import Dashboard from './app/components/Dashboard';
import Header from './app/components/Header';
import Profile from './app/pages/profile/index';
import Ranking from './app/pages/ranking/index';
import Assault from './app/pages/assaults/index';
import Settings from './app/pages/settings/index';

const Routes = (props) => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/ranking" component={Ranking}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/assault_report/:targetId" component={Assault}/>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;