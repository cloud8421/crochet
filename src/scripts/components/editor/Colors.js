import React from 'react';
import ColorStore from '../../stores/Color';
import ColorComponent from './Color';

let getState = function() {
  return {
    colors: ColorStore.getColors().toArray()
  }
}

const Colors = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    ColorStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render() {
    let colors = this.state.colors.map(function(color) {
      return <ColorComponent color={color} />
    });

    return (
      <ul>{colors}</ul>
    )
  }
});

export default Colors;
