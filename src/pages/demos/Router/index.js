import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';

const Detail = ({ match }) => {
	console.log('match', match);
	return (
		<div>
			<h2>hello, this is detail component</h2>
			<Link to={`${match.path}/show`}>Show Detail</Link>
			<Route path={`${match.path}/show`} render={() => <h1>hello, alex.cheng</h1>} />
		</div>
	);
}

class RouterComp extends Component {
	state = {}
	render() {
		return (
			<Router>
				<Home>
					<Switch>
						<Route exact path="/" render={() => <h1>HOME</h1>} />
						<Route path="/detail" component={Detail} />
						<Route path="/about" render={() => <h1>ABOUT</h1>} />
						<Route render={() => <h1>Not found 404</h1>} />
					</Switch>
				</Home>
			</Router>
		);
	}
}

export default RouterComp;