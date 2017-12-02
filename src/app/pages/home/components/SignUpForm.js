import React, { Component } from 'react';
import {signUp} from '../../../services/api/Auth';
import AlertContainer from 'react-alert';
import { logIn } from '../../../../store';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            faction: 'MEC', //default value
            errors: {}
        };
    }

    handleChange(e) {
        this.setState({
           [e.target.name]: e.target.value 
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        signUp(this.state)
            .then((data) => {
                logIn(data.id);
                this.props.onCorrectSignUp();        
            })
            .catch((errors) => {
                if (errors.hasOwnProperty('errors')) {
                    this.displayErrors(errors.errors);
                }else {
                    this.showAlert('Wrong data provided. Please try again!');
                }
            });
    }

    displayErrors = (errors) => {
        Object.keys(errors).map((field) => {
            this.showAlert(errors[field][0], 'error');
        });
    }

    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'dark',
        time: 0,
        transition: 'fade'
    }

    showAlert = (messageText, messageType) => {
        this.msg.show(messageText, {
            type: messageType
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="card card-body">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Username</label>
                            <input type="text" className="form-control"
                                name="username" placeholder="Username"
                                value={this.state.username}
                                onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input type="email" className="form-control"
                                name="email" placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Faction</label>
                        <select className="form-control" name="faction"
                            value={this.state.faction}
                            onChange={(e) => this.handleChange(e)}>
                            <option value="MEC">MEC</option>
                            <option value="China">China</option>
                            <option value="USMC">USMC</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <button type="submit" className="col btn btn-success">Sign up</button>
                    </div>
                </form>
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            </div>
        );
    }
}

export default SignUpForm;