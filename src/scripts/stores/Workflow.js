import Immutable from "immutable";
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ColorActionTypes from "../constants/ColorConstants";

let status = new Immutable.Map({
  colorBeingEdited: null
});

let _setColorBeingEdited = (color) => {
  status = status.set('colorBeingEdited', color);
}

class _Workflow extends BaseStore {
  getStatus() {
    return status;
  }
}

const Workflow = new _Workflow();

Workflow.dispatchToken = AppDispatcher.register(payload => {
  let action = payload.action;

  switch (action.type) {
    case ColorActionTypes.EDIT_COLOR:
      _setColorBeingEdited(action.color);
      Workflow.emitChange();
      break;
    default:
  }
});

export default Workflow;
