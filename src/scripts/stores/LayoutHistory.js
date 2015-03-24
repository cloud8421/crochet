import Immutable from "immutable";
import BaseStore from "./_base";
import LayoutStore from "./Layout";
import ColorStore from "./Color";
import ProjectStore from "./Project";
import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";
import ColorActionTypes from "../constants/ColorConstants";
import LayoutHistoryActionTypes from "../constants/LayoutHistoryConstants";
import LayoutRecord from "../records/layout";
import Paginator from '../lib/paginator';

const PAGE_SIZE = 5;

let pageNumber = 1;
let page = Immutable.List([]);

let _saveLayout = () => {
  let newLayout = new LayoutRecord({
    layout: LayoutStore.getLayout(),
    width: LayoutStore.getWidth(),
    height: LayoutStore.getHeight(),
    colors: ColorStore.getColors(),
    numberOfLayers: LayoutStore.getNumberOfLayers()
  });

  ProjectStore.addLayout(newLayout);

  pageNumber = _pageNumbers().last();
}

let _setPageNumber = (newPageNumber) => {
  pageNumber = newPageNumber;
}

let _pageNumbers = () => {
  return _paginated().keySeq();
}

let _paginated = () => {
  return Paginator.paginate(ProjectStore.getLayouts(), PAGE_SIZE);
}

class _LayoutHistory extends BaseStore {
  getLayouts() {
    return ProjectStore.getLayouts();
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

LayoutHistory.dispatchToken = AppDispatcher.register(payload => {
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
