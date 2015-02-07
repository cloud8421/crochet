import React from 'react';
import Colors from './editor/Colors';
import ColorActions from '../actions/ColorActions';
import LayoutActions from '../actions/LayoutActions';

const Editor = React.createClass({
  render (){
    return (
      <div>
        <button onClick={this.addNewColor}>Add a new color</button>
        <button onClick={this.generateLayout}>Generate layout</button>
        <Colors />
      </div>
    );
  },
  addNewColor() {
    ColorActions.addColor('#ABABAB');
  },
  generateLayout() {
    LayoutActions.generateLayout(64, 3);
  }
});

export default Editor;
