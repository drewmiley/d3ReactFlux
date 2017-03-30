import React, { Component } from 'react';

export default class BarChart extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = (nextProps, nextState) => {
			return false;
		};
	};
	render() {
		return <button onClick={this.props.onDummyAction}>Click Me</button>
	};
};