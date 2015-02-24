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

let _clearLayout = () => {
  layout = layout.clear();
}

let _weightedList = () => {
  let colorsFrequency = layout
                        .flatten()
                        .countBy(x => x);
  let total = colorsFrequency
              .valueSeq()
              .reduce((t, c) => t + c, 0);
  return colorsFrequency.reduce((memo, count, color) => {
           return memo.set(color, 100 - (count / total * 100))
         }, new Immutable.OrderedMap())
         .map((probability, color) => {
           return Immutable.Repeat(color, Math.round(probability))
         })
         .valueSeq()
         .flatten()
}

let _generateLayout = () => {
  _clearLayout();

  let squaresCount = width * height;
  let colorsCount = ColorStore.getColors().size;
  let ColorsRange = Immutable.Range(0, colorsCount);

  _.times(squaresCount, () => {
    let randomizedCombination = _.sample(ColorsRange.toArray(), numberOfLayers);
    layout = layout.push(Immutable.List(randomizedCombination));
  })
}

let _setWidth = (newWidth) => {
  width = newWidth;
}

let _setHeight = (newHeight) => {
  height = newHeight;
}

let _setLayout = (newLayout) => {
  layout = newLayout;
}

let _setNumberOfLayers = (newNumberOfLayers) => {
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

Layout.dispatchToken = AppDispatcher.register(payload => {
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
      _setNumberOfLayers(action.layout.numberOfLayers);
      Layout.emitChange();
      break;
    default:
  }

});

export default Layout;
