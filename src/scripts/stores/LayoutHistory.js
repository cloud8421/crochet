import Immutable from "immutable";
import BaseStore from "./_base";
import LayoutStore from "./Layout";
import ColorStore from "./Color";
import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";
import ColorActionTypes from "../constants/ColorConstants";
import LayoutHistoryActionTypes from "../constants/LayoutHistoryConstants";
import LayoutRecord from "../records/layout";

let layouts = Immutable.List([]);
let pageNumber = 1;

_saveLayout = function() {
  let newLayout = new LayoutRecord({
    layout: LayoutStore.getLayout(),
    width: LayoutStore.getWidth(),
    height: LayoutStore.getHeight(),
    colors: ColorStore.getColors()
  });

  layouts = layouts.push(newLayout);
}

_setPageNumber = function(newPageNumber) {
  pageNumber = newPageNumber;
}

class _LayoutHistory extends BaseStore {
  getLayouts() {
    return layouts;
  }
  getPageNumber() {
    return pageNumber;
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
    case LayoutHistoryActionTypes.SET_PAGE:
      _setPageNumber(action.pageNumber);
      LayoutHistory.emitChange();
      break;
    default:
  }
});

export default LayoutHistory;
