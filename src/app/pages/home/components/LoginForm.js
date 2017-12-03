import React, { Component } from 'react';
import { login } from '../../../services/api/Auth';
import { logIn } from '../../../../store';
import AlertContainer from 'react-alert';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    handleChange(e) {
        this.setState({
           email: e.target.value 
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        login(this.state.email)
            .then(response => {
                console.log(response);
                logIn(response);
                this.props.onCorrectLogIn();
            })
            .catch(error => {
                console.log(error);
                if (error.data.errors)
                    this.showAlert(`${error.data.errors}. Try again!`, 'error');
                else
                    this.showAlert('The provided info do not match our records', 'error');
            })
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
                <form onSubmit={(e) => this.handleSubmit(e)} className="card card-body">
                    <div className="form-group">
                        <label className="col-form-label">Email or Username</label>
                        <input type="text" className="form-control" 
                            id="email" name="email" placeholder="Email / Username"
                            value={this.state.email}
                            onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="form-row">
                        <button className="col btn btn-success">Login</button>
                    </div>
                </form>
                <hr />
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            </div>
        );
    }
}

export default LoginForm;