import ProjectRecord from '../records/project';
import BaseStore from "./_base";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ProjectActionTypes from "../constants/ProjectConstants";

let project = new ProjectRecord();

let _setName = (newName) => {
  project = project.set('name', newName);
}

class _Project extends BaseStore {
  getName() {
    return project.name;
  }
}

const Project = new _Project();

Project.dispatchToken = AppDispatcher.register(payload => {
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
