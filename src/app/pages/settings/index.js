import React, { Component } from "react";

class Settings extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<p className="lead text-center mt-5">
						Add the new IP that belongs to the server you want to connect to
					</p>
					<div className="row mt-5">
						<div className="col-4 mx-auto text-center">
							<form action="/">
								<div className="form-group">
									<label className="label" htmlFor="ip">IP:</label>
									<input type="text" className="form-control" id="ip" placeholder="Enter an IP address" name="ip" />
								</div>
								<button type="button" className="btn btn-primary">Connect</button>
							</form>	
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Settings;