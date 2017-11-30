import React from "react";
import "../style/main.css";
import { sign } from '../axios';
import AlertContainer from 'react-alert'

class Home extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			email: "",
			username: "",
			faction: "China"
		};
	}

	async onSign(){
		let res = await sign(this.state.email, this.state.username, this.state.faction);
		
		if (res.message !== undefined) {
			if (res.response.data.errors.email !== undefined) {
				this.showAlert(res.response.data.errors.email[0], 'error');
			}
			if (res.response.data.errors.username !== undefined) {
				this.showAlert(res.response.data.errors.username[0], 'error');
			}
		}else{
			if (res.status === 200 && res.statusText === "OK") {
				this.showAlert(`User ${res.data.username} was added successfully`, 'success');
			}
		}
	}

	onEmailSignChange(evt){
		this.setState({
			email: evt.target.value
		});
	}

	onUsernameSignChange(evt){
		this.setState({
			username: evt.target.value
		});
	}

	onFactionSignChange(evt){
		this.setState({
			faction: evt.target.value
		});
	}

	alertOptions = {
		offset: 14,
		position: 'bottom left',
		theme: 'dark',
		time: 3000,
		transition: 'fade'
	}

	showAlert = (messageText, messageType) => {
		this.msg.show(messageText, {
			type: messageType
		});
	}

	render(){
		return(
			<div>
				<section className="centered">
					<ul className="nav nav-tabs">
						<li className="active"><a data-toggle="tab" href="#login">Login</a></li>
						<li><a data-toggle="tab" href="#sign">Sign</a></li>
					</ul>

					<div className="tab-content">
						<div id="login" className="tab-pane fade in active">
							<form className="form" action="/">
								<div className="form-group">
									<label className="label" htmlFor="email">Email</label>
									<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
								</div>
								
								<div className="textCenter">
									<button type="button" className="btn btn-primary">Login</button>
								</div>
							</form>
						</div>

						<div id="sign" className="tab-pane fade">
							<form className="form" action="/">
								<div className="form-group">
									<label className="label" htmlFor="emailSign">Email</label>
									<input type="email" onChange={evt => this.onEmailSignChange(evt)} className="form-control" id="emailSign" placeholder="Enter email" name="emailSign" />
								</div>

								<div className="form-group">
									<label className="label" htmlFor="usernameSign">Username</label>
									<input type="text" onChange={evt => this.onUsernameSignChange(evt)} className="form-control" id="usernameSign" placeholder="Enter username" name="usernameSign" />
								</div>

								<div className="form-group">
									<label className="label" htmlFor="factionSign">Faction</label>
									<select onChange={evt => this.onFactionSignChange(evt)}  className="form-control" id="factionSign">
										<option>China</option>
										<option>MEC</option>
										<option>USMC</option>
									</select>
								</div>

								<div className="textCenter">
									<button onClick={() => this.onSign()} type="button" className="btn btn-primary">Sign</button>
								</div>
							</form>
						</div>
					</div>
				</section>
				
				<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

			</div>
		);
	}
}

Home.propTypes = {};

export default Home;