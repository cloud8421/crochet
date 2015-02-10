import React from 'react';
import ColorPicker from 'react-simple-colorpicker';
import ColorActions from '../../actions/ColorActions';
import ColorPreview from '../shared/ColorPreview';

const Color = React.createClass({
  render() {
    let palette;
    if (this.props.beingEdited) {
      palette = <ColorPicker color={this.props.color} onChange={this.handleChange} />
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
  }
});

export default Color;
