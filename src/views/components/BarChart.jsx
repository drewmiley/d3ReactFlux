import React, { Component } from 'react';

export default class BarChart extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = (nextProps, nextState) => {
			return this.props.data !== nextProps.data;
		};
	};
	render() {
		return <div>
			{this.props.data.map((d, i) => {
				return <p key={i}>{d}</p>
			})}
		</div>
	};
};