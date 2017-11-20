import React from "react";

class Settings extends React.Component {
	render(){
		return(
			<form className="form centered textCenter" action="/">
				<div className="form-group">
					<label className="label" htmlFor="ip">IP:</label>
					<input type="text" className="form-control" id="ip" placeholder="Enter an IP address" name="ip" />
				</div>
			
				<button type="button" className="btn btn-primary">Connect</button>
			</form>
		);
	}
}

export default Settings;