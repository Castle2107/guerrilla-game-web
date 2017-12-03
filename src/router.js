import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { getAuthenticatedUser } from './store';
import Home from './app/pages/home/index';
import Dashboard from './app/components/Dashboard';
import Header from './app/components/Header';
import Profile from './app/pages/profile/index';
import Ranking from './app/pages/ranking/index';
import Assault from './app/pages/assaults/index';
import Settings from './app/pages/settings/index';

const Routes = (props) => {
	let defaultComponent = Home;
	let isAuth = getAuthenticatedUser();

	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={ isAuth? Dashboard : defaultComponent }/>
					<Route path="/profile" component={ isAuth? Profile  : defaultComponent }/>
					<Route path="/ranking" component={ isAuth? Ranking  : defaultComponent }/>
					<Route path="/settings" component={ isAuth? Settings : defaultComponent }/>
					<Route path="/assault_report/:targetId" component={ isAuth? Assault : defaultComponent }/>
					<Route component={ isAuth? Dashboard : defaultComponent }/>
				</Switch>
			</div>
		</Router>
	);
}

export default Routes;