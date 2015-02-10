import React from 'react';
import Colors from './editor/Colors';
import LayoutActions from '../actions/LayoutActions';
import ColorStore from '../stores/Color';
import LayoutStore from '../stores/Layout';

getState = function() {
  return {
    width: LayoutStore.getWidth(),
    height: LayoutStore.getHeight()
  }
}

const Editor = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    LayoutStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render (){
    return (
      <section className="editor">
        <h2>Dimensions</h2>
        <div className="layout-controls">
          <div className="width-control">
            <label htmlFor="width">Width</label>
            <input type="number" id="width" value={this.state.width} onChange={this.handleWidthChange} />
          </div>
          <div className="height-control">
            <label htmlFor="height">Height</label>
            <input type="number" id="height" value={this.state.height} onChange={this.handleHeightChange} />
          </div>
          <button id="generate" onClick={this.generateLayout}>Generate layout</button>
        </div>
        <h2>Colors</h2>
        <Colors />
      </section>
    );
  },
  handleWidthChange: function(event) {
    LayoutActions.setWidth(event.target.value);
  },
  handleHeightChange: function(event) {
    LayoutActions.setHeight(event.target.value);
  },
  generateLayout() {
    LayoutActions.generateLayout();
  }
});

export default Editor;
