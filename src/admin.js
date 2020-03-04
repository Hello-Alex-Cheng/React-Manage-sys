// admin 组件，整合项目的首页结构
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

import './style/common.less';

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}
	render() {
		return (
			<Row className="container">
				<Col span={4} className="nav-left">
					<NavLeft />
				</Col>
				<Col span={20} className="main">
					<Header {...this.props} />
					<Row className="content">
						{this.props.children}
					</Row>
					<Footer />
				</Col>
			</Row>
		);
	}
}

export default Admin;
