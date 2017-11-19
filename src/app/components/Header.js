import React from "react";

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
					<a className="navbar-brand" href="/">Guerrilla Game</a>
					</div>

					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><a href="my_profile">My Profile</a></li>
							<li><a href="ranking">Ranking</a></li>
						</ul>
						
						<ul className="nav navbar-nav navbar-right">
							<li><a href="settings">Settings</a></li>
							<li><a href="#">LogOut</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;