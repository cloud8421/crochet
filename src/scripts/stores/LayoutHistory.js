import Immutable from "immutable";
import BaseStore from "./_base";
import LayoutStore from "./Layout";
import ColorStore from "./Color";
import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";
import ColorActionTypes from "../constants/ColorConstants";

const LayoutRecord = Immutable.Record({
  layout: Immutable.List([]),
  width: 0,
  height: 0,
  colors: Immutable.List([])
});

let layouts = Immutable.List([]);

_saveLayout = function() {
  let newLayout = new LayoutRecord({
    layout: LayoutStore.getLayout(),
    width: LayoutStore.getWidth(),
    height: LayoutStore.getHeight(),
    colors: ColorStore.getColors()
  });

  layouts = layouts.push(newLayout);
}

class _LayoutHistory extends BaseStore {
  getLayouts() {
    return layouts;
  }
}

const LayoutHistory = new _LayoutHistory();

LayoutHistory.dispatchToken = AppDispatcher.register(function(payload) {
  let action = payload.action;

  switch (action.type) {
    case LayoutActionTypes.GENERATE_LAYOUT:
      _saveLayout();
      LayoutHistory.emitChange();
      break;
    case LayoutActionTypes.SET_WIDTH:
      _saveLayout();
      LayoutHistory.emitChange();
      break;
    case LayoutActionTypes.SET_HEIGHT:
      _saveLayout();
      LayoutHistory.emitChange();
      break;
    case ColorActionTypes.REPLACE_COLOR:
      _saveLayout();
      LayoutHistory.emitChange();
      break;
    default:
  }
});

export default LayoutHistory;
