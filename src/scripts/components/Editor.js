import React from 'react';
import Colors from './editor/Colors';
import LayoutActions from '../actions/LayoutActions';
import ProjectActions from '../actions/ProjectActions';
import ColorStore from '../stores/Color';
import LayoutStore from '../stores/Layout';
import ProjectStore from '../stores/Project';

getState = function() {
  return {
    width: LayoutStore.getWidth(),
    height: LayoutStore.getHeight(),
    numberOfLayers: LayoutStore.getNumberOfLayers(),
    name: ProjectStore.getName()
  }
}

const Editor = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    ProjectStore.addChangeListener(this._onChange);
    LayoutStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render (){
    return (
      <section className="editor">
        <div className="name-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange} />
        </div>
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
          <div className="number-of-layers-control">
            <label htmlFor="number-of-layers">Layers</label>
            <input type="number" id="number-of-layers" value={this.state.numberOfLayers} onChange={this.handleNumberOfLayersChange} />
          </div>
          <button id="generate" onClick={this.generateLayout}>Generate</button>
        </div>
        <h2>Colors</h2>
        <Colors />
      </section>
    );
  },
  handleNameChange: function(event) {
    ProjectActions.setName(event.target.value);
  },
  handleWidthChange: function(event) {
    LayoutActions.setWidth(event.target.value);
  },
  handleHeightChange: function(event) {
    LayoutActions.setHeight(event.target.value);
  },
  handleNumberOfLayersChange: function(event) {
    LayoutActions.setNumberOfLayers(event.target.value);
  },
  generateLayout() {
    LayoutActions.generateLayout();
  }
});

export default Editor;
