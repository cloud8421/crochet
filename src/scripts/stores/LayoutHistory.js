import Immutable from "immutable";
import BaseStore from "./_base";
import LayoutStore from "./Layout";
import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";

const LayoutRecord = Immutable.Record({
  layout: null,
  width: 0,
  height: 0
});

let layouts = Immutable.List([]);

class _LayoutHistory extends BaseStore {
  getLayouts() {
    return layouts;
  }
  addLayout(layoutData) {
    let newLayout = new LayoutRecord(layoutData);
    layouts = layouts.push(newLayout);
    console.log(layouts);
  }
}

const LayoutHistory = new _LayoutHistory();

export default LayoutHistory;
