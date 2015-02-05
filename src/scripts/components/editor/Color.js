import React from 'react';
import ColorPicker from 'react-simple-colorpicker';
import ColorActions from '../../actions/ColorActions';

let getInitialState = function() {
  return {
    editing: false,
    color: this.props.color
  }
}

const Color = React.createClass({
  getInitialState,
  render() {
    var palette;
    var style = {
      backgroundColor: this.state.color
    };

    if (this.state.editing) {
      palette = <ColorPicker color={this.state.color} onChange={this.handleChange} />
    }

    return (
      <li>
        {palette}
        <span className="color-preview" style={style} onClick={this.toggleEditing}></span>
      </li>
    )
  },
  handleChange(color) {
    ColorActions.replaceColor(this.state.color, color);
  },
  toggleEditing() {
    this.setState({editing: !this.state.editing});
  }
});

export default Color;
