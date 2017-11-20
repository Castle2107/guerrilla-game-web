import React from "react";
import { Link } from "react-router-dom";

class MyProfile extends React.Component {
	render(){
		return(
			<div className="centered">
				<h2>Company name</h2>
				<hr />

				<section>
					<div className="table-responsive">
						<table className="table table-hover">
							<thead>
								<tr>
									<th colspan="2">Resources</th>
								</tr>
							</thead>
							
							<tbody>
								<tr>
									<td>Oil</td>
									<td>0</td>
								</tr>
								<tr>
									<td>Money</td>
									<td>0</td>
								</tr>
								<tr>
									<td>People</td>
									<td>0</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				
				<hr />

				<section>
					<ul className="nav nav-tabs">
						<li className="active"><a data-toggle="tab" href="#defense">Defense</a></li>
						<li><a data-toggle="tab" href="#offense">Offense</a></li>
					</ul>

					<div className="tab-content">
						<div id="defense" className="tab-pane fade in active">
							<div className="table-responsive">
								<table className="table table-hover">									
									<tbody>
										<tr>
											<td>Attack</td>
											<td>10 <Link to="#">+</Link></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div id="offense" className="tab-pane fade">
							<div className="table-responsive">
								<table className="table table-hover">									
									<tbody>
										<tr>
											<td>Bunkers</td>
											<td>10 <Link to="#">+</Link></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default MyProfile;