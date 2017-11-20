import React from "react";
import { Link } from "react-router-dom";

class Ranking extends React.Component {

	constructor(){
		super();
		
		/*
			this.state = {
				rank = props.initialRank;
			}
		*/

		this.ranking = [
			{rank: 1, company: "amese"},
			{rank: 2, company: "jdoe"},
			{rank: 3, company: "destructor"},
			{rank: 4, company: "chavo"},
			{rank: 5, company: "slayer"},
			{rank: 6, company: "dominator"}
		]
	}

	render(){
		return(
			<div className="centered">
				<h2>Ranking</h2>
				<hr /><hr />

				<section>
					<div className="table-responsive">
						<table className="table table-hover">
							<thead>
								<tr>
									<th>Rank</th>
									<th>Company</th>
									<th></th>
								</tr>
							</thead>
							
							<tbody>
								{
									this.ranking.map((rank) => 
										<tr>
											<td>{rank.rank}</td>
											<td>{rank.company}</td>
											<td><Link to="results">Attack</Link></td>
										</tr>
									)
								}
							</tbody>
						</table>
					</div>
				</section>
			</div>
		);
	}
}

/*Ranking.propTypes = {
	initialRank: React.PropTypes.number,
};*/

export default Ranking;