import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Login from './pages/Login';
import Buttons from './pages/ui/Buttons';
import Modals from './pages/ui/Modals';
import Loading from './pages/ui/Loading';
import Notification from './pages/ui/Notification';
import FormLogin from './pages/Form/Login'
import Home from './pages/Home';
import Admin from './Admin';

class IRouter extends Component {
	state = {}
	render() {
		return (
			<Router>
				<Route path='/' exact render={() => <Redirect to='/admin' />} />
				<Route path='/login' component={Login} />
				<Route path='/admin' render={(props) =>
					<Admin>
						<Route path={`${props.match.path}/home`} component={Home} />
						<Route path={`${props.match.path}/form/login`} component={FormLogin} />
						<Route path={`${props.match.path}/ui/buttons`} component={Buttons} />
						<Route path={`${props.match.path}/ui/modals`} component={Modals} />
						<Route path={`${props.match.path}/ui/loadings`} component={Loading} />
						<Route path={`${props.match.path}/ui/notification`} component={Notification} />
					</Admin>
				} />
			</Router>
		);
	}
}

export default IRouter;