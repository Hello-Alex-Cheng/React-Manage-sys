import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login';
import Buttons from './pages/ui/Buttons';
import Home from './pages/Home';
import Admin from './Admin';

class IRouter extends Component {
	state = {}
	render() {
		return (
			<Router>
				<Route path='/login' component={Login} />
				<Route path='/admin' render={(props) =>
					<Admin>
						<Route path={`${props.match.path}/home`} component={Home} />
						<Route path={`${props.match.path}/ui/buttons`} component={Buttons} />
					</Admin>
				} />
			</Router>
		);
	}
}

export default IRouter;