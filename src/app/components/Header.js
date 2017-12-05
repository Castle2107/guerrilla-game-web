import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { getAuthenticatedUser, logOut } from '../../store';

class Header extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            loggedOut: false
        };
    }

	logout = () => {
		logOut();
		this.setState({ loggedOut: true });
	}

	render() {
		const { loggedOut } = this.state;
        if (loggedOut) {
			this.setState({ loggedOut: false });
            this.props.history.push('/');
			window.location.reload();
			return;
        }

		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">Guerrilla Game</Link>
				
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						{(getAuthenticatedUser()) && 
							<li className="nav-item">
								<Link className="nav-link" to="/profile">Profile</Link>
							</li>
						}

						{(getAuthenticatedUser()) && 				
							<li className="nav-item">
								<Link className="nav-link" to="/ranking">Ranking</Link>
							</li>
						}

						{(!getAuthenticatedUser()) && 
							<li className="nav-item">
								<Link className="nav-link" to="/settings">Settings</Link>
							</li>
						}
				
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

export default withRouter(Header);