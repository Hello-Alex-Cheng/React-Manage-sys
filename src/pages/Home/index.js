import React, { Component } from 'react';
import { ApiGet } from '../../api';
import './index.less';

class Home extends Component {
	state = {}
	render() {
		return (
			<div className="home-wrap">
				Welcome to my Home!
			</div>
		);
	}

	componentDidMount() {

		// ApiGet(`/type/index?currentPage=${1}&&groupType=${0}`).then(res => {
		// 	console.log(res);
		// }, err => {

		// })
	}
}

export default Home;