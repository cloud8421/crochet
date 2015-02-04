import React from 'react';
import ColorPicker from 'react-simple-colorpicker';
import Colors from './editor/Colors';

let getInitialState = function() {
  return {
    color: this.props.initialColor
  }
}

const Editor = React.createClass({
  getInitialState,
  render (){
    let previewStyle = {
      backgroundColor: this.state.color
    };

    return (
      <div>
        <ColorPicker color={this.state.color} onChange={this.handleChange} />
        <span className="color-preview" style={previewStyle}></span>
        <Colors />
      </div>
    );
  },
  handleChange(color) {
    this.setState({color: color});
  }
});

export default Editor;
