import React, { Component } from "react";
import { getBase_URL, setBase_URL } from '../../../store';

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newIp: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		setBase_URL(this.state.newIp);
	}

	handleChange = (ip) => {
		this.setState({
			newIp: ip
		})
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="jumbotron">
						<p className="lead text-center">
							Add the new IP that belongs the server you want to connect to
						</p>
						<hr />
						<div className="row">
							<div className="col-4 mx-auto text-center">
								<h4>Current IP:</h4>
								<h4>
									<span className="badge badge-primary">
										{getBase_URL()}
									</span>
								</h4>
							</div>
						</div>
					</div>
					<div className></div>
					<div className="row mt-5">
						<div className="col-4 mx-auto text-center">
							<form onSubmit={(e) => this.handleSubmit(e)} action="/">
								<div className="form-group">
									<label className="label" htmlFor="ip">IP:</label>
									<input type="text" className="form-control" id="ip"
										value={this.state.newIp} 
										onChange={(e) => this.handleChange(e.target.value)}
										name="ip" placeholder="Enter an IP address" />
								</div>
								<button type="button" className="btn btn-primary"
									onClick={(e) => this.handleSubmit(e)}>
									Connect
								</button>
							</form>	
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Settings;