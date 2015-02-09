import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin';
import LayoutActions from '../../actions/LayoutActions';
import ColorPreview from '../shared/ColorPreview';

const Layout = React.createClass({
  mixins: [ImmutableRenderMixin],
  render() {
    let colorsCount = this.props.layout.colors.size;

    let colors = this.props.layout.colors.map(function(color) {
      return (
        <li>
          <ColorPreview color={color} />
        </li>
      )
    });

    return (
      <li>
        <section className="meta">
          <strong>{this.props.layout.width}x{this.props.layout.height}</strong>
          <ul className="colors">
            {colors.toArray()}
          </ul>
        </section>
        <button onClick={this.restoreLayout}>Restore</button>
      </li>
    )
  },
  restoreLayout() {
    LayoutActions.restoreLayout(this.props.layout);
  }
});

export default Layout;
