import React from 'react/addons';

const PureRenderMixin = React.addons.PureRenderMixin;

const Square = React.createClass({
  mixins: [PureRenderMixin],
  render (){
    return (
      <p>{this.props.colors.join(',')}</p>
    )
  }
});

export default Square;
