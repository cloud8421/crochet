import Immutable from "immutable";
import BaseStore from "./_base";
import LayoutStore from "./Layout";
import ColorStore from "./Color";
import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";
import ColorActionTypes from "../constants/ColorConstants";
import LayoutHistoryActionTypes from "../constants/LayoutHistoryConstants";
import LayoutRecord from "../records/layout";
import Paginator from '../lib/paginator';

const PAGE_SIZE = 5;

let layouts = Immutable.List([]);
let pageNumber = 1;
let page = Immutable.List([]);

let _saveLayout = function() {
  let newLayout = new LayoutRecord({
    layout: LayoutStore.getLayout(),
    width: LayoutStore.getWidth(),
    height: LayoutStore.getHeight(),
    colors: ColorStore.getColors(),
    numberOfLayers: LayoutStore.getNumberOfLayers()
  });

  layouts = layouts.push(newLayout);
  pageNumber = _pageNumbers().last();
}

let _setPageNumber = function(newPageNumber) {
  pageNumber = newPageNumber;
}

let _pageNumbers = function() {
  return _paginated().keySeq();
}

let _paginated = function() {
  return Paginator.paginate(layouts, PAGE_SIZE);
}

class _LayoutHistory extends BaseStore {
  getLayouts() {
    return layouts;
  }
  getPage() {
    return _paginated().get(pageNumber);
  }
  getPageNumber() {
    return pageNumber;
  }
  getPageNumbers() {
    return _pageNumbers();
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
    case LayoutActionTypes.SET_NUMBER_OF_LAYERS:
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
