import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin';

const Layout = React.createClass({
  mixins: [ImmutableRenderMixin],
  render() {
    let colorsCount = this.props.layout.colors.size;

    return (
      <li>{colorsCount} colors</li>
    )
  }
});

export default Layout;
