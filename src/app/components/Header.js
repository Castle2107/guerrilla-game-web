import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse bg-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Menu</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					<Link className="navbar-brand" to="/">Guerrilla Game</Link>

					</div>

					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><Link to="my_profile">My Profile</Link></li>
							<li><Link to="ranking">Ranking</Link></li>
						</ul>
						
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="settings">Settings</Link></li>
							<li><Link to="#">LogOut</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;