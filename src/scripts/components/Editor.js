import React from 'react';
import Colors from './editor/Colors';
import LayoutActions from '../actions/LayoutActions';
import ColorStore from '../stores/Color';
import LayoutStore from '../stores/Layout';

getState = function() {
  return {
    width: LayoutStore.getWidth()
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
    LayoutActions.setWidth(event.target.value);
  },
  generateLayout() {
    LayoutActions.generateLayout();
  }
});

export default Editor;
