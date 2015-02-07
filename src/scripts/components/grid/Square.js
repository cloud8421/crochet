import React from 'react/addons';
import Layer from './Layer';
import Udon from 'udon';

const PureRenderMixin = React.addons.PureRenderMixin;

let range = function(i){
  return i?range(i-1).concat(i):[]
};

let buildLayers = function(colors) {
  let ids = range(colors.length);
  return Udon.zip(colors, ids);
}

const Square = React.createClass({
  mixins: [PureRenderMixin],
  render (){
    let length = this.props.colors.length;
    let colorsWithIndex = buildLayers(this.props.colors);
    let style = {
      width: `${length}em`,
      height: `${length}em`
    }
    let layers = colorsWithIndex.map(function([color, index]) {
      let z = length - index;
      return <Layer color={color}
                    index={index}
                    z={z}
                    offset={z / 2} />
    });

    return (
      <div className="square" style={style}>
        {layers}
      </div>
    )
  }
});

export default Square;
