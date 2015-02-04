import React from 'react';
import ColorStore from '../../stores/Color';
import ColorComponent from './Color';

let _getState = function() {
  return {
    colors: ColorStore.getColors()
  }
}

const Colors = React.createClass({
  getInitialState() {
    return _getState()
  },
  componentDidMount() {
    ColorStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(_getState());
  },
  render() {
    let colors = this.state.colors.map(function(color) {
      return <ColorComponent key={color} color={color} />
    });

    return (
      <ul>{colors}</ul>
    )
  }
});

export default Colors;
