import React from 'react';

const PureRenderMixin = React.addons.PureRenderMixin;

const Layer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    let style = {
      backgroundColor: this.props.color,
      width: '1em',
      height: '1em'
    };

    return (
      <div className="layer" style={style} />
    )
  }
})

export default Layer;
