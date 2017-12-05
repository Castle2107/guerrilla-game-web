import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    onCorrectSignUp = () => {
        // this.props.history.push('/');
        this.setState({ loggedIn: true });
    }

    onCorrectLogIn = () => {
        this.setState({ loggedIn: true });
    }

    render() {

        let { loggedIn } = this.state;
        if (loggedIn) {
            window.location.reload();
        }

        return (
            <div>
                <HomeContainer>
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
                                <LoginForm onCorrectLogIn={() => this.onCorrectLogIn()} />
                            </div>
                            <div id="sign" className="tab-pane fade">
                                <SignUpForm onCorrectSignUp={() => this.onCorrectSignUp()} />
                            </div>
                        </div>
                    </div>
                </HomeContainer>
            </div>
        );
    }
}

const HomeContainer = (props) => {
    return (
        <div className="container">
            <h1 className="mx-auto text-center mt-5 display-4">Welcome to Guerrilla Game</h1>
            <div className="row">
                <div className="col-md-4 mx-auto col-sm-8 col-xs-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Home;