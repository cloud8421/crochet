import React from 'react';
import _ from 'lodash';
import ColorStore from '../stores/Color';
import Square from './Square';

let getState = function() {
  let colors = ColorStore.getColors().toArray();

  console.log(colors);

  let randomized = _.times(36, _.partial(_.sample, colors, 6));
  return {
    colorTriplets: colors
  }
}

const Grid = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    ColorStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render (){
    let length = this.state.colorTriplets.length;
    let style = {
      width: `${length}em`
    }
    let squares = this.state.colorTriplets.map(colors => {
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
