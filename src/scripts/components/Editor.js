import React from 'react';
import ColorPicker from 'react-simple-colorpicker';

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
      </div>
    );
  },
  handleChange(color) {
    this.setState({color: color});
  }
});

export default Editor;
