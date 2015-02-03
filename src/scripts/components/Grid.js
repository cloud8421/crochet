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
  let randomized = _.times(50, _.partial(_.sample, COLORS, 3));
  return {
    colorTriplets: randomized
  }
}

const Grid = React.createClass({
  getInitialState,
  render (){
    let squares = this.state.colorTriplets.map(colors => {
      return <Square colors={colors} />
    });

    return (
      <div className="grid">
        {squares}
      </div>
    );
  }
});

export default Grid;
