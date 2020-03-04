import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import { Card, Button } from "antd";

class ButtonComp extends Component {
	state = {}
	render() {
		return (
			<div>
				<Card title="基础按钮">
					<Button type="primary">AlexCc</Button>
					<Button>AlexCc</Button>
					<Button type="dashed">AlexCc</Button>
					<Button type="danger">AlexCc</Button>
				</Card>
			</div>
		);
	}
}

export default ButtonComp;