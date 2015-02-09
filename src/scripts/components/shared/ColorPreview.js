import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin';

const ColorPreview = React.createClass({
  mixins: [ImmutableRenderMixin],
  render() {
    let style = {
      backgroundColor: this.props.color
    };

    return <span className="color-preview" style={style}></span>
  }
});

export default ColorPreview;
