import Immutable from 'immutable';
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ProjectActionTypes from "../constants/ProjectConstants";

let name = 'My new project';

let _setName = function(newName) {
  name = newName;
}

class _Project extends BaseStore {
  getName() {
    return name;
  }
}

const Project = new _Project();

Project.dispatchToken = AppDispatcher.register(function(payload) {
  let action = payload.action;

  switch (action.type) {
    case ProjectActionTypes.SET_NAME:
      _setName(action.name);
      Project.emitChange();
      break;
    default:
  }

});

export default Project;
