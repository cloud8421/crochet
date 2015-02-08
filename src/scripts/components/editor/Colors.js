import React from 'react';
import ColorStore from '../../stores/Color';
import ColorActions from '../../actions/ColorActions';
import LayoutActions from '../../actions/LayoutActions';
import ColorComponent from './Color';

let getRandomColor = function() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

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
    ColorActions.addColor(getRandomColor());
    LayoutActions.generateLayout();
  },
  render() {
    let colors = this.state.colors.map(function(color) {
      return <ColorComponent color={color} key={color} />
    });

    return (
      <section className="colors-container">
        <ul className='colors'>
          {colors}
          <li className="add-new">
            <button onClick={this.addNewColor}>Add a new color</button>
          </li>
        </ul>
      </section>
    )
  }
});

export default Colors;
