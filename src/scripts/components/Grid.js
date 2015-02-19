import React from 'react';
import Square from './grid/Square';

let combine = function(combination, colors) {
  return colors.zipWith(function(color, order) {
    return colors.get(order);
  }, combination);
}

const Grid = React.createClass({
  render (){
    let totalWidth = this.props.width * this.props.numberOfLayers;
    let style = {
      width: `${totalWidth}em`
    }
    let squares = this.props.layout.map(combination => {
      let colors = combine(combination, this.props.colors);
      return <Square colors={colors} />
    });

    return (
      <section className="grid-container">
        <div className="grid" style={style}>
          {squares.toArray()}
        </div>
      </section>
    );
  }
});

export default Grid;
