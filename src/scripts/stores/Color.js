import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";

let colors = [];

let _addColor = function(color) {
  colors.push(color);
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
    case ActionTypes.ADD_COLOR:
      _addColor(action.color);
      Color.emitChange();
      break;
    default:
  }

});

export default Color;
