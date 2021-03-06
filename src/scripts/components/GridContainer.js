import React from 'react';
import ColorStore from '../stores/Color';
import LayoutStore from '../stores/Layout';
import Grid from './Grid';

let getState = function() {
  return {
    colors: ColorStore.getColors(),
    layout: LayoutStore.getLayout(),
    width: LayoutStore.getWidth(),
    numberOfLayers: LayoutStore.getNumberOfLayers()
  }
}

const GridContainer = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    LayoutStore.addChangeListener(this._onChange);
    ColorStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render: function() {
    let result;
    if (this.state.numberOfLayers > this.state.colors.size) {
      return (
        <div className="notice">
          <p>You need to add more colours</p>
        </div>
      )
    } else {
      return (
        <Grid colors={this.state.colors}
              layout={this.state.layout}
              width={this.state.width}
              numberOfLayers={this.state.numberOfLayers} />
      )
    }
  }
});

export default GridContainer;
