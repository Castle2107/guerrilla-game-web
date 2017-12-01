import React, { Component } from 'react';

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
        this.props.onLoginSubmit(this.state.email);
    }

    render() {
        let email = this.state.email;
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} className="card card-body">
                    <div className="form-group">
                        <label className="col-form-label">Email</label>
                        <input type="email" className="form-control" 
                            name="email" placeholder="Email"
                            value={email}
                            onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="form-row">
                        <button className="col btn btn-success">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;