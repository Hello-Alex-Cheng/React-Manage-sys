import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

class RouterComp extends Component {
	state = {}
	render() {
		return (
			<Router>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/detail">Detail</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/another">another</Link>
					</li>
				</ul>
				{this.props.children}
			</Router>
		);
	}
}

export default RouterComp;