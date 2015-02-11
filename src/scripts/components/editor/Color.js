import React from 'react';
import ColorPicker from 'react-simple-colorpicker';
import ColorActions from '../../actions/ColorActions';
import LayoutActions from '../../actions/LayoutActions';
import ColorPreview from '../shared/ColorPreview';

const Color = React.createClass({
  render() {
    let palette;
    if (this.props.beingEdited) {
      palette = <div className="color-dialog">
                  <ColorPicker color={this.props.color} onChange={this.handleChange} />
                  <nav>
                    <button onClick={this.stopEditingColor}>Ok</button>
                    <button onClick={this.removeColor}>Delete</button>
                  </nav>
                </div>;
    }

    return (
      <li onClick={this.editColor} >
        {palette}
        <ColorPreview color={this.props.color} />
      </li>
    )
  },
  handleChange(color) {
    ColorActions.editColor(color);
    ColorActions.replaceColor(this.props.color, color);
  },
  editColor() {
    ColorActions.editColor(this.props.color);
  },
  removeColor() {
    ColorActions.removeColor(this.props.color);
    LayoutActions.generateLayout();
  },
  stopEditingColor(evt) {
    evt.stopPropagation();
    ColorActions.editColor(null);
  }
});

export default Color;
