import React, { Component } from 'react';
import { AuthLogin } from './utils/auth'
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Login from './pages/Login';
import Buttons from './pages/ui/Buttons';
import Modals from './pages/ui/Modals';
import Loading from './pages/ui/Loading';
import Notification from './pages/ui/Notification';
import FormLogin from './pages/Form/Login'
import Home from './pages/Home';
import Admin from './admin';

class IRouter extends Component {
	state = {}
	render() {
		return (
			<Router>
				<Route path='/' exact render={() => <Redirect to='/admin' />} />
				<Route path='/login' component={Login} render={props => {
					if (AuthLogin()) {
						return <Redirect to='/admin' />;
					}

					return <Login {...props} />
				}} />
				<Route path='/admin' render={(props) => {
					if (AuthLogin()) {
						return (
							<Admin {...props}>
								<Route path={`${props.match.path}/home`} component={Home} />
								<Route path={`${props.match.path}/form/login`} component={FormLogin} />
								<Route path={`${props.match.path}/ui/buttons`} component={Buttons} />
								<Route path={`${props.match.path}/ui/modals`} component={Modals} />
								<Route path={`${props.match.path}/ui/loadings`} component={Loading} />
								<Route path={`${props.match.path}/ui/notification`} component={Notification} />
							</Admin>
						);
					}
					return <Redirect to='/login' />
				}
				} />
			</Router>
		);
	}
}

export default IRouter;