import Immutable from 'immutable';
import _ from 'lodash';
import BaseStore from "./_base";
import LayoutHistory from "./LayoutHistory";
import ColorStore from "./Color";
import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";

const DEFAULT_WIDTH = 4;
const DEFAULT_HEIGHT = 4;

let layout = new Immutable.List([]);
let width = DEFAULT_WIDTH;
let height = DEFAULT_HEIGHT;

_clearLayout = function() {
  layout = layout.clear();
}

_generateLayout = function() {
  let squaresCount = width * height;
  let colorsCount = ColorStore.getColors().size;
  let ColorsRange = Immutable.Range(0, colorsCount);

  _.times(squaresCount, function() {
    let randomizedCombination = _.shuffle(ColorsRange.toArray());
    layout = layout.push(Immutable.List(randomizedCombination));
  })

  LayoutHistory.addLayout({
    layout: layout,
    width: width,
    height: height
  })
}

_setWidth = function(newWidth) {
  width = newWidth;
}

_setHeight = function(newHeight) {
  height = newHeight;
}

class _Layout extends BaseStore {
  getLayout() {
    return layout;
  }
  getWidth() {
    return width;
  }
  getHeight() {
    return height;
  }
}

const Layout = new _Layout();

Layout.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.type) {
    case LayoutActionTypes.GENERATE_LAYOUT:
      _clearLayout();
      _generateLayout();
      Layout.emitChange();
      break;
    case LayoutActionTypes.CLEAR_LAYOUT:
      _clearLayout();
      Layout.emitChange();
      break;
    case LayoutActionTypes.SET_WIDTH:
      _setWidth(action.width);
      _clearLayout();
      _generateLayout();
      Layout.emitChange();
      break;
    case LayoutActionTypes.SET_HEIGHT:
      _setHeight(action.height);
      _clearLayout();
      _generateLayout();
      Layout.emitChange();
      break;
    default:
  }

});

export default Layout;
