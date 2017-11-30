import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from "./app/components/App";
import Home from "./app/components/Home";
import Ranking from "./app/components/Ranking";
import Results from "./app/components/Results";
import Settings from "./app/components/Settings";
import MyProfile from "./app/components/MyProfile";


const Router = () => (
	<BrowserRouter>
		<App>
			<Switch>
				<Route exact path="/" render={(props) => <Home {...props} />} />
				<Route exact path="/my_profile" component={MyProfile} />
				<Route exact path="/settings" component={Settings} />
				<Route exact path="/results" component={Results} />
				<Route exact path="/ranking" component={Ranking} />
			</Switch>	
		</App>
	</BrowserRouter>
);

export default Router;