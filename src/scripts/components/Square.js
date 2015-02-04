import React from 'react/addons';
import Layer from './Layer';

const PureRenderMixin = React.addons.PureRenderMixin;

const Square = React.createClass({
  mixins: [PureRenderMixin],
  render (){
    let layers = this.props.colors.map(function(color) {
      return <Layer color={color} />
    });

    return (
      <div className="square">
        {layers}
      </div>
    )
  }
});

export default Square;
