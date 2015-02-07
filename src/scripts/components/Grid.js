import React from 'react';
import _ from 'lodash';
import ColorStore from '../stores/Color';
import LayoutStore from '../stores/Layout';
import Square from './grid/Square';

let getState = function() {
  return {
    colors: ColorStore.getColors(),
    layout: LayoutStore.getLayout(),
    width: LayoutStore.getWidth()
  }
}

let combine = function(combination, colors) {
  return colors.zipWith(function(color, order) {
    return colors.get(order);
  }, combination);
}

const Grid = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    LayoutStore.addChangeListener(this._onChange);
    ColorStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render (){
    let totalWidth = this.state.width * this.state.colors.size;
    let style = {
      width: `${totalWidth}em`
    }
    let squares = this.state.layout.toArray().map(combination => {
      let colors = combine(combination, this.state.colors);
      return <Square colors={colors} />
    });

    return (
      <div className="grid" style={style}>
        {squares}
      </div>
    );
  }
});

export default Grid;
