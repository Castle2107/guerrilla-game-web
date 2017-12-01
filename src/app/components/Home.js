import React from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

const Home = (props) => {
    return (
        <HomeContainer>
            <Router>
                <div>
                    <HomeLinks match={props.match} />
                    <Route path={`${props.match.url}login`}
                        component={LoginForm}
                    />
                    <Route path={`${props.match.url}signup`}
                        component={SignUpForm}
                    />
                </div>
            </Router>
        </HomeContainer>
    );
}

const HomeContainer = (props) => {
    return (
        <div>
            <div className="container">
                <h1 className="mx-auto text-center mt-5 display-4">Welcome to Guerrilla Game</h1>
                <div className="row">
                    <div className="col-md-4 mx-auto col-sm-8 col-xs-12">
                        <hr />
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

const HomeLinks = (props) => {
    return (
        <ul className="nav nav-pills justify-content-center mt-3 mb-3" role="tablist">
            <li className="nav-item">
                <NavLink className="nav-link mr-5 ml-0" activeClassName="active"
                    to={`${props.match.url}login`}>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active"
                    to={`${props.match.url}signup`}>Sign Up</NavLink>
            </li>
        </ul>
    );
};

export default Home;