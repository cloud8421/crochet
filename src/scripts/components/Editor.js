import React from 'react';
import Colors from './editor/Colors';
import Actions from '../actions/ColorActions';

const Editor = React.createClass({
  render (){
    return (
      <div>
        <button onClick={this.addNewColor}>Add a new color</button>
        <Colors />
      </div>
    );
  },
  addNewColor() {
    Actions.addColor('#ABABAB');
  }
});

export default Editor;
