import React from 'react';
import ColorPicker from 'react-simple-colorpicker';
import ColorActions from '../../actions/ColorActions';
import ColorPreview from '../shared/ColorPreview';

let getInitialState = function() {
  return {
    editing: false
  }
}

const Color = React.createClass({
  getInitialState,
  render() {
    let palette;
    if (this.state.editing) {
      palette = <ColorPicker color={this.props.color} onChange={this.handleChange} />
    }

    return (
      <li onClick={this.toggleEditing} >
        {palette}
        <ColorPreview color={this.props.color} />
      </li>
    )
  },
  handleChange(color) {
    ColorActions.replaceColor(this.props.color, color);
  },
  toggleEditing() {
    this.setState({editing: !this.state.editing});
  }
});

export default Color;
