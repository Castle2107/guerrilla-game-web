import React from "react";
import "../style/main.css";

class Home extends React.Component{
	render(){
		return(
			<form className="form centered textCenter" action="/">
				<div className="form-group">
					<label className="label" htmlFor="email">Email:</label>
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
				</div>
			
				<button type="button" className="btn btn-success">Sign</button>
				<button type="button" className="btn btn-primary">Login</button>
			</form>
		);
	}
}

export default Home;