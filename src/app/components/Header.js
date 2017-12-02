import React from "react";
import { Link } from "react-router-dom";
import { getAuthenticatedUser, logOut } from '../../store';

class Header extends React.Component {

	logout = () => {
		logOut();
		// setTimeout(() => {
		// 	this.props.history.push('/');
		// });
	}	

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">Guerrilla Game</Link>
				
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/dashboard">Dashboard</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/profile">Profile</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/ranking">Ranking</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/settings">Settings</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">Assault Reports</Link>
						</li>
						{(getAuthenticatedUser()) && 
							<li className="nav-item">
								<Link className="nav-link" to="#" onClick={() => this.logout()}>Logout</Link>
							</li>
						}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;