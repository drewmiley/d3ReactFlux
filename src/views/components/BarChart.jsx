import React, { Component, PropTypes } from 'react';
import * as d3 from 'd3';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = (nextProps) => {
      return this.props.data !== nextProps.data ||
        this.props.title !== nextProps.title ||
        this.props.selectedId !== nextProps.selectedId;
    };
  }

  componentDidMount() {
    this.renderBarChart();
  }

  componentWillUpdate() {
    while (this.rootNode.firstChild) {
      this.rootNode.removeChild(this.rootNode.firstChild);
    }
  }

  componentDidUpdate() {
    this.renderBarChart();
  }

  renderBarChart() {
    const self = this;

    const svg = d3.select(self.rootNode);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;

    svg.append('text')
      .attr('x', (width / 2))
      .attr('y', margin.top)
      .attr('id', 'bar-chart-title')
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('text-decoration', 'underline')
      .text(self.props.title);

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
    const y = d3.scaleLinear().rangeRound([height, 0]);

    const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    x.domain(self.props.data.map(d => d.name));
    y.domain([0, 10]);

    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .call(d3.axisLeft(y).ticks(10));

    const bars = g.selectAll('.bar')
      .data(self.props.data)
      .enter()
      .append('rect')
      .attr('class', 'bar');

    bars.attr('x', d => x(d.name))
      .attr('y', d => y(d.score))
      .attr('id', d => d.id)
      .attr('fill', d => {
        return d.id === parseInt(self.props.selectedId, 10) ? 'red' : '';
      })
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.score))
      .on('click', function () {
        self.props.onBarClick(d3.select(this).attr('id'));
      });

  }

  setRootNode(node) {
    this.rootNode = node;
  }

  render() {
    return (
      <svg ref={ node => this.setRootNode(node) } width="960" height="500" />
    );
  }
}

BarChart.displayName = 'BarChart';
BarChart.propTypes = {
  data: PropTypes.array,
  onBarClick: PropTypes.func,
  selectedId: PropTypes.number,
  title: PropTypes.string
};
