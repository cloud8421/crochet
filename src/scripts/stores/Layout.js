import Immutable from 'immutable';
import _ from 'lodash';
import BaseStore from "./_base";
import ColorStore from "./Color";
import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";

const DEFAULT_WIDTH = 4;
const DEFAULT_HEIGHT = 4;
const DEFAULT_NUMBER_OF_LAYERS = 3;

let layout = new Immutable.List([]);
let width = DEFAULT_WIDTH;
let height = DEFAULT_HEIGHT;
let numberOfLayers = DEFAULT_NUMBER_OF_LAYERS;

let _clearLayout = function() {
  layout = layout.clear();
}

let _generateLayout = function() {
  _clearLayout();

  let squaresCount = width * height;
  let colorsCount = ColorStore.getColors().size;
  let ColorsRange = Immutable.Range(0, colorsCount);

  _.times(squaresCount, function() {
    let randomizedCombination = _.sample(ColorsRange.toArray(), numberOfLayers);
    layout = layout.push(Immutable.List(randomizedCombination));
  })
}

let _setWidth = function(newWidth) {
  width = newWidth;
}

let _setHeight = function(newHeight) {
  height = newHeight;
}

let _setLayout = function(newLayout) {
  layout = newLayout;
}

let _setNumberOfLayers = function(newNumberOfLayers) {
  numberOfLayers = newNumberOfLayers;
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
  getNumberOfLayers() {
    return numberOfLayers;
  }
}

const Layout = new _Layout();

Layout.dispatchToken = AppDispatcher.register(function(payload) {
  let action = payload.action;

  switch (action.type) {
    case LayoutActionTypes.GENERATE_LAYOUT:
      _generateLayout();
      Layout.emitChange();
      break;
    case LayoutActionTypes.CLEAR_LAYOUT:
      _clearLayout();
      Layout.emitChange();
      break;
    case LayoutActionTypes.SET_WIDTH:
      _setWidth(action.width);
      _generateLayout();
      Layout.emitChange();
      break;
    case LayoutActionTypes.SET_HEIGHT:
      _setHeight(action.height);
      _generateLayout();
      Layout.emitChange();
      break;
    case LayoutActionTypes.SET_NUMBER_OF_LAYERS:
      _setNumberOfLayers(action.numberOfLayers);
      _generateLayout();
      Layout.emitChange();
      break;
    case LayoutActionTypes.RESTORE_LAYOUT:
      _setHeight(action.layout.height);
      _setWidth(action.layout.width);
      _setLayout(action.layout.layout);
      Layout.emitChange();
      break;
    default:
  }

});

export default Layout;
