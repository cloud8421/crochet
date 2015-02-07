import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin';

let toEm = function(i) {
  return `${i}em`;
}

const Layer = React.createClass({
  mixins: [ImmutableRenderMixin],
  render() {
    let style = {
      backgroundColor: this.props.color,
      zIndex: this.props.z,
      width: toEm(this.props.index),
      height: toEm(this.props.index),
      left: toEm(this.props.offset),
      top: toEm(this.props.offset)
    };

    return (
      <div className="layer" style={style} />
    )
  }
})

export default Layer;
