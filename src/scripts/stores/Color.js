import Immutable from 'immutable';
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ColorActionTypes from "../constants/ColorConstants";

let colors = new Immutable.List([]);

let _addColor = function(color) {
  colors = colors.push(color);
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

class _Color extends BaseStore {
  getColors() {
    return colors;
  }
};

const Color = new _Color();

Color.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

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
    default:
  }

});

export default Color;
