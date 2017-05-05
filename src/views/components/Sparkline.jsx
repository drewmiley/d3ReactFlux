import React, { Component, PropTypes } from 'react';
import * as d3 from 'd3';

export default class Sparkline extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = (nextProps) => {
      return this.props.line !== nextProps.line;
    };
  }

  componentDidMount() {
    this.renderSparkline();
  }

  componentWillUpdate() {
    while (this.rootNode.firstChild) {
      this.rootNode.removeChild(this.rootNode.firstChild);
    }
  }

  componentDidUpdate() {
    this.renderSparkline();
  }

  renderSparkline() {
    const self = this;

    const svg = d3.select(self.rootNode);
    const margin = { top: 10, right: 10, bottom: 15, left: 20 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;

    const x = d3.scaleLinear()
      .rangeRound([0, width])
      .domain([0, self.props.line.length - 1]);
    const y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([d3.min(self.props.line), d3.max(self.props.line)]);

    const line = d3.line()
      .x((d, i) => x(i))
      .y(d => y(d));

    svg.append('path')
      .datum(self.props.line)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('d', line);
  }

  setRootNode(node) {
    this.rootNode = node;
  }

  render() {
    return (
      <svg ref={ node => this.setRootNode(node) } width="480" height="250" />
    );
  }
}

Sparkline.displayName = 'Sparkline';
Sparkline.propTypes = {
  line: PropTypes.array
};
