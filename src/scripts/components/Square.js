import React from 'react';

const Square = React.createClass({
  render (){
    return (
      <p>{this.props.colors.join(',')}</p>
    )
  }
});

export default Square;
