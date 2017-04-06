import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';

import ActionButton from '../../../src/views/components/ActionButton';

describe('ActionButton', () => {

  let component;

  describe('Rendering', () => {

    beforeEach(() => {
      component = renderIntoDocument(
        <ActionButton />
      );
    });

    it('should render a button', () => {
      const button = scryRenderedDOMComponentsWithTag(component, 'button');
      expect(button.length).toBe(1);
    });

  });

  describe('Function callback', () => {

    let buttonClicked;

    beforeEach(() => {
      buttonClicked = false;

      const onClick = function () {
        buttonClicked = true;
      };

      component = renderIntoDocument(
        <ActionButton onClick={ onClick } />
      );

    });

    it('should expect callback when the button is pressed', () => {
      const button = scryRenderedDOMComponentsWithTag(component, 'button');
      Simulate.click(button[0]);
      expect(buttonClicked).toBe(true);
    });

  });

});
