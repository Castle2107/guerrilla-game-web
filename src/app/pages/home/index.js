import React from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const Home = (props) => {
    return (
        <HomeContainer>
            <div>
                <HomeLinks />
            </div>
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

const HomeLinks = () => {
    return (
        <div>
            <ul className="nav nav-pills justify-content-center mt-3 mb-3">
                <li className="nav-item active mr-5">
                    <a data-toggle="tab" href="#login">Login</a>
                </li>
                <li className="nav-item">
                    <a data-toggle="tab" href="#sign">Sign</a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="login" className="tab-pane fade in active">
                    <LoginForm />
                </div>
                <div id="sign" className="tab-pane fade">
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
};

export default Home;