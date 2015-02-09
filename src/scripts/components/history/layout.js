import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin';
import LayoutActions from '../../actions/LayoutActions';

const Layout = React.createClass({
  mixins: [ImmutableRenderMixin],
  render() {
    let colorsCount = this.props.layout.colors.size;

    return (
      <li>
        <span>{colorsCount} colors</span>
        <button onClick={this.restoreLayout}>Restore</button>
      </li>
    )
  },
  restoreLayout() {
    LayoutActions.restoreLayout(this.props.layout);
  }
});

export default Layout;
