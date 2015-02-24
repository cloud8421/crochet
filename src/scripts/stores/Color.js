import Immutable from 'immutable';
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ColorActionTypes from "../constants/ColorConstants";
import LayoutActionTypes from "../constants/LayoutConstants";

let _generateRandomHex = () => {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

let colors = new Immutable.List([
  _generateRandomHex()
]);

let _addColor = (color) => {
  if (!colors.contains(color)) {
    colors = colors.push(color);
  }
}

let _replaceColor = (oldColor, newColor) => {
  let oldColorIndex = colors.indexOf(oldColor);
  colors = colors.update(oldColorIndex, _old => {
    return newColor;
  });
}

let _removeColor = (color) => {
  let colorIndex = colors.indexOf(color);
  colors = colors.delete(colorIndex);
}

let _clearColors = () => {
  colors = colors.clear();
}

let _resetColors = (newColors) => {
  colors = newColors;
}

class _Color extends BaseStore {
  getColors() {
    return colors;
  }
  generateRandomHex() {
   return _generateRandomHex()
  }
};

const Color = new _Color();

Color.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch (action.type) {
    case ColorActionTypes.ADD_COLOR:
      _addColor(action.color);
      Color.emitChange();
      break;
    case ColorActionTypes.REPLACE_COLOR:
      _replaceColor(action.data.oldColor, action.data.newColor);
      Color.emitChange();
      break;
    case ColorActionTypes.REMOVE_COLOR:
      _removeColor(action.color);
      Color.emitChange();
      break;
    case ColorActionTypes.CLEAR_COLORS:
      _clearColors();
      Color.emitChange();
      break;
    case LayoutActionTypes.RESTORE_LAYOUT:
      _resetColors(action.layout.colors);
      Color.emitChange();
      break;
    default:
  }

});

export default Color;
