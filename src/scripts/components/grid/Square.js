import React from 'react/addons';
import Layer from './Layer';
import Immutable from 'immutable';
import ImmutableRenderMixin from 'react-immutable-render-mixin';

let buildLayers = function(colors) {
  let ids = Immutable.Range(1, colors.size + 1);
  return colors.zip(ids);
}

const Square = React.createClass({
  mixins: [ImmutableRenderMixin],
  render (){
    let length = this.props.colors.size;
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
        {layers.toArray()}
      </div>
    )
  }
});

export default Square;
