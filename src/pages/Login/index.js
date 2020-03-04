import React, { Component } from 'react';

import { setToken } from '../../utils/auth';

class Login extends Component {
	state = {}
	render() {
		return (
			<div>
				<button onClick={() => {
					setToken();
					this.props.history.push('/admin');
				}}>登录</button>
			</div>
		);
	}
}

export default Login;