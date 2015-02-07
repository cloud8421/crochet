import React from 'react';
import ColorStore from '../../stores/Color';
import ColorActions from '../../actions/ColorActions';
import ColorComponent from './Color';

let getState = function() {
  return {
    colors: ColorStore.getColors().toArray()
  }
}

const Colors = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    ColorStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  addNewColor() {
    ColorActions.addColor('#ABABAB');
  },
  render() {
    let colors = this.state.colors.map(function(color) {
      return <ColorComponent color={color} />
    });

    return (
      <ul className='colors'>
        {colors}
        <li className="add-new">
          <button onClick={this.addNewColor}>Add a new color</button>
        </li>
      </ul>
    )
  }
});

export default Colors;
