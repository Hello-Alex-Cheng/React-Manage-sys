import React, { Component } from 'react';
import { removeToken } from '../../utils/auth';
import { Row, Col } from 'antd';
import Utils from '../../utils';
import './index.less';

class Header extends Component {
	state = {
		username: 'alex.cheng',
		date: '',
		isLogin: true
	}
	componentDidMount() {
		setInterval(() => {
			const date = Utils.formateDate(new Date());
			this.setState({
				date
			})
		});
	}

	logout = () => {
		removeToken();
		window.location.reload()
	}

	render() {
		return (
			<div className="header">
				<Row className="header-top">
					<Col span={24}>
						<span>欢迎，{this.state.username}</span>
						<a onClick={this.logout}>退出</a>
					</Col>
				</Row>
				<Row className="breadCrumb">
					<Col span={4} className="breadCrumb-title">首页</Col>
					<Col span={20} className="weather">
						<span className="date">{this.state.date}</span>
						<span className="weather-detial">晴转多云</span>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Header;