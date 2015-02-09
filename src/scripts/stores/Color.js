import Immutable from 'immutable';
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ColorActionTypes from "../constants/ColorConstants";
import LayoutActionTypes from "../constants/LayoutConstants";

let colors = new Immutable.List([
  '#FFE11A',
  '#FD7400',
  '#121212'
]);

let _addColor = function(color) {
  if (!colors.contains(color)) {
    colors = colors.push(color);
  }
}

let _replaceColor = function(oldColor, newColor) {
  let oldColorIndex = colors.indexOf(oldColor);
  colors = colors.update(oldColorIndex, function(_old) {
    return newColor;
  });
}

let _clearColors = function() {
  colors = colors.clear();
}

let _resetColors = function(newColors) {
  colors = newColors;
}

class _Color extends BaseStore {
  getColors() {
    return colors;
  }
};

const Color = new _Color();

Color.dispatchToken = AppDispatcher.register(function(payload) {
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
