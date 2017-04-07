import React from 'react';
import {
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

import BarChart from '../../../src/views/components/BarChart';

describe('BarChart', () => {

  let component;

  describe('SVG Rendering', () => {

    beforeEach(() => {
      component = renderIntoDocument(
        <BarChart data={ [{ id: 1, name: 'Hello World', score: 2 }] } />
      );
    });

    it('should render an svg', () => {
      const svg = scryRenderedDOMComponentsWithTag(component, 'svg');
      expect(svg.length).toBe(1);
    });

    it('should render an svg of width 960', () => {
      const svg = findRenderedDOMComponentWithTag(component, 'svg');
      expect(svg.getAttribute('width')).toBe('960');
    });

    it('should render an svg of length 500', () => {
      const svg = findRenderedDOMComponentWithTag(component, 'svg');
      expect(svg.getAttribute('height')).toBe('500');
    });

  });

  describe('Function callback', () => {

    let barClicked;

    beforeEach(() => {
      barClicked = false;

      const onBarClick = function () {
        barClicked = true;
      };

      component = renderIntoDocument(
        <BarChart
          data={ [{ id: 1, name: 'Hello World', score: 2 }] }
          onBarClick={ onBarClick }
        />
      );
    });

    it('should expect callback when a bar is pressed', () => {
      const svg = findRenderedDOMComponentWithTag(component, 'svg');
      const bars = svg.querySelectorAll('rect');

      // This is a workaround due to a discrepancy between the way jQuery and d3 handle events
      const click = new MouseEvent('click');
      bars[0].dispatchEvent(click);

      expect(barClicked).toBe(true);
    });

  });

  describe('Title Rendering', () => {

    beforeEach(() => {
      component = renderIntoDocument(
        <BarChart
          data={ [] }
          title={ 'Title' }
        />
      );
    });

    it('should render a title element', () => {
      const svg = findRenderedDOMComponentWithTag(component, 'svg');
      const text = svg.querySelectorAll('[id="bar-chart-title"]');
      expect(text.length).toBe(1);
    });

    it('should render a title element with the correct text', () => {
      const svg = findRenderedDOMComponentWithTag(component, 'svg');
      const text = svg.querySelector('[id="bar-chart-title"]');
      expect(text.innerHTML).toBe('Title');
    });

  });

  describe('Bar Rendering', () => {

    let data;

    beforeEach(() => {
      data = [{ id: 1, name: 'Hello World', score: 2 }];
      component = renderIntoDocument(
        <BarChart data={ data } />
      );
    });

    it('should render bar elements equal to the length of the data array', () => {
      const svg = findRenderedDOMComponentWithTag(component, 'svg');
      const bars = svg.querySelectorAll('rect');
      expect(bars.length).toBe(data.length);
    });

  });

});
