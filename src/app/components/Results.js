import React from "react";

class Results extends React.Component {
	render(){
		return(
			<div className="centered">
				<h2 className="textCenter">You Win!!</h2>
				<hr /><hr />

				<section>
					<div className="table-responsive">
						<h3>Team 1 Result</h3>
						<table className="table table-hover">
							<tbody>
								<tr>
									<td>a</td>
									<td>b</td>
									<td>a</td>
									<td>b</td>
									<td>a</td>
								</tr>

								<tr>
									<td>a</td>
									<td>b</td>
									<td>a</td>
									<td>b</td>
									<td>a</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				<section>
					<div className="table-responsive">
						<h3>Team 2 Result</h3>
						<table className="table table-hover">
							<tbody>
								<tr>
									<td>a</td>
									<td>b</td>
									<td>a</td>
									<td>b</td>
									<td>a</td>
								</tr>

								<tr>
									<td>a</td>
									<td>b</td>
									<td>a</td>
									<td>b</td>
									<td>a</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		);
	}
}

export default Results;