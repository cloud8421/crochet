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
      <section className="editor">
        <div className="layout-controls">
          <label htmlFor="width">Width</label>
          <input type="number" id="width" value={this.state.width} onChange={this.handleWidthChange} />
          <button id="generate" onClick={this.generateLayout}>Generate layout</button>
        </div>
        <Colors />
      </section>
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
