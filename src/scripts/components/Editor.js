import React from 'react';
import Colors from './editor/Colors';
import ColorActions from '../actions/ColorActions';
import LayoutActions from '../actions/LayoutActions';
import ColorStore from '../stores/Color';

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
    let colorsCount = ColorStore.getColors().size;
    LayoutActions.generateLayout(64, colorsCount);
  }
});

export default Editor;
