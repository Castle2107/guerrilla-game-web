import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export class Header extends React.Component {
	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Guerrilla Game</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
			
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="my_profile">My Profile</NavItem>
						<NavItem eventKey={2} href="#">Ranking</NavItem>
					</Nav>
					
					<Nav pullRight>
						<NavItem eventKey={1} href="#">Settings</NavItem>
						<NavItem eventKey={2} href="#">Log Out</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}