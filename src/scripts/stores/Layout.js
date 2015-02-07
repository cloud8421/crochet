import Immutable from 'immutable';
import _ from 'lodash';
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";

const DEFAULT_WIDTH = 4;

let layout = new Immutable.List([]);
let width = DEFAULT_WIDTH;

_clearLayout = function() {
  layout = layout.clear();
}

_generateLayout = function(squaresCount, colorsCount) {
  let ColorsRange = Immutable.Range(0, colorsCount);

  _.times(squaresCount, function() {
    let randomizedCombination = _.shuffle(ColorsRange.toArray());
    layout = layout.push(Immutable.List(randomizedCombination));
  })
}

_setWidth = function(newWidth) {
  width = newWidth;
}

class _Layout extends BaseStore {
  getLayout() {
    return layout;
  }
  getWidth() {
    return width;
  }
}

const Layout = new _Layout();

Layout.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.type) {
    case LayoutActionTypes.GENERATE_LAYOUT:
      _clearLayout();
      _generateLayout(action.data.squaresCount, action.data.colorsCount);
      Layout.emitChange();
      break;
    case LayoutActionTypes.CLEAR_LAYOUT:
      _clearLayout();
      Layout.emitChange();
      break;
    case LayoutActionTypes.SET_WIDTH:
      _setWidth(action.width);
      Layout.emitChange();
    default:
  }

});

export default Layout;
