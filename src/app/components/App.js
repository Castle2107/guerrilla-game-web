import React from "react";
import Header from "./Header";

const App = (props) => ({

	/*constructor(props){
		super(props);
		console.log(this.props);
	}*/

	render() {
		return (
			<div>

				<Header />

				<div className="container">
					{this.props.children}
				</div>

			</div>
		);
	}
});

export default App;
