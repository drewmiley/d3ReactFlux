import React, { Component, PropTypes } from 'react';

export default class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = () => {
      return false;
    };
  }
  render() {
    return (
      <button onClick={ this.props.onClick }>{ this.props.buttonText }</button>
    );
  }
}

ActionButton.displayName = 'ActionButton';
ActionButton.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};
