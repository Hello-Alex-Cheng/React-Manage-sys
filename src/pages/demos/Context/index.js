import React, { Component } from 'react';
import PropsTypes from 'prop-types';

const Content = (props, { user }) => {
	return (
		<div>
			<h1>username: {user.name}</h1>
			{props.children}
		</div>
	);
}

Content.contextTypes = {
	user: PropsTypes.object
}

const Header = () => {
	return (
		<Content>React Context API</Content>
	)
}

class ContextComponent extends Component {
	static childContextTypes = {
		user: PropsTypes.object
	}

	getChildContext() {
		return {
			user: {
				name: 'alex.cheng',
				age: 24
			}
		}
	}
	render() {
		return (
			<Header />
		);
	}
}

export default ContextComponent;