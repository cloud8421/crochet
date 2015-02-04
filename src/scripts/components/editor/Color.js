import React from 'react/addons';

const PureRenderMixin = React.addons.PureRenderMixin;

const Color = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    var style = {
      backgroundColor: this.props.color
    };

    return (
      <li style={style}></li>
    )
  }
});

export default Color;
