import React from 'react';

const PureRenderMixin = React.addons.PureRenderMixin;

let toEm = function(i) {
  return `${i}em`;
}

let toPercent = function(i) {
  return `${i}%`;
}

const Layer = React.createClass({
  mixins: [PureRenderMixin],
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
