import React, { Component } from 'react';
import * as d3 from 'd3';

export default class BarChart extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = (nextProps, nextState) => {
			return this.props.data !== nextProps.data ||
				this.props.title !== nextProps.title;
		};
	};

	componentWillUpdate() {
		while(this.rootNode.firstChild) {
			this.rootNode.removeChild(this.rootNode.firstChild);
		}
	};

	renderBarChart() {
		let self = this;

		let svg = d3.select(self.rootNode);
		let margin = {top: 20, right: 20, bottom: 30, left: 40};
		let width = +svg.attr('width') - margin.left - margin.right;
		let height = +svg.attr('height') - margin.top - margin.bottom;

		svg.append('text')
			.attr('x', (width / 2))             
			.attr('y', margin.top)
			.attr('text-anchor', 'middle')  
			.style('font-size', '16px') 
			.style('text-decoration', 'underline')  
			.text(self.props.title);

		let x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
		let y = d3.scaleLinear().rangeRound([height, 0]);

		let g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		x.domain(self.props.data.map(d => d.name));
		y.domain([0, 10]);

		g.append('g')
			.attr('transform', 'translate(0,' + height + ')')
			.call(d3.axisBottom(x));

		g.append('g')
			.call(d3.axisLeft(y).ticks(10));

		let bars = g.selectAll('.bar')
			.data(self.props.data)
			.enter()
			.append('rect')
			.attr('class', 'bar');

		bars.attr('x', d => x(d.name))
			.attr('y', d => y(d.score))
			.attr('id', d => d.id)
			.attr('fill', d => {
				return d.id == self.props.selectedId ? 'red' : '';
			})
			.attr('width', x.bandwidth())
			.attr('height', d => height - y(d.score))
			.on('click', function() {
				self.props.onBarClick(d3.select(this).attr('id'));
			});

	};

	render() {
		setTimeout(() => this.renderBarChart(), 0);
		return <div>
			<svg ref={(node) => this.rootNode = node} width='960' height='500'></svg>
		</div>
	};
};