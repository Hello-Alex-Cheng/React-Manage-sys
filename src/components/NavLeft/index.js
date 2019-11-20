import React, { Component } from 'react';
import { Menu, Icon } from "antd";
import { NavLink } from 'react-router-dom';
import menuConfig from '../../config/menuConfig';
import './index.less'

const { SubMenu } = Menu;

class NavLeft extends Component {
	state = {
		menuTreeNode: []
	}

	componentDidMount() {
		// 模拟接口数据
		const menuTreeNode = this.renderMenu(menuConfig);
		setTimeout(() => {
			this.setState({
				menuTreeNode
			})
		}, 500);
	}

	// 渲染列表
	renderMenu = (menuConfig) => {
		return menuConfig.map(item => {
			if (item.children) {
				return <SubMenu key={item.key} title={<span>
					<Icon type="appstore" />
					<span>{item.title}</span>
				</span>
				}>
					{
						// 递归
						this.renderMenu(item.children)
					}
				</SubMenu>;
			} else {
				return <Menu.Item key={item.key}>
					<NavLink to={`/admin${item.key}`}>
						{item.title}
					</NavLink>
				</Menu.Item>;
			}
		})
	}

	render() {
		return (
			<div>
				<div className="logo">
					<img src="/assets/logo-ant.svg" alt="" />
					<h1>React MS</h1>
				</div>
				<Menu mode="vertical" theme="dark">
					{this.state.menuTreeNode}
				</Menu>
			</div>
		);
	}
}

export default NavLeft;