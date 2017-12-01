import React, { Component } from 'react';
import {signUp} from '../services/api/Auth';

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
                this.props.history.push('/profile');
            })
            .catch((errors) => {
                console.log(errors, 'shit');
                this.setState({
                    errors: errors.errors
                })
            });
    }

    render() {
        let email = this.state.email;
        let username = this.state.username;
        let faction = this.state.faction;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="card card-body">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Username</label>
                            <input type="text" className="form-control"
                                name="username" placeholder="Username"
                                value={username}
                                onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input type="email" className="form-control"
                                name="email" placeholder="Email"
                                value={email}
                                onChange={(e) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Faction</label>
                        <select className="form-control" name="faction"
                            value={faction}
                            onChange={(e) => this.handleChange(e)}>
                            <option value="MEC">MEC</option>
                            <option value="China">China</option>
                            <option value="ISMC">ISMC</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <button type="submit" className="col btn btn-success">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;