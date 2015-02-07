import React from 'react';
import ColorPicker from 'react-simple-colorpicker';
import ColorActions from '../../actions/ColorActions';

let getInitialState = function() {
  return {
    editing: false
  }
}

const Color = React.createClass({
  getInitialState,
  render() {
    var palette;
    var style = {
      backgroundColor: this.props.color
    };

    if (this.state.editing) {
      palette = <ColorPicker color={this.props.color} onChange={this.handleChange} />
    }

    return (
      <li className="texture">
        {palette}
        <span className="texture-normal color-preview" style={style} onClick={this.toggleEditing}></span>
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
