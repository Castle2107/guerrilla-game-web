import React, { Component } from 'react';
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
                                <a class="text-white" data-toggle="tab" href="#login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a class="text-white" data-toggle="tab" href="#sign">Sign</a>
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
            <div className="row">
                <div className="col-md-8">
                    <section class="guerrilla">
                        <div class="content">
                            <div class="title">
                                <p>Welcome</p>
                                <h1>Guerrilla Game Web</h1>
                            </div>
                            <p class="py-5">
                                En un mundo paralelo, donde la crisis
                                político-social ha alcanzado niveles más allá de
                                los nuestros, los gobiernos han sucumbido ante el
                                poder de las grandes corporaciones.
                            </p>
                            <p class="py-5">
                                La democracia y las misiones diplomáticas han
                                fallado y ahora estas corporaciones subcontratan
                                guerrillas para zanjar sus diferencias.
                            </p>
                            <p class="py-5">
                                El mundo entero se ha vuelto un campo de 
                                batalla a favor del interés de unos pocos.
                            </p>
                            <ul class="text-center">
                                <h1>Desarrollado por:</h1>
                                <li>Daniel Castillo Leiva</li>
                                <li>Adrián Serrano Brenes</li>
                                <li>Priscilla Mena</li>
                                <li>Bryan Morales Sánchez</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="col-md-4 mx-auto col-sm-8 col-xs-12">
                    <h1 className="mx-auto text-center mt-5 display-4 text-white">Welcome to Guerrilla Game</h1>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Home;