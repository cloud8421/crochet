import React from 'react';
import _ from 'lodash';
import Square from './Square';

const COLORS = [
  'blue',
  'red',
  'green',
  'yellow',
  'pink',
  'brown'
]

let getInitialState = function() {
  let randomized = _.times(36, _.partial(_.sample, COLORS, 6));
  return {
    colorTriplets: randomized
  }
}

const Grid = React.createClass({
  getInitialState,
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
