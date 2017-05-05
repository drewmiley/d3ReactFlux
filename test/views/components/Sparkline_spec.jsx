import React from 'react';
import {
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

import Sparkline from '../../../src/views/components/Sparkline';

describe('Sparkline', () => {

  let component;

  describe('SVG Rendering', () => {

    beforeEach(() => {
      component = renderIntoDocument(
        <Sparkline line={ [1, 2, 3] } />
      );
    });

    it('should render an svg', () => {
      const svg = scryRenderedDOMComponentsWithTag(component, 'svg');
      expect(svg.length).toBe(1);
    });

    it('should render an svg of width 480', () => {
      const svg = findRenderedDOMComponentWithTag(component, 'svg');
      expect(svg.getAttribute('width')).toBe('480');
    });

    it('should render an svg of length 250', () => {
      const svg = findRenderedDOMComponentWithTag(component, 'svg');
      expect(svg.getAttribute('height')).toBe('250');
    });

  });

});
