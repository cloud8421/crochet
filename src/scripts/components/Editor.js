import React from 'react';
import Colors from './editor/Colors';
import LayoutActions from '../actions/LayoutActions';
import ColorStore from '../stores/Color';

const Editor = React.createClass({
  getInitialState() {
    return {
      width: 8
    }
  },
  render (){
    return (
      <div>
        <button onClick={this.generateLayout}>Generate layout</button>
        <label htmlFor="width">Width</label>
        <input type="text" id="width" value={this.state.width} onChange={this.handleWidthChange} />
        <Colors />
      </div>
    );
  },
  handleWidthChange: function(event) {
    this.setState({width: event.target.value});
  },
  generateLayout() {
    let colorsCount = ColorStore.getColors().size;
    let squaresCount = this.state.width * this.state.width;
    LayoutActions.generateLayout(squaresCount, colorsCount);
  }
});

export default Editor;
